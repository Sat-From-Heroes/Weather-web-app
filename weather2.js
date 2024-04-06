 let apikey = "e1a5d75057834b29d82ad4822b5c3816";
 let url = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
 let searchbox = document.querySelector(".upper input");
 let searchbtn= document.querySelector(".upper button");
 
async function getValue(city){
    let response = await fetch(url +`&q=${city}`+  `&appid=${apikey}`);
    let data =await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML= data.main.temp + " <sup>o</sup>C";
    document.querySelector(".temp").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity +"% <br>Humidity";
    document.querySelector(".wind-speed").innerHTML=data.wind.speed + " KMPH <br>Wind-Speed";
    if(data.weather[0].main == "Clouds"){
        document.querySelector(".image").innerHTML="<img src='/weather app/images/clouds.png'>"
    }
    else if(data.weather[0].main == "Clear"){
        document.querySelector(".image").innerHTML="<img src='/weather app/images/clear.png'>"
    }
    else if(data.weather[0].main == "drizzle"){
        document.querySelector(".image").innerHTML="<img src='/weather app/images/drizzle.png'>"
    }
    else if(data.weather[0].main == "mist"){
        document.querySelector(".image").innerHTML="<img src='/weather app/images/mist.png'>"
    }
    else if(data.weather[0].main == "rain"){
        document.querySelector(".image").innerHTML="<img src='/weather app/images/rain.png'>"
    }
    else if(data.weather[0].main == "snow"){
        document.querySelector(".image").innerHTML="<img src='/weather app/images/snow.png'>"
    }
}   
searchbtn.addEventListener('click', ()=>{
    console.log(searchbox.value)
    getValue(searchbox.value)
})
/* getValue() */