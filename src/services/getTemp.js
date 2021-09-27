import axios from 'axios';

function getWeather(city)
{
    console.log(city);
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8708ea16a91c0069f011d80a051d7f33`)
    .then(response=>{
        console.log("axios data 1",response.data)
        return response.data})
        .catch(error=>error);
}

export{
    getWeather
};