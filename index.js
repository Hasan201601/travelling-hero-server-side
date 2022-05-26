const express = require('express');
const app = express()
const cors = require('cors')
const { MongoClient } = require('mongodb')
const objectId = require('mongodb').ObjectId;
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
        const orders = database.collection('orders')

        //GET API
        app.get('/offerings', async (req, res) => {
            const cursor = offeringsCollection.find({});
            const offerings = await cursor.toArray()
            res.send(offerings)
        })
        //shipping GET API
        app.get('/orders', async (req, res) => {
            const cursor = orders.find({});
            const userOrders = await cursor.toArray()
            res.send(userOrders)
        })
        //GET single offering
        app.get('/offerings/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: objectId(id) }
            const result = await offeringsCollection.findOne(query)
            res.json(result)
        })
        //GET my order
        app.get('/orders/:email', async (req, res) => {
            const email = req.params.email
            console.log(email)
            const query = { email: email }
            const result = await orders.find(query).toArray()
            console.log(result)
            res.json(result)
        })
        //POST API
        app.post('/offerings', async (req, res) => {
            const offering = req.body;
            const result = await offeringsCollection.insertOne(offering)
            res.json(result)
        })
        //Shipping POST API
        app.post('/orders', async (req, res) => {
            const order = req.body;
            const result = await orders.insertOne(order)
            res.json(result)
        })
        //DELETE API 
        app.delete('/orders/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: objectId(id) };
            console.log(query)
            const result = await orders.deleteOne(query);
            res.json(result);
        })
        //UPDATE API
        app.put('/orders/:id', async (req, res) => {
            const id = req.params.id;
            const updatedOrder = req.body;
            console.log(updatedOrder)
            const options = { upsert: true };
            const filter = { _id: objectId(id) };
            // create a document that sets the plot of the movie
            const updateDoc = {
                $set: {
                    status: updatedOrder.status
                },
            };
            const result = await orders.updateOne(filter, updateDoc, options);
            res.json(result);
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