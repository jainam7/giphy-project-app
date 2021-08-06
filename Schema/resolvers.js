const { axios } = require("axios");

const resolvers = {
  Query: {
    getAllUsers() {
      return axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe",
        },
      });
    },
  },
};

module.exports = { resolvers };
