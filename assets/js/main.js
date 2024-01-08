import { variables, table } from "./variables.js";

// Arrow-Functions
const getInputData = () => {
    let input = variables.cityInput.value
    return input
}


// function
function getWeatherData() {
    const input = getInputData()
}





// addEventListener
variables.button.addEventListener("click", getWeatherData)
