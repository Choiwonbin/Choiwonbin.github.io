const API_KEY = '55d0d1ba1185b6f8820a324edb363ff6';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector(".menubar__weather span:first-child");
        const city = document.querySelector(".menubar__weather span:last-child");
        weather.innerText = `${data.weather[0].description} / ${data.main.temp}℃`;
        city.innerText = data.name;
    });
}

function onGeoError() {
    alert("날씨를 찾을 수 없습니다. '내 위치 확인 권한'을 허용해주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);