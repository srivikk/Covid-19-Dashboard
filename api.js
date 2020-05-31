const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const url = "mongodb://localhost:27017/source_scrapped_data";
const app = express();
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected to mongo");
});

const excludedList = ["NorthAmerica", "SouthAmerica", "Europe", "","Asia","Africa","Oceania","World"]
const covid_data = mongoose.model('Covid',
    new Schema({}),
    'covid_data');

app.get("/data", (req, res) => {
    covid_data.find().exec(function (err, docs) {
        let transformedDocs = docs.map(function (doc) {
            return doc.toJSON();
        });
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        else {

            transformedDocs.forEach(function (doc, index) {
                if (excludedList.includes(doc['Country,Other'])) {
                    delete transformedDocs[index]
                }
            })
            transformedDocs = transformedDocs.filter(function (el) {
                return el != null;
              })
            res.send(transformedDocs);
        }
    });
});

app.get("/aggregateData", (req, res) => {
    covid_data.find({ "Country,Other": "World" }, (err, docs) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        else {
            res.send(docs);
        }
    });
});

app.get("/aggregateDatadisposable", (req, res) => {
    const continent = req.query.continent;
    covid_data.aggregate(
        [

            {
                $match: { "Continent": continent }
            }
        ], (err, docs) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            else {
                res.send(docs[0]);
            }
        }
    )
});


app.get("/contdata", (req, res) => {
    console.log(req.query);

    const continent = req.query.continent;
    covid_data.find({ "Continent": continent }, (err, docs) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        else {
            res.send(docs);
        }
    });
});

module.exports = app;
