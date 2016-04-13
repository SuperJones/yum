var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to MongoDB!");
});

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;


var MenuSchema = new Schema({
  title: String,
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelp_url: String,
  menus: [MenuSchema]
});



var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var MenuModel = mongoose.model("Menu", MenuSchema);

module.exports = {
  RestaurantModel: RestaurantModel,
  MenuModel: MenuModel
};
