



//api test







var express = require('express');
var app = express();
const port = process.env.PORT || 3000;



//sharepoint auth libs
var spauth = require('node-sp-auth');
var request = require('request-promise');
var $REST = require("gd-sprest");


var url = "https://aarainternationalinc.sharepoint.com/sites/A2Z";
const credentialOptions =
  {
  username: "Ramalingam.Shunmugam@aarasystems.com",
  password: "Cpindia$#@!",
  online: true
  };
 
var sprequest = require('sp-request');
let spr = sprequest.create(credentialOptions);

spr.get('https://aarainternationalinc.sharepoint.com/sites/A2Z/_api/web/lists/GetByTitle(\'EmpDetails\')/items?$select=Title,Department,DateOfBirth,Country/Title,Manager/Title&$expand=Country,Manager/Id ')

//spr.get('https://aarainternationalinc.sharepoint.com/sites/A2Z/_api/web/lists/GetByTitle(\'EmpDetails\') ') 
  .then(response => {


    console.log(response.body.d.results)

    }
  
  
  )
  .catch(err =>{
    console.log(err);
  });