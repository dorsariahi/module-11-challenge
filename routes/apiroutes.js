const router = require('express').Router();
const path = require('path');
const fs = require('fs');
let dataBase = require('../db/db.json')

router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../db/db.json'))
);

router.post('/notes', (req, res) =>{
    //before we push req.body we need to add an id to the note UU id
dataBase.push(req.body);
fs.writeFile('./db/db.json', JSON.stringify(dataBase), function (err) {
    if (err) throw err;
    console.log('succsesfully saved to the db File');
  });
  res.json(req.body)}
);

module.exports = router