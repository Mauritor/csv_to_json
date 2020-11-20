const express = require('express');
const path = require('path');
const csv = require('csvtojson');
const _ = require('lodash');

const app = express();


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    const csvFilePath = path.join(__dirname, 'testdb.csv');
    const dataArray = [];
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            //console.log(jsonObj);
            //res.json(jsonObj);
          const result =  _.uniqWith(jsonObj, _.isEqual);
          console.log(result);
          res.json(result);
        })
    

})

app.listen(3000, () => {
    console.log('server on port 3000');
})