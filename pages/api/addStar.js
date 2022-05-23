import { addStar } from "../../lib/server";

export default async function handler(req, res) {
  const data = req.body;
  await addStar(data.name);
  res.status(200).json({});
}
