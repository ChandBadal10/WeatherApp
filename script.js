const apiKey = `97c5ed2cb5e904d9a7ba19e6222446fb`;
const dcity ="Rochdale";
async function fetchWeatherData(city) {
    try {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    if (!response.ok){
        throw new Error ("Unable to fetch weather data");
    }
const data = await response.json();
console.log(data);
// console.log(data.main.temp);
// console.log(data.name);
// console.log(data.wind.speed);
// console.log(data.main.humidity);
// console.log(data.main.pressure);

updateWeatherUI(data);
}
catch(error){
    console.error(error);
    document.querySelector(".city").innerHTML = "City Not Found";
    document.querySelector(".temp").innerHTML = "";
    document.querySelector(".humidity").innerHTML = "";
    document.querySelector(".wind-speed").innerHTML = "";
    document.querySelector(".date").innerHTML = "";
    document.querySelector(".Wind-speed").innerHTML = "";
    document.querySelector(".description i").innerHTML="";
    document.querySelector("description-text").innerHTML="";
  }
}
const cityElement = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const windspeed   = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity")
const pressure = document.querySelector(".Wind-speed")

const descriptionText = document.querySelector('.description-text')
const date = document.querySelector(".date");
const descriptionIcon = document.querySelector('.description i')

// fetchWeatherData();

function updateWeatherUI(data){
    cityElement.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    windspeed.textContent   = `${data.wind.speed} m/s`;
    humidity.textContent = `${data.main.humidity} %`;
    pressure.textContent = `${data.main.pressure} hpa`;
    descriptionText.textContent = `${data.weather[0].description}`;

    const currentDate = new Date();
    date.textContent = currentDate.toDateString();
    const weatherIconName = getWeatherIconName(data.weather[0].main)
    descriptionIcon.innerHTML = `<i class="material-icons">${weatherIconName}</i>`
}

const formElement = document.querySelector(".search-form");
const inputElement = document.querySelector(".city-name");
  
formElement.addEventListener('submit', function(e){
    e.preventDefault();

    const city = inputElement.value;
    if (city !==""){
        fetchWeatherData(city);
        inputElement.value = "";
    }
});
function getWeatherIconName(weatherCondition){
    const iconMap = {
        clear: "wb_sunny",
        clouds:"wb_cloudy",
        Rain: "umberella",
        Thunderstorm: "flash_on",
        Drizzle: "grain",
        Snow: "ac_unit",
        Mist: "cloud",
        Smoke: "cloud",
        Haze: "cloud",
        Fog: "cloud"
    };

    return iconMap[weatherCondition]  || "help"
}
    fetchWeatherData(dcity)






































