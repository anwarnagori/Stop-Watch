var min = 0;
var sec = 0;
var msec = 0;

var htmlmin = document.getElementById("min");
var htmlsec = document.getElementById("sec");
var htmlmsec = document.getElementById("msec");

var interval;

var disabledBtn = document.getElementById("start");

function start() {
    interval = setInterval(() => {
        msec++;
        htmlmsec.innerHTML = msec;

        if (msec >= 100) {
            sec++;
            htmlsec.innerHTML = sec;
            msec = 0;
        } else if (sec >= 60) {
            min++;
            htmlmin.innerHTML = min;
            sec = 0;
        }
        disabledBtn.disabled = true;
    }, 1);
}

function pause() {
    clearInterval(interval);
    disabledBtn.disabled = false;
}

function reset() {
    var min = 0;
    var sec = 0;
    var msec = 0;

    htmlmin.innerHTML = min;
    htmlsec.innerHTML = sec;
    htmlmsec.innerHTML = msec;
}
