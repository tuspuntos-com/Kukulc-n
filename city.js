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
const CitySchema = new Schema({
    cityName: {
     type: String,
     required: true
   },
   contryIdRef:
    {
      type:{
        type: mongoose.Schema.Type.ObjectId,
        ref:'Contry'
      }
    }
   
 }, {timestamps: true});
 const City = mongoose.model('City', CitySchema);
 module.exports = { City };