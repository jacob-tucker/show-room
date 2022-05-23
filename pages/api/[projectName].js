import { getProject } from "../../lib/server";

export default async function handler(req, res) {
  const { projectName } = req.query;
  const project = await getProject(projectName);
  res.status(200).json(project);
}
