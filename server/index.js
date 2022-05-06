import mongoose from 'mongoose';
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import router from "../server/routes/auth.todo.js"

import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use('/posts', router)

const PORT =  4001;
const URI = "mongodb://localhost/taskuDb";

app.use(bodyParser.urlencoded({ extended: true , limit:"30mb"}));
app.use(cors());
//app.use(bodyParser.json);
//app.use(helmet());
//app.use(morgan("combined"));

mongoose.connect(URI, {
  // userNewUrlParser: true,
   useUnifiedTopology: true
 
 })
 .then(() => app.listen(PORT, ()=>console.log(`server running: ${PORT}`)))
 .catch((err) => console.log(err.message))

//  mongoose.set('useFindAndModify', false);







 


