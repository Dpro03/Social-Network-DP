const express = require("express");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(require("./Routes"));

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Social-Network-DP",
  {
    // useFindOneAndDelete: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);

//Connect to the server
app.listen(PORT, () => console.log(`🌍 Connected to localhost:${PORT}`));
