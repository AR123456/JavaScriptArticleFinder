// scrape script

var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function() {
  return axios.get("http://www.echojs.com/").then(function(res) {
    var $ = cheerio.load(res.data);
    var articles = [];
    $("article h2").each(function(i, element) {
      var head = $(this)
        .children("a")
        .text()
        .trim();
      var url = $(this)
        .children("a")
        .attr("href");

      if (head && url) {
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        var dataToAdd = {
          headline: headNeat,
          //   summary: sumNeat,
          url: url
        };

        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

module.exports = scrape;
