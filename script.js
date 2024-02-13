const apiKey = "f040ca70e77f2045572df8b5e1c16fd2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  const searchBox = document.querySelector(".input");
  const searchBtn = document.querySelector(".btn");
  const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = (city) => {
    const Url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
  fetch(Url)
    .then((response) => response.json())
    .then((data) => {

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
      } 
      else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
      }
      else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
      }
      else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
      }
    });
  
};


searchBtn.addEventListener("click", ()=>{
    const city = searchBox.value.trim();
    
    if(city) {
        checkWeather(city);
    } else {
        alert("please enter the city")
    }
})