// Netlify Function — lives at netlify/functions/contact.js
// Same job as the earlier Vercel version: takes the contact form POST and
// files it as a GitHub Issue. This is the one to actually use with Netlify.

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  const { firstName, lastName, email, message } = data || {};
  if (!firstName || !lastName || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
  }

  const [owner, repo] = (process.env.GITHUB_REPO || '').split('/');
  if (!owner || !repo || !process.env.GITHUB_TOKEN) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server not configured' }) };
  }

  try {
    const ghRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: `New contact form message from ${firstName} ${lastName}`,
        body: `**From:** ${firstName} ${lastName}\n**Email:** ${email}\n\n**Message:**\n${message}`,
        labels: ['contact-form'],
      }),
    });

    if (!ghRes.ok) {
      const errText = await ghRes.text();
      console.error('GitHub API error:', errText);
      return { statusCode: 502, body: JSON.stringify({ error: 'Failed to create issue' }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Unexpected error' }) };
  }
};