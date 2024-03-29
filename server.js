const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

routes(app);

app.use(express.static(path.join(__dirname, "/client/build")));
app.use(express.static(path.join(__dirname, "/client/public")));
/*React root*/
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/safeDB");

app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
