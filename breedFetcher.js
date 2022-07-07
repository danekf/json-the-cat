'use strict'
const request = require('request');

const fetchSite = (url) => {
  request(url, (error, response, body) => {
  if (error !== null){
    console.log('error:', error); // Print the error if one occurred
  };

  if('statusCode' !== 200){
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('Website not found, check API url settings.')
  }
  // console.log('body:', body); // Print the HTML for the page.

  const data = JSON.parse(body);
  //if nothing found
 try{
   console.log(data[0].description);
 } 
 catch {
  console.log("Cat breed not found, please check spelling and try agin.")
 }
});
};

let url = "https://api.thecatapi.com/v1/breeds/search?q="
let breed = process.argv.slice(2);
fetchSite(url+breed);