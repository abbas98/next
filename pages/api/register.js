// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb"

export default async function handler(req, res) {

  if (req.method === 'POST'){
    const data = req.body
    const client = await MongoClient.connect('mongodb+srv://amirabbas:gEliUZvlfxDQSJn0@cluster0.h1rgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    const db = client.db()
    const collection = db.collection('users')
    const result = await collection.insertOne(data)
    console.log(result);
    client.close()
    res.status(201).json({ message: 'user registered :)' });

  }
  if (req.method === 'GET'){

  }

}
