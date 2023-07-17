import React from "react";
import Spinner from "./Spinner"

const Card = ({showData, loadingData, weather, forecast}) =>{

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
                        <div className="card mb-3 mx-auto bg-dark text light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title text-light">{weather.location.name}</h3>
                                    <p className="card-date text-light">{date}</p>
                                    <h1 className="card-temp text-light">{weather.current.temp_c}°C</h1>
                                    <p className="card-desk text-light"><img src={weather.current.condition.icon} alt="icon"/>{weather.current.condition.text}</p>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-started mt-2">

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