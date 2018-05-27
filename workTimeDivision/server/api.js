const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  login: { type: String   },
  password: { type: String   },
},{ versionKey: false });


var model = mongoose.model('users', UsersSchema, 'users');

var db = mongoose.connect("mongodb://localhost:27017/workTimeDivision", function(err, response){
  if(err){ console.log( err); }
  else{ console.log('Connected to DB');
  }
});

router.get('/', (req,res)=>{
    res.send("api work")
});
router.post('/login', function (req,res) {
 // console.log(req.body.login);
  model.find({"login":req.body.login, "password":req.body.password},function(err,data){
      if(err){
        res.send(err);

      }
      else{
        if(data[0])
          console.log("access confirmed");
        else
          console.log("access denied");
        console.log(data);
        res.send(data[0]);
      }
    })
});
module.exports = router;
