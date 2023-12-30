const express = require("express");
const PostController = require("../controller/PostController");

const routes = express();

// Get All Blogs By Search
routes.get("/search", PostController.getPostByKeyword);

module.exports = routes;
