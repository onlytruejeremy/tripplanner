const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/index");
const dbConnect = require("./db/dbconfig");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

require("dotenv").config({ path: require("find-config")(".env") });
dbConnect();
app.get("/", (req, res) => {
  res.send("Running App");
});

app.use("/user", routes.user);

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("Running");
});
