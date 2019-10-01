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
const studySchema = new Schema({
​
    school:{
        type:String,
        required: true 
      },
      schoolCareer:{
        type:String,
        required: true 
      },
      schoolLevel:{
        type:String,
        enum:['High School','Bachelor degree']
      },
      course:[
          {
              courseName:{
                  type:String
              },
              courseDate:{
                  type:Date
              }
          }
      ],
      
},{timestamps: true});
    const study = mongoose.model('study', studySchema);
    module.exports = { study };