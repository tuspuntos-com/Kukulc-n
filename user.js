const Schema = mongoose.Schema;
const mongoose = require('mongoose');
const URL_MONGO = 'mongodb+srv://RubenCompan:Rubencl5@rubencluster-8q10h.mongodb.net/test';
mongoose.connect(
 URL_MONGO,
 {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true
 },
 (error) => {
   if (error) console.log(error);
   if (!error) console.log('Conexion exitosa');
 }
);
const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  userPhone:{
   type:Number,
   required: true
  },
  userEmail:{
   type:String,
   required: true
  },
  userPassword: {
    type:String,
   required: true
  },
  userPhoto: {
    type:String,
   required: true
  },
  userResume: {
    type:String,
   required: true
  },
  userBirth: {
    type:Date,
   required: true
  },
  userResume: {
    type:String,
   required: true
  },
  userMaritalStatus:{
    type:String,
    required: true 
  },
  userGender:{
    type:String,
    required: true 
  },
  userLocation:{
    type:String,
    required: true 
  },
  userDescription:{
    type:String
  },
  userLocation:{
    type:String,
    required: true 
  },
  userSkills:{
    type:String,
    required: true 
  },
  userTechnicalSkills:{
    type:String,
    required: true 
  },
  userAge:{
    type:Number
  },
  idiom:[
    {
        userIdiom:{
            type:String
        },
        percent:{
            type:Date
        }
    }
],
​
  }, {timestamps: true});
const user = mongoose.model('user', userSchema);
module.exports = { user };