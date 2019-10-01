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
const AddressSchema = new Schema({
    addressName: {
     type: String,
     required: true
   },
   addressLatitud: {
    type: String,
    required: true
  },
  addressLongitud: {
    type: String,
    required: true
  },
  addressStreet: {
    type: String,
    required: true
  },
  addressNeighborhood: {
    type: String,
    required: true
  },
  addressNumber: {
    type: Number,
    required: true
  }, 
  addressZip: {
    type: Number,
    required: true
  },
  cityIdRef:
    {
      type:{
        type: mongoose.Schema.Type.ObjectId,
        ref:'City'
      }
    }
 }, {timestamps: true});
 const Address = mongoose.model('Address', AddressSchema);
 module.exports = { Address };