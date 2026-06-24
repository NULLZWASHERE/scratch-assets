export default async function handler(req, res) {
  const { user } = req.query;

  const url = `https://scratch.mit.edu/users/${user}/`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36"
    }
  });

  const html = await response.text();

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
