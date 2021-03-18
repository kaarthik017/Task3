
var request = new XMLHttpRequest()
var url_string = 'https://api.openweathermap.org/data/2.5/weather?lat=40&lon=74&appid=fbecdd811f6b99cdff0ecf1344f70eeb';

request.open('GET',url_string , true) 
request.send();

request.onload = function() {

var data = JSON.parse(this.response)
console.log(data);
}
