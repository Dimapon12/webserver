var express = require('express');
var db = require('../db')
var path = require('path');
var router = express.Router();



/* GET home page. */
router.get('/', async(req, res, next) => {
  //var data = await db.query('SELECT * FROM test')
  //global.appRoot = path.resolve(__dirname);
  res.sendFile('C:/Users/Dimasta/Desktop/webserver/index.html');
  //res.json({ response: data.rows })
  //res.render('index', { title: 'Express' });
});

module.exports = router;
