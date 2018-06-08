const cheerio =require("cheerio");
const request = require("request");

console.log("\n***********\n" +
"Grabbng wahtever hw says \n" +
);

request("http://www.tmz.com/", function(error, response, html){

const $ = cheerio.load(html);

const results = [];

}
// Headline - the title of the article

// * Summary - a short summary of the article

// * URL - the url to the original article

// * Feel free to add more content to your database (photos, bylines, and so on).
