async function resolveWeatherInfo() {

    let cite = document.getElementById("cite").value;

    let citeInfo = await fetch(`https://geocode.maps.co/search?q=${cite}`)//, {
    citeInfo = await citeInfo.json();
    // }).then(response => response.json()).then(citeInfo => {

    let result = document.getElementById("result");

    let weatherInfo = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${citeInfo[0].lat}&longitude=${citeInfo[0].lon}&current_weather=true`)//, {
    weatherInfo = await weatherInfo.json();
        // method: "GET"
    // }).then(response => response.json()).then(weatherInfo => {
        result.innerHTML = `
        <h1>${weatherInfo.current_weather.time}</h1>
        <h1>IN ${citeInfo[0].display_name}:</h1>
        <div class="weather_div">
            <h2><i class="fa-solid fa-temperature-low"></i> ${weatherInfo.current_weather.temperature} ${weatherInfo.current_weather_units.temperature}</h2>
        
            <h2><i class="fa-solid fa-wind"></i> ${weatherInfo.current_weather.windspeed} ${weatherInfo.current_weather_units.windspeed}</h2>
        
            <h2><i class="fa-regular fa-compass"></i> ${weatherInfo.current_weather.winddirection} ${weatherInfo.current_weather_units.winddirection}</h2>
        </div>
        <p>coordinates:</p>
        <h5> longitute ${citeInfo[0].lon} and latitute of ${citeInfo[0].lat}</h5>
        `
    // })
    // })
}


