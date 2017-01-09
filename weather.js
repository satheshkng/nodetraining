var weather = require('./weatherdemo.js');
var location = require('./locationinfo.js');
var argv = require('yargs')
	.option('location', {
		alias: 'l',
		demand: false,
		describe: 'Location to fetch weather for',
		type: 'string'
	})
	.help('help')
	.argv;

if( typeof argv.l === 'string' && argv.l.length > 0)
{
  console.log('Location was provided');
  weather(argv.l, function (currentWeather) {
    console.log(currentWeather); 
  });
}
else {
  location(function(location) {
    if(!location){
      console.log('Unable to guess location');
      return;
    }
    console.log('city ' + location.city);
    weather(location.city, function(currweather) {
      console.log(currweather);
    });
  });
}
