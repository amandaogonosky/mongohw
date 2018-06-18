const cheerio =require("cheerio");
const request = require("request");
const express = require('express');
const router = express.Router();
const db = require("");
const app = express();
// var MONGODB_URI = process.env.MONGODB_URI 


request("https://www.bostonglobe.com/", function(error, response, html){

const $ = cheerio.load(html);

const results = [];

$("h2.story-title").each(function(i, element) {

    const Headline = $(element).text();
    const Summary = $(element).children().find('p').text();
    // for child elements w/ attributes
    const URL = $(element).children().attr("href");
 
    results.push({
      title: Headline,
      summary: Summary, 
      link: URL
    });

  });
  console.log(results);
}
)
