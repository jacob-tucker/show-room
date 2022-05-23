const {MongoClient} = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  const { projectName } = req.query;
  await client.connect();
  const projects = client.db("show-room").collection('projects');
  const project = await projects.findOne({name: projectName});
  console.log(project);
  res.status(200).json(project);
}
