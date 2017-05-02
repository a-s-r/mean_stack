var express = require("express");
var router=express.Router();
var mongojs=require("mongojs");
var db=mongojs("mongodb://ajay:ajay@ds119081.mlab.com:19081/trainerdeployment", ['trainerList']);

router.get("/trainers", function(req, res){
    //res.send('[{id:1, name:"Ajay"}, {id:1, name:"Ajay 1"}]');
    db.trainerList.find(function(err, docs){
        if(err){
            res.send(err);
        }
        res.json(docs);
    })
});

router.get("/trainer/:id", function(req, res){
    //res.send('[{id:1, name:"Ajay"}, {id:1, name:"Ajay 1"}]');
    var id=req.params.id;

    db.trainerList.findOne({"id":parseInt(id)}, function(err, doc){
        if(err){
            res.send(err);
        }
        res.json(doc);
    })
});

module.exports  =   router;