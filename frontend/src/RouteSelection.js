import React from 'react';

//Dates available to choose from
const RouteSelection = (props) => {
  return (
    <div id="routeSelection">
      <label htmlFor="route">Route...</label>
      <select name='route' id='route' onChange={props.onRouteChange}>
        <option disabled selected hidden></option>
        {props.routes.map(route => <option value={route.routeid}>{route.routename} ({route.routedesc})</option>)}
      </select>
    </div>
  )
}

export default RouteSelection