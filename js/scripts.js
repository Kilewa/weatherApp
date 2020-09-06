const api = {
    key: "0efccec1f8bb677360d694770d9149a1",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(e){
    if (e.keyCode == 13){
        getResults(searchbox.value)
    }
}
function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;


    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBulder(now)

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>&#176C</span>`

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
    let hiLow = document.querySelector('.hi-low');
    hiLow.innerText = `${weather.main.temp_min}  °C / ${weather.main.temp_max}  °C`
}

function dateBulder (d) {
    let months =  ["January", "February", "March", "April", "May", "June", "July", 
                    "August", "September", "October", "November", "December"];
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

}



































// const btn = document.querySelector('.btn');
// const inputValue = document.querySelector('.formInput');
// const city = document.querySelector('.name');
// const description = document.querySelector('.desc');
// const temperature = document.querySelector('.temp');


// btn.addEventListener('click',function(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value+ '&appid=0efccec1f8bb677360d694770d9149a1')

//     .then(response => response.json())
//     .then(data => {
//         const cityValue = data['name'];
//         const temperatureValue = data['main']['temp'];
//         const descriptionValue = data['weather'][0]['description'];

//         city.innerHTML = cityValue;
//         temperature.innerHTML = temperatureValue;
//         description.innerHTML = descriptionValue;
//     })
// .catch( err => alert("Wrong city name!")) 

// })

