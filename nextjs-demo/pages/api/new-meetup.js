// /api/new-meetup

import { MongoClient } from 'mongodb';

async function handler(req, res) {
  console.log(req, res)
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      'mongodb+srv://serhii-ahafonov:BF1w6pY8dUkIcQVd@cluster0.tj170.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    await client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;