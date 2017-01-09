var request = require('request');



module.exports = function (location, callback) {
   var encodedLocation = encodeURIComponent(location);
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location +'&appid=5c83838b47db985c668f5ab81fa9e863';
  request({
  url: url,
  json: true
}, function (error, response, body) {
  if(error){
    callback("Something went wrong....")
  } else {
    callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
  }
});
};
