import { getProjects } from "../../lib/server";

export default async function handler(req, res) {
  const results = await getProjects();
  res.status(200).json(results);
}
