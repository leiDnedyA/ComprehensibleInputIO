const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.get('/', (req, res)=>{
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`Server now running at port ${PORT}`);
});