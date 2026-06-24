export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await fetch(
      `https://scratch.mit.edu/projects/${id}/`
    );

    const html = await response.text();

    res.setHeader("Content-Type", "text/html");
    res.status(response.status).send(html);
  } catch (err) {
    res.status(500).send("Failed to fetch project");
  }
}
