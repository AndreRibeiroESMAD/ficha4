if ("Service Worker" in navigator){
    navigator.serviceWorker.register("./sw.js").then(function(){
        console.log("service worker is registered")
    })
}

let Paused = false 
let timer = +prompt("indique o tempo que quer")
let reminder = prompt("para que é este relembrete?")
let H1 = document.getElementById("timer")

setInterval(function () {
    let minutes = parseInt(timer / 60, 10)
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    H1.textContent = `${minutes}:${seconds} - ${reminder}`;

    if (!Paused) {
        if (--timer < 0) {
            timer = 0;
        }
    }
}, 1000);

function pause(){
    if (!Paused){
        Paused = true
    }
}
function play(){
    if (Paused){
        Paused = false
    }
}
function stop(){
    timer = 0
    Paused = false
}
