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
idealDays:{
    type:String,
    required:true
},
tourCost:{
    adult:Number,
    children:Number
},
ratings:{
    type:Number,
    require:true
},
reviews:{
    type:Number,
    require:true
},
inclusion:{
    type:String,
    required:true
},
itineary:{
    type:String,
    required:true
},
pickUpPoint:{
    type:String,
    required:true
},
journeyType:{
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