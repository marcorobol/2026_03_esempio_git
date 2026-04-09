import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function run() {
    try {
        console.log("Connecting to MongoDB...", uri);
        await client.connect();
        console.log("Connected!");
        const db = client.db("easylib");
        const coll = db.collection("books");
        const cursor = coll.find();
        await cursor.forEach(console.log);
    } finally { // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);