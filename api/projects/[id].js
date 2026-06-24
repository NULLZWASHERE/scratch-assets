export default async function handler(req, res) {
  const { id } = req.query;

  res.json({
    id,
    url: `https://scratch.mit.edu/projects/${id}/`
  });
}
