const express = require('express');
const port = 3000;
const app = express()
const path = require('path');
const bodyParser =  require('body-parser');

app.use(bodyParser.json())


app.get('/',(req,res) => {
    res.send('Hello From homepage')
})
app.listen(port,()=>{
    console.log(`this app is listening to port:${port}`)
});


