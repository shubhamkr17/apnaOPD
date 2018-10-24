const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
  name : String,
  email : String,
  imageUrl : String,
  address : [
  		{
  			house_lane1: String,
  			locality: String,
  			city: String,
  			district : String,
  			state : String,
  			pincode : Number
  		}
  ],
  isDoctor : {type : Boolean, default : false },
  isRetailer : {type : Boolean, default : false },
  isWholeseller : {type : Boolean, default : false },
  isManufacturer : {type : Boolean, default : false },
  isSupplier : {type : Boolean, default : false }
});

const users= mongoose.model('User',userSchema);
module.exports=users;
