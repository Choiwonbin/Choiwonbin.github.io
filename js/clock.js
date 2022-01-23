const today = document.querySelector(".menubar__clock span:first-child")
const clock = document.querySelector(".menubar__clock span:last-child");

function getClock() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate());
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    today.innerText = `${year}.${month}.${day}`;
    clock.innerText = `${hours}:${minutes}`;
    console.log(month, day);
}

getClock();
setInterval(getClock, 1000);