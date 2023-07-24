import react,{useState} from "react";
import Form from "./Form";
import Card from "./Card";



const WeatherPanel = () =>{
    let urlWeather ="http://api.weatherapi.com/v1/current.json?key=fad8177251824d2b9f2165217231407&aqi=no&lang=es";
    let cityurl = "&q=";

    let urlForecast = "http://api.weatherapi.com/v1/forecast.json?key=fad8177251824d2b9f2165217231407&days=5&aqi=no&alerts=no&lang=esp";


    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation= async(loc) =>{
        setLoading(true); 
        setLocation(loc);

        //weather

        urlWeather = urlWeather + cityurl + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();

        }).then((weatherData)=>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        })   
        //Forecast

        urlForecast = urlForecast + cityurl + loc;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();

        }).then((forecastData)=>{
            console.log(forecastData);
            setForecast(forecastData);
            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });  
    } 

    return(

        <>
            <Form
                newLocation = {getLocation}
            />

            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
        
            />
        </>
        

    );
}


export default WeatherPanel;