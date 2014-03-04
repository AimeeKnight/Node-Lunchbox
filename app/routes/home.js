/*jshint camelcase: false */
'use strict';

var nutritionix = require('node-nutritionix')({
  appId: '7d638e0c',
  appKey: 'bbcdbd78f54a17ab76220266c65b5d36'
}, true);

exports.index = function(req, res){
  res.render('home/index', {title: 'Express Template'});
};

exports.getItem = function(req, res){
// GET https://api.nutritionix.com/v1_1/item?upc=52200004265
// http://192.168.1.14:4000/?upc=52200004265
  var upcCode = req.query.upc;
  nutritionix.v1_1.item({
    upc: upcCode
  }, function (err, item){
    console.log(item);
    res.render('home/index', {title: 'Express Template', item:item});
  });
};
