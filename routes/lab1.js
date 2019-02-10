var express = require('express');
var router = express.Router();
var path = require('path');
var htmlpath = require('../public/htmlpages')

router.get('/1', function(req, res, next) {
  res.sendFile(path.join(htmlpath + '/lab1/1.html'));
});

router.get('/2', function(req, res, next) {
  res.sendFile(path.join(htmlpath + '/lab1/2.html'));
});

router.get('/3', function(req, res, next) {
  res.sendFile(path.join(htmlpath + '/lab1/3.html'));
});

router.get('/4', function(req, res, next) {
  res.sendFile(path.join(htmlpath + '/lab1/4.html'));
});

module.exports = router;
