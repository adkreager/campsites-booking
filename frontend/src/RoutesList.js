import React from 'react'
import RouteCampgrounds from './RouteCampgrounds'

//Displays all of the potential routes you could take
const RoutesList = (props) => {
    return (
        <div>
            <ul id="route-list">
                {props.routes.map(route => <li>{route.routename}</li>)}
            </ul>
            <RouteCampgrounds selectedRoute={props.selectedRoute} routeInfo={props.routeInfo} handleButtonClick={props.handleButtonClick} />
        </div>
    )
}

export default RoutesList