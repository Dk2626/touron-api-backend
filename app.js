require("./models/City");
require("./models/Place");
require('./models/Country')
require('./models/TourIdea')
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require("mongoose");
const cityRoute = require("./routes/cityRoutes");
const PlaceRoute = require("./routes/placeRoute");
const CountryRoute = require('./routes/countryRoutes')
const TourIdeaRoute = require('./routes/tourIdeaRoute')
const app = express();


// for production only
const helmet = require('helmet')
const compression = require('compression')

app.use(helmet())
app.use(compression())

const corsObj={
  orgin:"http://localost:4200",
  optionSuccessStatus:200
}
//using the cors obj
app.use(cors(corsObj));

app.use(bodyParser.json());
app.use(cityRoute);
app.use(PlaceRoute);
app.use(CountryRoute)
app.use(TourIdeaRoute)
const mongodbUri =
  "mongodb+srv://vicky:aamecvicky123@cluster0-knxey.mongodb.net/city?retryWrites=true&w=majority";

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mngo", err);
});

app.get("/", (req, res) => {
  console.log("Hello world");
});

app.listen(3000);
