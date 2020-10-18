

function getWeather() {
    var zipCode = document.getElementById("code").value;

    fetch('http://api.openweathermap.org/data/2.5/weather?zip='+ zipCode +',us&units=imperial&APPID=b0dc294f090d0c0ad4022478e9acbcdc')
        .then((response) => response.json())
        .then(json => processWeather(json))
        .catch(notifyOfError);

}

function processWeather(json) {
    console.log(json);
    var old = document.getElementById("weatherInfo").value;
    var newHTML  = json.name + ": " +  json.main.temp;
    console.log(newHTML);
    document.getElementById("weatherInfo").value = newHTML + "\n" +  old;

}


function notifyOfError(err) {
    var errMsg = "<p>" + err.msg + "</p>";
    document.getElementById("weatherInfo").value = errMsg;


}

function clear() {
    console.log("stawrt");
    document.getElementById("weatherInfo").value = "";
}

document.getElementById("clearBtn").addEventListener("click", clear, false);












