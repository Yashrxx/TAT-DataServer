const express=require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config();

const allowedOrigins = ['http://localhost:3000', 'https://yashrxx.github.io'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS Not Allowed'));
    }
  },
  credentials: true
}));


app.use(express.json())

// const mongoURI = process.env.MONGO_URI;

// console.log('MONGO_URI:', mongoURI);

mongoose.connect('mongodb+srv://yashrx:Kapil_jain01@tat.rufrpql.mongodb.net/measurement?retryWrites=true&w=majority&appName=TAT',{

}).then(()=>console.log("Connected to Mongodb Atlas"))
.catch(err=>console.error("Mongodb connection error : ",err));

app.use('/api/auth',require('./routes/formData'))

const PORT = process.env.PORT || 5000 ;

app.listen(PORT,()=>console.log(`Server running at port ${PORT}`));