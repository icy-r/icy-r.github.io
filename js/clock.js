//html id is "clock"  and the clock should be in the format of 00:00:00 AM/PM and the clock should be updated every second
//use the setInterval function to update the clock every second
//use the Date() function to get the current time
//use the getHours() function to get the current hour
//use the getMinutes() function to get the current minute
//use the getSeconds() function to get the current second

function clock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = "AM";
    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        ampm = "PM";
    }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10)? "0" + minutes : minutes;
    seconds = (seconds < 10)? "0" + seconds : seconds;
    var time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    setTimeout(clock, 1000);
};
window.onload = function() {
    clock();
};