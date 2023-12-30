const express = require("express");
const app = express();
var cors = require("cors");
const dotenv = require("dotenv");
const databaseConnection = require("./db/config");
const HTTP_STATUS = require("./constants/statusCodes");
const { sendResponse } = require("./util/common");
const postRouter = require("./routes/Posts");

dotenv.config("dotenv");

app.use(cors({ origin: "*" }));
app.use(express.json()); 
app.use(express.text()); 
app.use(express.urlencoded({ extended: true })); 

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {

    return sendResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      "Invalid JSON provided"
    );
  }
  next();
});

app.use("/", postRouter);

app.get("/", async (req, res) => {
  return sendResponse(res, HTTP_STATUS.OK, "Route is working");
});

app.use("*", (req, res) => {
  return sendResponse(res, HTTP_STATUS.BAD_REQUEST, "There is no route like this");
});

databaseConnection(() => {
  app.listen(3000, () => {
    let date = new Date();
    console.log(
      `App is running on port 3000 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `
    );
  });
});
