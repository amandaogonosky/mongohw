const cheerio =require("cheerio");
const request = require("request");

console.log("\n***********\n" +
"Grabbng wahtever hw says \n" +
);

request("https://old.reddit.com/r/webev/", function(error, response, html){

const $ = cheerio.load(html);

const results = [];




}