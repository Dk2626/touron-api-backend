const  mongoose = require('mongoose')

const Schema = mongoose.Schema

const TourIdea = new Schema({

cityName:{
    type:String,
    required:true
},

tourName:{
    type:String,
    required:true
},
aboutTour:{
    type:String,
    required:true
},
imageUrl:{
    type:String,
    required:true
},
tourCost:{
    adult:Number,
    children:Number
},
ratings:{
    type:String,
    require:true
},
reviews:{
    type:String,
    require:true
},
inclusion:{
    type:String,
    required:true,
    maxlength:10000
},
itinerary:{
    type:String,
    required:true,
    maxlength:10000
},
pickUpPoint:{
    type:Array,
    required:true
},
tourDuration:{
    type:String,
    required:true
},
tourCategory:{
   type:Array,
   required:true
},
tourType:{
    type:String,
    require:true
},
idealType:{
   type:Array,
   required:true
},
tourPreferance:{
   type:String,
   required:true
},
additionalInformation:{
   type:String,
   required:true
},


})


module.exports = mongoose.model('TourIdea',TourIdea)



// {
//     "cityName":"Paris",
//     "tourName":"Eifle tower tour",
//     "description":"A fantastic place",
//     "imageUrl":"https://www.google.com",
//     "idealDays":"4-5 days",
//     "tourCost":{
//         "adult":3000,
//         "children":1000
//     },
//     "rating":4.5,
//     "reviews":232,
//     "inclusion":".........",
//     "itineary":"..........",
//     "pickUpPoint":"Hotel/Common"
// }