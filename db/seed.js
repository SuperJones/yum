var mongoose = require('mongoose');
var Schema = require("./schema.js");

var RestaurantModel = Schema.RestaurantModel;
var MenuModel = Schema.MenuModel;

RestaurantModel.remove({}, function(err){
  console.log(err);
});
MenuModel.remove({}, function(err){
  console.log(err);
});

var lobstershack= new RestaurantModel({
  name: "Lobster Shack",
  address: {
    street: "5555 Shell Fish Ln",
    zipcode: 20005
  },
  yelp_url: "http://www.yelp.com/biz/lobster-shack-restaurant"
});

var menu1 = new MenuModel({title: "Breakfast menu"});


lobstershack.menus.push(menu1);
lobstershack.save(function(err, restaurant){
  if(err){
    console.log(err);
  }else{
    console.log(restaurant + " was saved to our db!");
  }
});

var noodles= new RestaurantModel({
  name: "Noodles Yum Yum",
  address: {
    street: "1234 Main Noodle Rd",
    zipcode: 20005
  },
  yelp_url: "http://www.yelp.com/biz/noodles-so-yummy"
});

noodles.save(function(err, restaurant){
  if(err){
    console.log(err);
  }else{
    console.log(restaurant + " was saved to our db!");
  }
});
