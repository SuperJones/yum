var Schema = require("../db/schema.js");
var RestaurantModel = Schema.RestaurantModel
var MenuModel = Schema.MenuModel


var restaurantsController = {
  index: function(){
    RestaurantModel.find({}, function(err, docs){
      console.log(docs);
    });
  },
  update: function(req, update){
    RestaurantModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, docs){
      if(err){
        console.log(err)
      }else{
        console.log(docs);
      }
    });
  },
  show: function(req){
    RestaurantModel.findOne({"name": req.name}, function(err, docs){
      console.log(docs);
    });
  }
};

restaurantsController.index();
restaurantsController.show({name: "Lobster Shack"});
restaurantsController.show({zipcode: 20005});
restaurantsController.update({name: "Lobster Shack"}, {name: "Lobster Cuisine"});
