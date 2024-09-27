let min = 0;
let sec = 0;
let msec = 0;

let htmlmin = document.getElementById("min");
let htmlsec = document.getElementById("sec");
let htmlmsec = document.getElementById("msec");

let interval;

let disabledBtn = document.getElementById("start");

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
    }, 0);
}

function pause() {
    clearInterval(interval);
    disabledBtn.disabled = false;
}

function reset() {
    let min = 0;
    let sec = 0;
    let msec = 0;

    htmlmin.innerHTML = min;
    htmlsec.innerHTML = sec;
    htmlmsec.innerHTML = msec;
}
