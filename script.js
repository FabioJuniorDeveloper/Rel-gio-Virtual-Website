
setInterval(ShowClock, 1000)

let horas = document.querySelector('#horas');
let minutos = document.querySelector('#minutos');
let segundos = document.querySelector('#segundos');

function ShowClock () {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let ss = d.getSeconds();
    horas.innerHTML = `${h < 10 ? '0' + h: h}`;
    minutos.innerHTML = `${m < 10 ? '0' + m: m}`;
    segundos.innerHTML = `${ss < 10 ? '0' + ss: ss}`;
}