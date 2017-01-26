//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to Mongo DB Server');
  }
  console.log('connected to MongoDB server');
 db.collection('Todos').find({
   _id: new ObjectID("58898ed6d03a7c99403d4e94")
 }).toArray().then((docs)=>{
   console.log('Todos');
   console.log(JSON.stringify(docs,undefined, 2));
 },(err)=>{
   console.log('Unable to fetch Todos', err);
 })

 db.collection('Users').find({Name:'Zaina'}).toArray().then((docs)=>{
   console.log(`Users : ${JSON.stringify(docs, undefined,2)}`);
 },(err)=>{

 });
  //db.close()
});
