const {MongoClient} = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  await client.connect();
  const projects = client.db("show-room").collection('projects');
  const results = await projects.find().toArray();
  res.status(200).json(results);
}
