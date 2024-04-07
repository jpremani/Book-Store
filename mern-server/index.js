const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");

//Middleware
app.use(cors());
app.use(express.json());

//Router
app.get("/", (req, res) => {
  res.send("Hello World");
});

// MongoDb Config

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://mern-book-store:JayPremani98@jaycluster.73argif.mongodb.net/?retryWrites=true&w=majority&appName=JAYCLUSTER";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    //create a collection of the document
    const bookCollection = client.db("BookInventory").collection("books");
    //insert a book into the database
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollection.insertOne(data);
      res.send(result);
    });
    app.get("/all-books", async (req, res) => {
      const result = await bookCollection.find().toArray();
      res.send(result);
    });
    //update books:patch or update methods
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };
      const result = await bookCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    //Delete data
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    });

    //find by category
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const results = await bookCollection.find(query).toArray();
      res.send(results);
    });
    //Get single books data
    app.get("/book/:id", async (req, res) => {
      const id = req.params;
      const filter = { _id: new ObjectId(id) };
      const results = await bookCollection.findOne(filter);
      res.send(results);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
