const mongoose = require("mongoose");

// Defining the Search schema
const searchSchema = new mongoose.Schema(
  {
    keyword: {
      type: String,
    },
    ipAddress: {
      type: String,
    },
    searchResult: {
      type: [mongoose.Types.ObjectId],
      ref: "Post",
    },
  },
  { timestamps: true }
);

const SearchModel = mongoose.model("search-history", searchSchema);
module.exports = SearchModel;
