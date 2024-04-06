






/* let promise = fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={e1a5d75057834b29d82ad4822b5c3816}");
promise.then(response => {
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then(value=>{
    console.log(value)
})  */

async function getData(city) {

 let x = await fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=delhi'+ '&appid=e1a5d75057834b29d82ad4822b5c3816')
 let data = await x.json();
 console.log(data);
 document.querySelector(".temp").innerHTML= data.main.temp + " <sup>o</sup>C";
 document.querySelector(".city").innerHTML= data.name;
 document.querySelector(".humidity").innerHTML= data.main.humidity +"% <br>Humidity";
 document.querySelector(".windspeed").innerHTML= data.wind.speed + " KM/Hr <br>Wind-Speed";
}  

let box =document.querySelector(".search-box input"); 
let btn = document.querySelector(".icon button")

btn.addEventListener("click",()=>{
    getData(box.value);
})

/* async function main(){
    
let data =await getData()
console.log(data)

}
main() */