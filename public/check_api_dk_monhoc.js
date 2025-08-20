export default function handler(req, res) {
  const { key } = req.query;
  const validKey = "STU2025-REGISTER-VALID"; // Key thật, chỉ lưu ở đây

  res.status(200).json({ valid: key === validKey });
}
