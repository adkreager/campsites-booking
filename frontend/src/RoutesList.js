import React from 'react'
import RouteCampgrounds from './RouteCampgrounds'

//Displays all of the potential routes you could take
const RoutesList = (props) => {
    let arr = [];
    if (props.selectedRoute !== undefined) {
        for (let i = 1; i <= props.selectedRoute.numberofdays; i++) {
            arr.push(i)
        }
    }
    let cards = arr.map(day => <RouteCampgrounds currentDay={day} selectedRoute={props.selectedRoute} onOKClick={props.onOKClick} date={props.date}/>);

    return (
        <div className="flex">
            <div className="flex">
                {cards}
            </div>
            <div>
                <a href='#' className="btn btn-primary" >Book Now!!!</a>
                <p>Summary Info here <br /> price <br /> etc.</p>
            </div>
        </div>
    )
}

export default RoutesList