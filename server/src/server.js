const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Connect DB
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
}
);