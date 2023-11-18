import express from 'express';
import router from './routes/todos';
import bodyParser from 'body-parser';
import todoRouter from './routes/todos'

var cors = require('cors')



const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use(express.json());

app.use('/',todoRouter);


app.listen(8000,()=>{
    console.log("Server listening at port 8000");
});

module.exports=app;


