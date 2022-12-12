export default function handler(req, res) {
  const { mid } = req.query;
  res.end(`Movie: ${mid}`);
}
