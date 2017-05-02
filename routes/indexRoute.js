var express = require("express");

var router=express.Router();

router.get("/", function(req, res){
    res.render('index.html');
});

/*router.get("/trainers", function(req, res){
    res.send('[{id:1, name:"Ajay"}, {id:1, name:"Ajay 1"}]');
});*/

module.exports  =   router;