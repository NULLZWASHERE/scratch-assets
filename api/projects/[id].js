export default async function handler(req, res) {
  const { id } = req.query;

  const response = await fetch(
    `https://scratch.mit.edu/projects/${id}/`
  );

  const html = await response.text();

  res.json({
    status: response.status,
    length: html.length,
    preview: html.slice(0, 500)
  });
}
