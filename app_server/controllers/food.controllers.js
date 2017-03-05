var mongoose = require('mongoose');
var Food = mongoose.model('Food');

module.exports.foodGetAll = function(req, res) {

  console.log('Read All Food entries');

//reads all documents in food
  Food
    .find()    //exec tells to execute query 
    .exec(function(err, food) {    //food is the return data
      console.log("Found Food entry", food.length);
      console.log(food);
      res
        .json(food);  // creates json response with the data 
    });

};


module.exports.foodGetOne = function(req, res) {
  console.log('Read one food entry');
  var id = req.params.foodId;
  console.log('req.params ', req.params);
  console.log('GET foodId', id);

  Food
    .findById(id)
    .exec(function(err, doc) {
      if (err) {
        console.log("can't get food entry", id);
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(200)
          .json(doc);
      }  
    });

};


module.exports.foodAddOne = function(req, res) {
  console.log("POST new food entry");

  console.log('req params body' , req.params, req.body);

  //creates a new food record 
  Food
    .create({
      name : req.body.name
     
    }, function(err, food) {
      if (err) {
        console.log("can't create food entry");
        res
          .status(400)
          .json(err);
      } else {
        console.log("Job done", food);
        res
          .status(201)
          .json(food);
      }
    });
};

module.exports.foodUpdateOne = function(req, res) {
  var foodId = req.params.foodId;

  console.log('Update food', foodId);

  Food
    .findById(foodId)
    .exec(function(err, food) {
      if (err) {
        console.log("Error");
        res
          .status(500)
          .json(err);
          return;
      } else if(!food) {
        console.log("Food not found", foodId);
        res
          .status(404)
          .json({
            "message" : "Food not found " + foodId
          });
          return;
      }

      food.name = req.body.name;

      food
        .save(function(err, foodUpdated) {
          if(err) {
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json();
          }
        });


    });

};

var _splitArray = function(input) {
  var output;
  if (input && input.length > 0) {
    output = input.split(";");
  } else {
    output = [];
  }
  return output;
};


module.exports.foodDeleteOne = function(req, res) {
  var foodId = req.params.foodId;

  Food
    .findByIdAndRemove(foodId)
    .exec(function(err, food) {
      if (err) {
        res
          .status(404)
          .json(err);
      } else {
        console.log("Food deleted, id:", foodId);
        res
          .status(204)
          .json();        
      }
    });
};








