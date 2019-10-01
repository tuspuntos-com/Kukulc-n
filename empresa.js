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
const CompanySchema = new Schema({
   companyname: {
     type: String,
     required: true
   },
   companyLogo:{
    type:String,
    default:'https://cdn2.iconfinder.com/data/icons/blue-round-amazing-icons-2/512/checkbox-empty-512.png'
   },
   businessRoll: {
       type: String,
       required: true,
       enum:['Technology','Health']
   },
   companyInfo: {
    type: String,
    required:true
  },
  companyPhone:{
    type: Number,
    default: 0000,
  }, 
  companyAddress:
    {
      type:[{
        type: mongoose.Schema.Type.ObjectId,
        ref:'Address'
      }]
    },
  companySite: {
    type: String,
    default: 'NA'
  },
  companyEmail:{
    type: String,
    default: 'NA',
  },
  companyPresentation: {
    type: String,
    required:true
  },
  companySize: {
    type: Number,
    required:true
  },
  registerDate: {
    type: Date,
    default: date.now()
  },
  companyPositions:
    {
      type:[{
        type: mongoose.Schema.Type.ObjectId,
        ref:'Position'
      }]
    }
  
 }, {timestamps: true});
 const Company = mongoose.model('Company', CompanySchema);
 module.exports = { Company };