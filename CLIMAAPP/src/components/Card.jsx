import React from "react";
import Spinner from "./Spinner"

const Card = ({showData, loadingData, weather, forecast}) =>{

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