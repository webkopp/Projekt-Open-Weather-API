import { variables, table } from "./variables.js";

// Weather Icon https://openweathermap.org/img/wn/{WeatherCode}@2x.png

// Arrow-Functions
const getInputData = () => {
    let input = variables.cityInput.value
    console.log(input);
    return input
}


// function
const getWeatherData = (event) => {
    event.preventDefault();
    const inputCity = getInputData()

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=42f5e29cd071d8da84a05324881242eb&units=metric`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const dataArr = Object.entries(data)
        console.log(dataArr);

        outputData(data);
    })
    .catch((error) => console.log("Zeit ist um", error))
}

const outputData = (data) => {

    // console.log(data.name);
    variables.cityOutput.textContent = data.name;
    variables.outputCountry.textContent = data.sys.country
    variables.figureWeatherIcon.innerHTML = getWeatherIcon(data.weather[0].icon)
    variables.outputTemp.textContent = data.main.temp.toString() + " °C";
    variables.weatherCondition.textContent = data.weather[0].description
}

const getWeatherIcon = (code) => {
    let imageCode = code
    console.log(imageCode);
    let output = `<img src="https://openweathermap.org/img/wn/${imageCode}@2x.png" alt=""></img>`
    console.log(output);
    return output
}





// addEventListener
variables.button.addEventListener("click", getWeatherData)
