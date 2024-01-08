import { variables, table } from "./variables.js";

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
    })
    .catch((error) => console.log("Zeit ist um", error))
}





// addEventListener
variables.button.addEventListener("click", getWeatherData)
