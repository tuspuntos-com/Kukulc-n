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
const PositionSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
 positionName: {
   type: String,
   required: true
 },
 positionCompany: {
   type: String,
   required: true
 },
 positionLocation: {
   type: String,
   required: true
 },
 positionCategory:{
  type:String,
  enum:['Marketing','Sales', 'Administration']
 },
 positionType:{
  type:String,
  enum:['Full Time','Home Office']
 },
 publishDate: {
   type: Date,
   default: date.now()
 },
 positionDate: {
   type: Date,
 } ,
 minPay: {
   type: Number
 } ,
 maxPay: {
   type: Number
 }
},{timestamps: true});
const Position = mongoose.model('Position', PositionSchema);
module.exports = { Position };