import { MongoClient } from 'mongodb';
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function isConnected() {
  console.log("Mongo is connected!")
  return !!client && !!client.topology && client.topology.isConnected()
}

export async function getProjects() {
  if (!isConnected()) await client.connect();
  const projects = client.db("show-room").collection('projects');
  return await projects.find().toArray();
}

export async function getProject(projectName) {
  if (!isConnected()) await client.connect();
  const projects = client.db("show-room").collection('projects');
  return await projects.findOne({name: projectName});
}

export async function createProject(data) {
  if (!isConnected()) await client.connect();
  const projects = client.db("show-room").collection('projects');
  await projects.insertOne(data);
}

export async function addStar(name) {
  if (!isConnected()) await client.connect();
  const projects = client.db("show-room").collection('projects');
  await projects.updateOne({ name }, {$inc: { stars: 1 }});
}