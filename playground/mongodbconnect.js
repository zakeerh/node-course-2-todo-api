const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to Mongo DB Server');
  }
  console.log('connected to MongoDB server');
  // db.collection('Todos').insertOne({
  //   text: 'Something to Do',
  //   completed: false
  // },(err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert to Todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined, 2));
  // })

  db.collection('Users').insertOne({
    Name: 'Zakeer Hussain',
    Age: 34,
    Location: 'Phoenix AZ'
  },(err, result)=>{
    if(err){
      return console.log('Unable to insert to Users', err);
    }
    console.log(JSON.stringify(result.ops,undefined, 2));
  })
  db.close()
});
