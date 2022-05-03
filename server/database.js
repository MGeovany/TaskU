const mongoose = require('mongoose');
const db = mongoose.connection;

const uri = "mongodb://localhost/taskuDb";

function connectDB(){

  mongoose.connect(uri, {
  
  });

  db.on('open', _=>{
    console.log('connected');
  })

  db.on("error", err =>{
    console.log(err);
  })

}

connectDB();