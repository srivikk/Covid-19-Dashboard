const express = require("express");
const mongoose = require("mongoose");
const app = express();
const fs = require('fs');
// const Schema = mongoose.Schema;
// const url = "mongodb://localhost:27017/source_scrapped_data";

// mongoose.connect(url, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log("Connected to mongo");
// });


const docs = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const excludedList = ["NorthAmerica", "SouthAmerica", "Europe", "", "Asia", "Africa", "Oceania", "World"]
// const covid_data = mongoose.model('Covid',
//     new Schema({}),
//     'covid_data');

app.get("/data", (req, res) => {
    // covid_data.find().exec(function (err, docs) {
    //     let transformedDocs = docs.map(function (doc) {
    //         return doc.toJSON();
    //     });
    //     if (err) {
    //         console.log(err);
    //         return res.status(500).send(err);
    //     }
    //     else {
    let transformedDocs = docs
    transformedDocs.forEach(function (doc, index) {
        if (excludedList.includes(doc['Country,Other'])) {
            delete transformedDocs[index]
        }
    })
    transformedDocs = transformedDocs.filter(function (el) {
        return el != null;
    })
    // console.log(transformedDocs)
    res.send(transformedDocs);
    //     }
    // });
});

app.get("/aggregateData", (req, res) => {
    console.log("I am here for agg data")
    // covid_data.find({ "Country,Other": "World" }, (err, docs) => {
    //     if (err) {
    //         console.log(err);
    //         return res.status(500).send(err);
    //     }
    //     else {
    //         res.send(docs);
    //     }
    // });
    docs.forEach(function (doc) {
        // console.log(doc['Country,Other'])
        if (doc['Country,Other'] === "Mali") {
            console.log(doc)
            res.send(doc)
        }
    })
});

app.get("/aggregateDatadisposable", (req, res) => {
    console.log("I am here for aggData data")
    // const continent = req.query.continent;
    // covid_data.aggregate(
    //     [

    //         {
    //             $match: { "Continent": continent }
    //         }
    //     ], (err, docs) => {
    //         if (err) {
    //             console.log(err);
    //             return res.status(500).send(err);
    //         }
    //         else {
    //             res.send(docs[0]);
    //         }
    //     }
    // )
    res.send(docs[0])
});


app.get("/contdata", (req, res) => {
    // console.log(req.query);

    // const continent = req.query.continent;
    // covid_data.find({ "Continent": continent }, (err, docs) => {
    //     if (err) {
    //         console.log(err);
    //         return res.status(500).send(err);
    //     }
    //     else {
    //         res.send(docs);
    //     }
    // });
    res.send(docs)
});

module.exports = app;
