import { createProject } from "../../lib/server";

export default async function handler(req, res) {
  console.log('POSTING!')
  const data = req.body;
  console.log(data);
  await createProject(data);
  res.status(200).json({});
}
