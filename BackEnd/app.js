const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
// app.use(cors({ origin: "http://localhost:3000" }));
const userRouter = require("./Routes/userRouter");

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // For legacy browser support ,
  methods: "GET, PUT,POST",
};
// app.use(express.json()); // to pass the body in the request

app.use(cors(corsOptions));
//Middlewares
app.use(express.static(`${__dirname}/public`)); //to serve static files
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use((req, res, next) => {
  console.log("hello from middleware");
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

app.use("/api/v1/users", userRouter);

module.exports = app;
