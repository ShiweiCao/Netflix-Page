const express    = require('express');        
const bodyParser = require('body-parser');
const Mylist = require('./Schema/Mylist')
const Recommendation = require('./Schema/Recommendation')
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

app.listen(9001, () => {
    console.log('Listening on port 9001')}
);

// app.get('/mylists', (req, res) => {
//     Mylist.find((err, data) => {
//         if(err) {
//             res.status(500).json({message: err})
//         } else {
//             res.status(200).json(data);
//         }
//     });
// });

// app.get('/recommendations', (req, res) => {
//     Recommendation.find((err, data) => {
//         if(err) {
//             res.status(500).json({message: err})
//         } else {
//             res.status(200).json(data);
//         }
//     });
// });

// Get all data from the database
app.get('/', (req, res) => {
    let result = {};
    Mylist.find((err, data) => {
        if(err) {
            res.status(500).json({message: err});
        } else {
            result = {mylist: [...data]};
            Recommendation.find((err, data) => {
                if(err) {
                    res.status(500).json({message: err});
                } else {
                    result = {...result, recommendations: [...data]};
                    res.status(200).json(result);
                }
            });
        }
    });    
});


// Move item from reommendation to mylist
app.post('/mylists/:id', (req, res) => {
    let obj = {}
    Recommendation.findById(req.params.id, (err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            obj = {...data}
            Recommendation.remove({_id : req.params.id}, (err) =>{
                if(err) {
                    res.status(500).json({message: err})
                } else {
                    var mylist = new Mylist();
                    mylist.title = obj._doc.title;
                    mylist.id = obj._doc.id;
                    mylist._id = obj._doc._id;
                    mylist.img = obj._doc.img;
                    mylist.save( err => {
                        if(err) {
                            res.status(500).json({message: err})
                        } else {
                            res.status(200).json({message: "success"})
                        }
                    })  
                }
            })
        }
    })   
});

// Move item from mylist to recommendation
app.post('/recommendations/:id', (req, res) => {
    let obj = {}
    Mylist.findById(req.params.id, (err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            obj = {...data}
            Mylist.remove({_id : req.params.id}, (err) =>{
                if(err) {
                    res.status(500).json({message: err})
                } else {
                    var recommendation = new Recommendation();
                    recommendation.title = obj._doc.title;
                    recommendation.id = obj._doc.id;
                    recommendation._id = obj._doc._id;
                    recommendation.img = obj._doc.img;
                    recommendation.save( err => {
                        if(err) {
                            res.status(500).json({message: err})
                        } else {
                            res.status(200).json({message: "success"})
                        }
                    })  
                }
            })
        }
    })   
});