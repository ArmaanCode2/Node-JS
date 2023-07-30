//elements
const p = document.querySelectorAll('p');

//getting parameters
const city = window.location.search === '' ? "paris" : window.location.search.split("?")[1].split("=")[1];

//function for updating
const updateHTML = (key, value) => {
    for (let i = 0; i < key.length; i++) {
        p[i].innerHTML = key[i] + value[i];        
    };
};

//base query
let query = `http://api.weatherapi.com/v1/current.json?key=a8264f2336c946bc861104312230606&q=${city}`;
fetch(query).then(resp => resp.json()).then(res =>{
    if(res.error){
        document.querySelector("body").append("Wrong City Name");
        return;
    }else{
        const baseNames = ["City: ", "Temperature: ", "Wind Speed: ", "Weather: "]
        const base = res.current;
        let arr = [res.location.name,base.temp_c,base.wind_kph,base.condition.text];
        updateHTML(baseNames,arr)
    }
});