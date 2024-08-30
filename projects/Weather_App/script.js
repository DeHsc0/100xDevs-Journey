'use strict';

const fetchData = async () => {
    let cityName = document.getElementById('cityNameInp').value;
    const apiKey = "8fae3a9c0ec704c04cd4444ad859ed03";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        let container = document.getElementById("container");

        container.innerHTML = ` <div id ="city_icon">
                <div id = "cityBox">
                    <h1 id = 'city'>${data.name}</h1>
                    <p>${data.weather[0].main}</p>                     
                </div>
                <div id = "iconBox">
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="error" id = "weatherIcon">
                </div>
            </div>
            <div class = "gridContents">
                <div class = "box">
                    <img src="/gifs/humidity.gif" alt="" class = "icons">
                    <h3>Humidity</h3>
                    <p>${data.main.humidity}%</p>
                </div>
                <div class = "box">
                    <img src="/gifs/temp.gif" class = "icons" alt="">
                    <h3>Temperature</h3>
                    <p>${data.main.temp}C</p>
                </div>
                <div class = "box">
                    <img src="/gifs/vision.gif" class = "icons" alt="">
                    <h3>Visibility</h3>
                    <p>${data.visibility}m</p>
                </div>
                <div class = "box">
                    <img src="/gifs/pressure.gif" class = "icons" alt="">
                    <h3>Pressure</h3>
                    <p>${data.main.pressure}hPa</p>
                </div>
                <div class = "box">
                    <img src="/gifs/wind.gif" class = "icons" alt="">
                    <h3>Wind</h3>
                    <p>${data.wind.speed}m/s</p>
                </div>
                <div class = "box">
                    <img src="/gifs/clouds.gif" class = "icons" alt="">
                    <h3>Clouds</h3>
                    <p>${data.clouds.all}%</p>
                </div>
            </div>`
    } catch (error) {
        console.error('Error:', error);
    }
};

