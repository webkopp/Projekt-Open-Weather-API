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

// let timeInterval
const outputData = (data) => {

    clearInterval(table.timeInterval)
    // console.log(data.name);
    variables.cityOutput.textContent = data.name;
    variables.outputCountry.textContent = data.sys.country
    variables.figureWeatherIcon.innerHTML = getWeatherIcon(data.weather[0].icon)
    variables.outputTemp.textContent = data.main.temp.toString() + " °C";
    variables.weatherCondition.textContent = data.weather[0].description
    
    // table
    const date = new Date().toUTCString()
    table.realTime = new Date(new Date(date).getTime() + data.timezone * 1000)// Ausgabe in Millisekunden
    console.log("London: ", date, "Berlin: ", table.realTime)

    const timeDiff = new Date().getMonth

    table.timeInterval = setInterval(() => {

        table.realTime = new Date (table.realTime + 1000).getTime()

        // console.log(table.realTime);
        // setTimeout(()=> {

        if (timeDiff >= 4 && timeDiff <= 11) {
        table.tdLocalTime.textContent = 
        new Date(table.realTime + data.timezone * 1000 + 3600*1000).toUTCString() // , 1000 })
        } else {
            table.tdLocalTime.textContent = 
        new Date(table.realTime + data.timezone * 1000 - 3600*1000).toUTCString()
        }
        
    }, 1000)

    table.tdWindSpeed.textContent = data.wind.speed
    table.tdCloudiness.textContent = data.clouds.all
    table.tdPressure.textContent = data.main.pressure
    table.tdHumidity.textContent = data.main.humidity

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


