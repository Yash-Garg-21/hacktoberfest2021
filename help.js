// const {MongoClient} = require("mongodb");
//
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri = "mongodb://localhost:27017";
//
// // const client = new MongoClient(uri, {useUnifiedTopology: true});
// const client = new MongoClient(uri);
// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected Successfully to server");
//
//         const database = client.db('fruitsDB');
//         const fruitsCollection = database.collection('fruits');
//         const docs = [
//             {
//               name: "Lichi",
//               score: 8,
//               review: "Great Fruit",
//             },
//             {
//               name: "Pineapple",
//               score: 6,
//               review: "Kind Sour",
//             },
//             {
//               name: "Mango",
//               score: 9,
//               review: "Great Stuff!",
//             },
//           ]
//         const option={ordered: true};
//         const result=await fruitsCollection.insertMany(docs,option);
//         const cursor = fruitsCollection.find({});
//         console.log(`${result.insertedCount} documents were inserted`);
//         if ((await fruitsCollection.countDocuments) === 0) {
//             console.log("No documents found!");
//         }
//         console.log(`Total entries ${await fruitsCollection.countDocuments()}`);
//         await cursor.forEach((fruit) => {
//             console.log(fruit);
//         });
//
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
//
// run().catch(console.dir);



const mongoose = require("mongoose");

// Run main function and catch error
main().catch((err) => console.log(err));

// async function
async function main() {
  //localhost ain't working because in config it's binding to 127.0.0.1
  const url = "mongodb://localhost:27017";
  const dbPath = "/fruitsDB";
  await mongoose.connect(url + dbPath, {
    useNewUrlParser: true,
  });

  // The fruit schema
  const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
  });

  const Fruit = new mongoose.model("Fruit", fruitSchema);

  const fruit = new Fruit({
    name: "Apple",

    rating: 7.0,

    review: "pretty solid as a fruit",
  });

   const personSchema = new mongoose.Schema({
     name: String,
     age: Number,
   });

   const Person = new mongoose.model("Person", personSchema);

   const person = new Person({
     name: "John",
     age: 37,
   });

   //await person.save();

   const kiwi = new Fruit({
     name: "kiwi",
     rating: 10,
     review: "Best fruit in the world",
   });

   const orange = new Fruit({
     name: "Orange",
     rating: 5,
     review: "Too sour for me",
   });

   const banana = new Fruit({
     name: "Banana",
     rating: 8,
     review: "Weird Texture",
   });

   Fruit.insertMany([kiwi, orange, banana], function(err){
     if(err){
       console.log(err);
     } else{
       console.log("Successfully saved all the fruits");
     }
   });














  //  await fruit.save(); // insert one item into the collection

  // const personSchema = new mongoose.Schema({
  //   name: String,
  //   age: Number,
  // });
  //
  // const Person = new mongoose.model("Person", personSchema);
  //
  // const person = new Person({
  //   name: "John",
  //   age: 37,
  // });

  //   await person.save();

  // const kiwi = new Fruit({
  //   name: "kiwi",
  //   rating: 10,
  //   review: "Best fruit in the world",
  // });
  //
  // const orange = new Fruit({
  //   name: "Orange",
  //   rating: 5,
  //   review: "Too sour for me",
  // });
  //
  // const banana = new Fruit({
  //   name: "Banana",
  //   rating: 8,
  //   review: "Weird Texture",
  // });

  // Fruit.insertMany([kiwi, orange, banana], (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Successfully added to the database");
  //   }
  // });

  //  mongoose.connection.close(); // close the mongoose connection
}
