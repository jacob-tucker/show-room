const {MongoClient} = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  const data = req.body;
  client.connect(err => {
    console.log("Mongo is connected!")
    const projects = client.db("show-room").collection('projects');
    projects.updateOne({name: data.name}, {$inc: { stars: 1 }});
  });

  res.status(200).json({ name: 'Jacob Tucker' });
}
