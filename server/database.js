import mongoose from 'mongoose';

import db from  mongoose.connection;

const uri = "mongodb://localhost/taskuDb";

function connectDB(){

  mongoose.connect(uri, {
   // userNewUrlParser: true,
    useUnifiedTopology: true
  
  })
  .then(() => app.listen(uri, ()=>console.log(`server running: ${uri}`)))
  .catch((err) => console.log(err.message))

//  mongoose.set('useFindAndModify', false);


}

connectDB();