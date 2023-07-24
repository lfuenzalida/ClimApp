import React from "react";
import Spinner from "./Spinner"


const Card = ({showData, loadingData, weather, forecast}) =>{


    const getDayOfWeekName = (index) => {
        const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo" ];
        return daysOfWeek[index];
      };
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;




    if (loadingData){
        return <Spinner />
    }

    
    return(
        <div className="mt-5">
            

            {
                showData === true ? (

                    <div className="container">
                        <div className="card mb-3 mx-auto bg-primary text light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title text-light">{weather.location.name}</h3>
                                    <p className="card-date text-light">{date}</p>
                                    <h1 className="card-temp text-light">{weather.current.temp_c}°C</h1>
                                    <p className="card-desc text-light"><img src={weather.current.condition.icon} alt="icon"/>{weather.current.condition.text}</p>
                                </div>
                                <div className="col-md-8 text-primary">
                                    <div className="card-body text-started mt-2">
                                        <h5 className="card-text">Sensación termica: {weather.current.feelslike_c}°C</h5>
                                        <h5 className="card-text">Viento: {weather.current.wind_kph}kph</h5>
                                    </div>
                                    <hr/>
                                    <div className="card-container">
                                        {forecast.forecast.forecastday.map((dayForecast, index) => (
                                            <div key={index} className="card-day bg-primary text-light">
                                                <p>{getDayOfWeekName(new Date(dayForecast.date).getDay())}</p>
                                                <img className="card-icon" src={dayForecast.day.condition.icon} alt="Icon" />
                                                <p>Máxima: {dayForecast.day.maxtemp_c}°C</p>
                                                <p>Mínima: {dayForecast.day.mintemp_c}°C</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                ):(
                    <h2 className="text-light">Sin Datos</h2>
                )
            }


        </div>
    );
}

export default Card;