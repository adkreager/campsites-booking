import React, { useState, useEffect } from 'react';
import placeholder from './placeholder.jpg'
import './App.css';

//Map of Yellowstone, hoping to apply map html and display routes on map
const Map = () => {
  return (
    <img src={placeholder} alt="Map of Yellowstone National Park" />
  )
}

//Displays all of the potential routes you could take, and the stops you could make
const RoutesList = () => {
  return (
    <ul>

    </ul>
  )
}

const DateSelection = () => {
  return (
    <div>
      <label for="dates">Plan your trip...</label>
      <select name='dates' id='dates'>
        <option value='3-day'>July 11 - July 13</option>
        <option value='4-day'>July 11 - July 14</option>
        <option value='5-day'>July 11 - July 15</option>
      </select>
    </div>
  )
}

//Displays one campground list item
const Campground = () => {
  return (
    <li>
      <button type='button'>Book now!</button>
      {/* Campground name
      Campground description
      Available? */}
    </li>
  )
}

//Displays all of the campground list items contained in a single route
const RouteCampgrounds = () => {
  return (
    <ul>
      {/* ALL THE CAMPGROUNDS IN THAT ROUTE WILL BE IN THIS LIST */}
    </ul>
  )
}

const App = () => {
  const [routesShown, setRoutesShown] = useState('')

  // function setDisplayList(e) {
  //   setRoutesShown(e.target.value)
  // }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Yellowstone National Park Campground Booking Service</h1>
      </header>
      <body className="App-body">
        <h1>Hello there</h1>
        <DateSelection />
        <Map />
        <h2>Book your trip now!</h2>
        <RoutesList />
      </body>
    </div>
  );
}

export default App;
