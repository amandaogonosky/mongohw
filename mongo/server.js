const cheerio =require("cheerio");
const request = require("request");

// var MONGODB_URI = process.env.MONGODB_URI 
// console.log("\n***********\n" +
// "Grabbng wahtever hw says \n" +
// );

request("https://www.bostonglobe.com/", function(error, response, html){

const $ = cheerio.load(html);

const results = [];

$("h2.story-title").each(function(i, element) {

    let Headline = $(element).text();
    // let Summary = $(element).text();

    // for child elements w/ attributes
    let URL = $(element).children().attr("href");
 
    results.push({
      title: Headline, 
      link: URL,
    });

  });
  console.log(results);
}
)
