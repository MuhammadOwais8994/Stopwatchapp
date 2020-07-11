var min = 0;
var sec = 0;
var mili = 0;

var minDigit = document.getElementById('min');
var secDigit = document.getElementById('sec');
var miliDigit = document.getElementById('mili');
var interval;

function timer() {
    mili++
    miliDigit.innerHTML = mili;
    if (mili >= 100) {
        sec++
        secDigit.innerHTML = sec;
        mili = 0;
    } else if (sec >= 60) {
        min++
        minDigit.innerHTML = min;
        sec = 0;
    }
}
function start() {
    interval = setInterval(timer, 10);
    document.getElementById('start').disabled = true;
}

function pause() {
    clearInterval(interval)
}

function reset() {
    min = 0;
    sec = 0;
    mili = 0;
    minDigit.innerHTML = min;
    secDigit.innerHTML = sec;
    miliDigit.innerHTML = mili;
    pause()

}





