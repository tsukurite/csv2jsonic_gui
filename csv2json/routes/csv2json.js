var fs = require('fs');
var csv = require('csv');
var Iconv = require('iconv').Iconv;
var conv = new Iconv('cp932','utf-8');
var _ = require('lodash');

var express  = require('express');
var csv2json = require('../modules/csv2json/app');
var router = express.Router();

function getHtml(req, res, next) {
  res.render( 'index' );
  return
}

function getJson (req, res, next) {

  var _listRow = req.body.csv.split( '\n' );

  //var strr = req.data.csv.split('\r');
  //json_array.push( data );
  //def.resolve( json_array );
  
  var createJson = _.map( _listRow, function ( values ) {
    console.log();
    return values.split( ',' );
  });
  
  var str = JSON.stringify( createJson );
  res.json( str );
  return
};

/* GET users listing. */
router.get('/', getHtml );

/* POST users listing. */
router.post('/', getJson );

module.exports = router;