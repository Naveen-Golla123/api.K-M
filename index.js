const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Counter = require('./models/CountSchema');
const cors = require('cors');

const url = "mongodb+srv://Kishore_weds_manasa:uXwUTRFmk8GpGwjV@cluster0.o55fl.mongodb.net/?retryWrites=true&w=majority"
const connectionParams = {
    useNewUrlParser: true
};

mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(cors());

app.get('/updateAndGetCount', async (req, res) => {
    console.log("Route Triggered");
    const counts = await Counter.findOne({ fieldName: "vists" });
    if (counts && counts.count) {
        await Counter.updateOne({ fieldName: "vists" }, { count: ++counts.count });
    }
    res.json({ count: counts.count++ });
    //KishoreManasa
});

app.post('/setCount', async (req, res) => {
    const count = new Counter({
        count: 1,
        fieldName: "vists"
    })
    const c1 = await count.save();
    res.json(c1);
});

app.listen(9000, () => {
    console.log('Server Started')
})
