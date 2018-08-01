const express    = require('express');        
const bodyParser = require('body-parser');

const app = new express();  

const mongoose   = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds014658.mlab.com:14658/mydb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log("A " + req.method + " request received at " + new Date());
    next();
  });
  
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});



app.listen(9000, () => {
    console.log('Listening on port 9000')}
);



