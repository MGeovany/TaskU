import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

export const app = express();

app.use(bodyParser.urlencoded({ extended: true , limit:"30mb"}));
//app.use(bodyParser.json);

app.use(cors());
//app.use(helmet());
app.use(morgan("combined"));

const CONNECTION_URL = 'mongodb+srv://marloncastro:020399Mg@cluster0.jh2t6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


app.use(require("./routes/auth.todo"));
app.use("/todo", require("./routes/todo.route"));

export default app;
