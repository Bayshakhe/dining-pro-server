const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const chefData = require('./data/chef.json')

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.get('/chef', (req,res)=>{
    res.send(chefData);
})

app.get('/chef/:id', (req,res) => {
    const id = req.params.id;
    console.log(id)
    const selectedChef = chefData.find(a => a.id == id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`my serever is running on: ${port}`)
})