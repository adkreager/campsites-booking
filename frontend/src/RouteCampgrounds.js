import React from 'react'

//Displays all of the campground list items contained in a single route
const RouteCampgrounds = (props) => {
    return (
        <ul id="camp-route" hidden>
            <button type='button' className="book-button" onClick={() => props.handleButtonClick}>Book Now!!!</button>
            <li>{props.selectedRoute.routename}</li>
            {props.routeInfo.map(site => <li className="one-night">Night: {site.daynumber}<br />{site.description}</li>)}
        </ul>
    )
}

export default RouteCampgrounds