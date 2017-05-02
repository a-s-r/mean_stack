var express = require("express");
var path=require("path");
var port = 8000;

var app=express();

var indexApi=require('./routes/indexRoute.js');
var trainerApi=require('./routes/trainerRoute.js');
app.use('/', indexApi);
app.use('/api', trainerApi);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));


app.listen(port, function(){
    console.log("hi, app is listen at port 8000");
})