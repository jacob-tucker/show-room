import { createProject } from "../../lib/server";

export default async function handler(req, res) {
  const data= req.body;
  await createProject(data);
  res.status(200).json({});
}
