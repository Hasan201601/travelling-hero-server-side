const express = require('express');
const app = express()
const cors = require('cors')
const { MongoClient } = require('mongodb')
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

//mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.riwcs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(uri)

async function run() {
    try {
        await client.connect()
        console.log('database connected')
        const database = client.db('travelingHeroDb');
        const offeringsCollection = database.collection('offerings')

        //GET API
        app.get('/offerings', async (req, res) => {
            const cursor = offeringsCollection.find({});
            const offerings = await cursor.toArray()
            res.send(offerings)
        })
        //POST API
        app.post('/offerings', async (req, res) => {
            const offering = req.body;
            const result = await offeringsCollection.insertOne(offering)
            res.json(result)
        })
    }
    finally {
        // await client.close()
    }
}
run().catch(console.dir)
app.get('/', (req, res) => {
    res.send('okay ,you are connected')
})
app.listen(port, () => {
    console.log('listening to port', port)
})