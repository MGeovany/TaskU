import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import router from "./routes/auth_todo.js";

//import helmet from "helmet";
//import morgan from "morgan";

const app = express();

app.use("/posts", router);

const PORT = process.env.PORT || 5000;
const URI = "mongodb://localhost/taskuDb";
const URL = "mongodb+srv://marloncastro:020399Mg@cluster0.jh2t6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
//app.use(bodyParser.json);
//app.use(helmet());
//app.use(morgan("combined"));

mongoose
  .connect(URL, {
    // userNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`server running: ${PORT}`)))
  .catch((err) => console.log("Error es:" + err.message));

// mongoose.set('useFindAndModify', false);
