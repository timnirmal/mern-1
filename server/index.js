import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from "./routes/student.js";

const app = express();  //app have copy of express

//student.js will start from /student
app.use('/students', studentRoutes);

//JSON data cannot be more than 20mb
//Everything go through bodyparser when true
app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://timnirmal:0714408821@cluster0.cwcx4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//Chose from process.env.PORT or 5000
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology:true
}).then ( ()=> app.listen(PORT, ()=> console.log('Connection is established and running on port:' ,PORT)
)).catch((err) => console.log(err.message));

////userFindAndModify is not supported from Mongoose v6.0