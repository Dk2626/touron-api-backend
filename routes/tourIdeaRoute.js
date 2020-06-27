const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const TourIdea = mongoose.model("TourIdea");



// get City
router.get("/tour", async (req, res) => {
  const tour = await TourIdea.find();
  console.log("City route called");
  res.send(tour);
});

router.get("/tour/:id", async (req, res) => {
  console.log(req.params, "id vanthuruchu");
  const tour = await TourIdea.findById({ _id: req.params.id });
  res.send(tour);
});


//Get City by Name

// router.get('/tour/countryname/:name',async (req,res)=>{
//   console.log(req.params)
//   const tour = await TourIdea.find({countryName:req.params.name})
//   res.send(tour)
// })

router.get('/tour/cityname/:name',async (req,res)=>{
  console.log(req.params)
  const tour = await TourIdea.find({cityName:req.params.name})
  res.send(tour)
})
router.get('/tour/tourname/:name',async (req,res)=>{
  console.log(req.params)
  const tour = await TourIdea.find({tourName:req.params.name})
  res.send(tour)
})

//Post city
router.post("/tour", async (req, res) => {
  try {
    // const { name, coordinates, description, journeyType ,imageUrl} = req.body;
    // console.log(name, coordinates, description, journeyType);
    console.log(req.body)
    const tour = new TourIdea(req.body);

    await tour.save();
    res.json({tour:tour}).status(200);
  } catch (err) {
    res.send(err);
  }
});

//single city to edit
router.get('/tour/edit/:id',async (req,res)=>{
  const tour = await TourIdea.findById({_id:req.params.id})
  res.send(tour)
})


// Update City

router.post('/tour/edit/:id',async (req,res)=>{
  
  let tour = await TourIdea.findById({_id:req.params.id})
console.log(req.body)
  tour.cityName = req.body.cityName
  tour.tourName = req.body.tourName
  tour.aboutTour = req.body.aboutTour
  tour.imageUrl = req.body.imageUrl
  tour.tourCost={
      adult:req.body.adult,
      children:req.body.children
  },
  tour.ratings = req.body.ratings
  tour.reviews = req.body.reviews
  tour.inclusion = req.body.inclusion
  tour.itinerary = req.body.itinerary
  tour.pickUpPoint = req.body.pickUpPoint
  tour.tourDuration = req.body.tourDuration
  tour.tourCategory  =req.body.tourCategory
  tour.tourType = req.body.tourType
  tour.idealType = req.body.idealType
  tour.additionalInformation = req.body.additionalInformation
  tour.tourPreferance = req.body.tourPreferance
  

  console.log(tour)
   tour.save()
   res.json({tour:tour}).status(200);
})

//Delete by id 

router.post('/tour/delete/:id',async (req,res)=>{
  const tour = await TourIdea.findByIdAndDelete({_id:req.params.id})
  res.send(tour)
})


module.exports = router;
