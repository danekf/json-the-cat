'use strict'
const request = require('request');

const fetchSite = (url) => {
  request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the page.

  const data = JSON.parse(body);
  console.log(data);

});
}

let url = "https://api.thecatapi.com/v1/breeds/search?q="
let breed = process.argv.slice(2);
fetchSite(url+breed);