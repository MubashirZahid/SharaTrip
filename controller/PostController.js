const { sendResponse } = require("../util/common");
const HTTP_STATUS = require("../constants/statusCodes");
const axios = require("axios");
const Post = require("../model/Post");
const requestIp = require("request-ip");
const SearchModel = require("../model/Search");

class PostController {
  async getPostByKeyword(req, res) {
    try {
      let { keyword } = req.query;
      let externalUrl = `https://jsonplaceholder.typicode.com/posts`;
      let posts;

      // Make the keyword lowercase
      keyword = keyword?.toLowerCase()?.trim();

      // Check if the keyword is empty
      if (keyword == "") {
        return sendResponse(
          res,
          HTTP_STATUS.UNPROCESSABLE_ENTITY,
          "The keyword can not be empty"
        );
      }

      try {

        // Get the external api
        const response = await axios.get(externalUrl);

        // Check the external api
        if (response.status !== 200) {
          return sendResponse(
            res,
            HTTP_STATUS.UNPROCESSABLE_ENTITY,
            "Failed to fetch the blog posts data"
          );
        }

        posts = response?.data;

      } catch (err) {
        console.error("Error:", err);
        return sendResponse(
          res,
          HTTP_STATUS.NOT_FOUND,
          "Failed to fetch the blog posts data"
        );
      }

      const bulkOperations  = [];

      let data = posts?.filter((post) => {
        if (
          post?.title?.toLowerCase()?.includes(keyword) ||
          post?.body?.toLowerCase()?.includes(keyword)
        ) {
          bulkOperations.push({
            updateOne: {
              filter: { id: post?.id },
              update: { $set: post },
              upsert: true,
            },
          });
          return post;
        }
      });

      const result = await Post.bulkWrite(bulkOperations);
      console.log("Result after search: ", result);


      const myData = await Post.find({
        $or: [
          { title: { $regex: keyword, $options: "i" } },
          { body: { $regex: keyword, $options: "i" } },
        ],
      });

      const idStrings = myData.map((post) => String(post?._id));

      // Create the search history 
      await SearchModel.create({
        ipAddress: requestIp.getClientIp(req),
        keyword,
        searchResult: idStrings,
      });

      let postResult = {
        posts: data,
        postCount: data.length,
      };
      return sendResponse(
        res,
        HTTP_STATUS.OK,
        "Successfully loaded the posts",
        postResult
      );
    } catch (error) {
      console.log(error);
      return sendResponse(
        res,
        HTTP_STATUS.INTERNAL_SERVER_ERROR,
        "Internal server error"
      );
    }
  }
}
module.exports = new PostController();
