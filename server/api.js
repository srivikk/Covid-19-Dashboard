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

const covid_data = mongoose.model('Covid',
    new Schema({}),
    'covid_data');

app.get("/data", (req, res) => {
    covid_data.find({}, (err, docs) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        else {
            console.log(docs);
            res.send(docs);
        }
    });

    app.get("/aggregateData", (req, res) => {
        covid_data.aggregate([{
            $group: {
                _id: "",
                TotalCases: { $sum: { $toInt: "$TotalCases" } },
                TotalRecovered: { $sum: { $toInt: "$TotalRecovered" } },
                TotalDeaths: { $sum: { $toInt: "$TotalDeaths" } },
            }
        }], (err, docs) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            else {
                console.log(docs);
                res.send(docs[0]);
            
            }
        });
    });

    //========================================================================================================




    //=============================================================================================================

    //=============================

    // covid_data.aggregate([{
    //     $group:{
    //         _id:"",
    //         TotalCases:{$sum:{$toInt:"$TotalCases"}},
    //         TotalRecovered:{$sum:{$toInt:"$TotalRecovered"}},
    //         TotalDeaths:{$sum:{$toInt:"$TotalDeaths"}},
    //     }
    // }], (err,docs)=>{
    //     if(err){
    //         console.log(err);
    //         return res.status(500).send(err);
    //     }
    //     else{
    //         console.log(docs);
    //         res.send(docs[0]);
    //     }
    // });
});

module.exports = app;
