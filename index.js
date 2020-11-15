/* Cuenta atrás para página de "Próximamente" */

/*
window.onload = updateClock;

var totalTime = 10;

function updateClock() {
    document.getElementById('countdown').innerHTML = totalTime;
    if (totalTime == 0) {
        console.log('Final');
    } else {
        totalTime -= 1;
        setTimeout("updateClock()", 1000);
    }
}
*/

var end = new Date(Date.UTC(2020, 12, 31, 24, 0));

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = '¡ES LA HORA!';

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    if (days == 1) {
        document.getElementById('countdown').innerHTML = days + ' día ';
    } else {
        document.getElementById('countdown').innerHTML = days + ' días ';
    }
    if (hours == 1) {
        document.getElementById('countdown').innerHTML += hours + ' hora ';
    } else {
        document.getElementById('countdown').innerHTML += hours + ' horas ';
    }
    if (minutes == 1) {
        document.getElementById('countdown').innerHTML += minutes + ' minuto ';
    } else {
        document.getElementById('countdown').innerHTML += minutes + ' minutos ';
    }
    if (seconds == 1) {
        document.getElementById('countdown').innerHTML += seconds + ' segundo';
    } else {
        document.getElementById('countdown').innerHTML += seconds + ' segundos';
    }
}

timer = setInterval(showRemaining, 1000);