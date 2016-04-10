var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to MongoDB!");
});

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelp_url: String,
  items: []
});

var MenuSchema = new Schema({
  title: String,
  restaurants : [RestaurantSchema]
});
