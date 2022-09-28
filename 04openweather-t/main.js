let temp = document.querySelector('#temp');
let min = document.querySelector('#min');
let max = document.querySelector('#max');
let wind = document.querySelector('#wind');
let weather = document.querySelector('#weather');
let icon = document.querySelector("#icon");
let icon_url = 
    "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/";
let openweatherfind_url =
    "https://api.openweathermap.org/data/2.5/find?q=Seoul&units=metric&appid=059bf41b106c4a01cbec58f0775d4185";

let openweather_url =
    "https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=059bf41b106c4a01cbec58f0775d4185";

var ajaxrequest = new XMLHttpRequest();

function getWeatherfind() {
    ajaxrequest.open('GET', openweather_url)
    ajaxrequest.send();
    ajaxrequest.onreadystatechange  = function(){
        if(ajaxrequest.readyState == 4 ){
           response = JSON.parse(ajaxrequest.responseText);
           console.log(response);
           let wdata = response.list[0];
           temp.innerText = wdata.main.temp;
           min.innerText = wdata.main.temp_min;
           max.innerText = wdata.main.temp_max;
           wind.innerText = wdata.main.speed;
           weather.innerText = wdata.weather[0].main + "," + wdata.weather[0].description
           debugger;
        
    };
}
}
function getWeather() {
    ajaxrequest.open('GET', openweather_url)
    ajaxrequest.send();
    ajaxrequest.onreadystatechange  = function(){
        if(ajaxrequest.readyState == 4 ){
           response = JSON.parse(ajaxrequest.responseText);
           console.log(response);
           let wdata = response.weather[0];
           temp.innerText = response.main.temp;
           min.innerText = response.main.temp_min;
           max.innerText = response.main.temp_max;
           wind.innerText = response.main.speed;
           weather.innerText = exdata.weather[0].main + "," + exdata.weather[0].description
           debugger;
        
    };
}
}


getWeather();

