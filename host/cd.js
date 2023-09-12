const countDown = () => {

const countDate = new Date('November 24, 2023 00:00:00').getTime();
const now = new Date().getTime();
const gap = countDate - now;

const seconds = 1000;
const minutes = seconds * 60;
const hour = minutes * 60;
const day = hour * 24;

const textDay = Math.floor(gap / day);
const textHour = Math.floor(gap % day / hour);
const textMinute = Math.floor(gap % hour / minutes);
const textSecond = Math.floor(gap % minutes / seconds);


document.querySelector(".day").innerText = textDay;
document.querySelector(".hour").innerText = textHour;
document.querySelector(".minutes").innerText = textMinute;
document.querySelector(".seconds").innerText = textSecond;
}
setInterval(countDown, 1000);

function openBtn() {
    document.getElementById("navbar").style.width = "210px";
    document.getElementById("navbar").style.padding = "20px";
}
function closeBtn() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("navbar").style.padding = "0";
}

function myFunction() {
    document.getElementById("dropdown-contents").classList.toggle("show");
}