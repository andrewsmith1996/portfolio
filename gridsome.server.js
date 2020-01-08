// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`



module.exports = function (api) {
  api.loadSource(async actions => {
    const axios = require("axios");
    const moment = require("moment");
    const collection = actions.addCollection('BlogPosts')
    try {
      let response = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/117679029/posts/');
      response.data.posts.forEach(post => {
        collection.addNode({
          title: post.title,
          url: post.URL,
          intro: post.excerpt,
          postDate: moment(post.date).format('MMMM Do YYYY, h:mma')
        });
      });
    } catch (e) {
      console.log(e);
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  
}
