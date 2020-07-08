import React from 'react'
import RouteCampgrounds from './RouteCampgrounds'

//Displays all of the potential routes you could take
const RoutesList = (props) => {
    return (
        <div id="card-container">
            <RouteCampgrounds onRadio={props.onRadio} />
           <a href='#' className="btn btn-primary">Book Now!!!</a>
        </div>
    )
}

export default RoutesList