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
const jobSchema = new Schema({
    jobExperience:[
        {
            company:{
                type:String,
                required: true 
            },
            startDate:{
                type:Date,
                required: true 
            },
            endDate:{
                type:Date
            },
            position:{
                type:String,
                required: true 
            },
            description:{
                type:String,
                required: true 
            }
        }
    ],
​
​
​
},{timestamps: true});
const job = mongoose.model('job', jobSchema);
module.exports = { job };