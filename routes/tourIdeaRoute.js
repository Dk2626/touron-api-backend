const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const TourIdea = mongoose.model("TourIdea");

// get City
router.get("/tour", async (req, res) => {
  console.log(req.query, "query");

  if (req.query.page && req.query.pageSize) {
    const pageSize = parseInt(req.query.pageSize);
    const page = parseInt(req.query.page);

    console.log(pageSize, page, "size");
    // console.log(query, "query");
    const tour = await TourIdea.find()
      .skip((page - 1) * 10)
      .limit(pageSize);
    // console.log("City route called");
    res.send(tour);
  } else if (
    req.query.tourCategory &&
    req.query.idealType &&
    req.query.tourType
  ) {
    console.log(req.query, "id vanthuruchu");
    const tourType = req.query.tourType.toString();
    const tour = await TourIdea.find({
      tourCategory: { $in: [req.query.tourCategory] },
      idealType: { $in: [req.query.idealType] },
      tourType: req.query.tourType,
    });
    console.log(tour.length, "l");
    res.send(tour);
  } else {
    const tour = await TourIdea.find();
    // console.log("City route called");
    res.send(tour);
  }
});

router.get("/tour/:id", async (req, res) => {
  console.log(req.params, "id vanthuruchu");
  const tour = await TourIdea.findById({ _id: req.params.id });

  res.send(tour);
});
router.get(
  "/tour/filter/:tourCategory/:idealype/:tourType",
  async (req, res) => {
    console.log(req.params, "id vanthuruchu");
    const tour = await TourIdea.find({
      tourCategory: { $in: [req.params.tourCategory] },
      idealType: { $in: [req.params.idealType] },
      tourType: req.params.tourType,
    });
    res.send(tour);
  }
);

//Get City by Name

// router.get('/tour/countryname/:name',async (req,res)=>{
//   console.log(req.params)
//   const tour = await TourIdea.find({countryName:req.params.name})
//   res.send(tour)
// })

router.get("/tour/cityname/:name", async (req, res) => {
  console.log(req.params);
  const tour = await TourIdea.find({ cityName: req.params.name });
  res.send(tour);
});

router.get("/tour/countryname/:name", async (req, res) => {
  console.log(req.params);
  const tour = await TourIdea.find({ countryName: req.params.name });
  res.send(tour);
});

router.get("/tour/tourname/:name", async (req, res) => {
  console.log(req.params);
  console.log(req.params);

  const tour = await TourIdea.find({ tourName: req.params.name });
  res.send(tour);
});

router.get("/tour/tourtype/:tourtype", async (req, res) => {
  console.log(req.params.tourtype, "ko");
  const tour = await TourIdea.find({ tourType: req.params.tourtype });
  res.send(tour);
});
router.get("/tour/tourcategory/:tourcategory", async (req, res) => {
  console.log(req.params.tourcategory, "ko");
  const tour = await TourIdea.find({
    tourCategory: { $in: [req.params.tourcategory] },
  });
  res.send(tour);
});
router.get("/tour/idealtype/:idealtype", async (req, res) => {
  const tour = await TourIdea.find({
    idealType: { $in: [req.params.idealtype] },
  });
  res.send(tour);
});

//Post city
router.post("/tour", async (req, res) => {
  try {
    console.log(req.body);
    const tour = new TourIdea(req.body);

    await tour.save();
    res.json({ tour: tour }).status(200);
  } catch (err) {
    res.send(err);
  }
});

//single city to edit
router.get("/tour/edit/:id", async (req, res) => {
  const tour = await TourIdea.findById({ _id: req.params.id });
  res.send(tour);
});
router.get("/tour/:id", async (req, res) => {
  const tour = await TourIdea.findById({ _id: req.params.id });
  res.send(tour);
});

// Update City

router.post("/tour/edit/:id", async (req, res) => {
  let tour = await TourIdea.findById({ _id: req.params.id });
  console.log(req.body);
  tour.cityName = req.body.cityName;
  tour.countryName = req.body.countryName;
  tour.tourName = req.body.tourName;
  tour.aboutTour = req.body.aboutTour;
  tour.imageUrl = req.body.imageUrl;
  (tour.tourCost = {
    adult: req.body.adult,
    children: req.body.children,
  }),
    (tour.ratings = req.body.ratings);
  tour.reviews = req.body.reviews;
  tour.inclusion = req.body.inclusion;
  tour.itinerary = req.body.itinerary;
  tour.pickUpPoint = req.body.pickUpPoint;
  tour.pickUpAvailableOn = req.body.pickUpAvailableOn;
  tour.pickUpTime = req.body.pickUpTime;
  tour.dropTime = req.body.dropTime;
  tour.tourDuration = req.body.tourDuration;
  tour.tourCategory = req.body.tourCategory;
  tour.tourType = req.body.tourType;

  tour.trending = req.body.trending;
  tour.referanceLink = req.body.referanceLink;
  tour.idealType = req.body.idealType;
  tour.additionalInformation = req.body.additionalInformation;
  tour.tourPreferance = req.body.tourPreferance;

  console.log(tour);
  tour.save();
  res.json({ tour: tour }).status(200);
});

//Delete by id

router.post("/tour/delete/:id", async (req, res) => {
  const tour = await TourIdea.findByIdAndDelete({ _id: req.params.id });
  res.send(tour);
});

module.exports = router;

// else if (req.query.tourCategory && req.query.idealType) {
//   console.log(req.query, "id vanthuruchu");
//   const tour = await TourIdea.find({
//     tourCategory: { $in: [req.query.tourCategory] },
//     idealType: { $in: [req.query.idealType] },
//   });
//   console.log(tour.length, "l");
//   res.send(tour);
//   // tourType: req.query.tourType,
// } else if (req.query.tourCategory && req.query.tourType) {
//   console.log(req.query, "id vanthuruchu");
//   const tourType = req.query.tourType.toString();
//   const tour = await TourIdea.find({
//     tourCategory: { $in: [req.query.tourCategory] },
//     tourType: req.query.tourType,
//   });
//   console.log(tour.length, "l");
//   res.send(tour);
// } else if (req.query.idealType && req.query.tourType) {
//   console.log(req.query, "id vanthuruchu");
//   const tour = await TourIdea.find({
//     idealType: { $in: [req.query.idealType] },
//     tourType: req.query.tourType,
//   });
//   console.log(tour.length, "l");
//   res.send(tour);
// }
