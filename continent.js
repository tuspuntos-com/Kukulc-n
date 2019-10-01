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
const ContinenteSchema = new Schema({
   continenteName: {
     type: String,
     required: true
   }
 }, {timestamps: true});
 const Continent = mongoose.model('Continent', ContinentSchema);
 module.exports = { Continent };