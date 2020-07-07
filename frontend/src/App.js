import React from 'react';
import yellowstone from './yellowstone-map.png'
import './App.css';


//Dates available to choose from
const DateSelection = (props) => {
  return (
    <div>
      <label htmlFor="dates">Plan your trip...</label>
      <br />
      <select name='dates' id='dates' onChange={props.onChange}>
        <option disabled selected hidden></option>
        <option value='1'>July 11 - July 13</option>
        <option value='2'>July 11 - July 14</option>
        <option value='3'>July 11 - July 15</option>
      </select>
    </div>
  )
}

//Map of Yellowstone, hoping to apply map html and display routes on map
const Map = (props) => {
  return (
    <img src={yellowstone} alt="Map of Yellowstone National Park" id="park-map" />
  )
}

//Displays all of the potential routes you could take
const RoutesList = (props) => {
  return (
    <div>
      <ul id="route-list">
        {props.routes.map(route => <li>{route.routename}</li>)}
      </ul>
      <RouteCampgrounds selectedRoute={props.selectedRoute} routeInfo={props.routeInfo} />
    </div>
  )
}

//Displays all of the campground list items contained in a single route
const RouteCampgrounds = (props) => {

  return (
    <ul id="camp-route" hidden>
      <button type='button' className="book-button">Book Now!!!</button>
      <li>{props.selectedRoute.routename}</li>
      {props.routeInfo.map(site => <li className="one-night">Night: {site.daynumber}<br />{site.description}</li>)}
    </ul>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [],
      campsites: [],
      availability: [],
      selectedRoute: {},
      selectedRouteInfo: [{ "routeid": 1, "daynumber": 1, "campsiteid": 1, "description": "Madison Campground, night 1 of 2" }],
    }
    this.fetchRoutes = this.fetchRoutes.bind(this)
    this.fetchCampsites = this.fetchCampsites.bind(this)
    this.fetchAvailability = this.fetchAvailability.bind(this)
    this.handleSelectionChange = this.handleSelectionChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.fetchSpecificRoute = this.fetchSpecificRoute.bind(this)
    //CHANGE BOOL FROM FALSE TO TRUE IF BOOKED
    this.postBookedStatus = this.postBookedStatus.bind(this)
  }

  async fetchRoutes() {
    await fetch('http://localhost:3001/routes')
      .then((response) => response.json())
      .then((json) => { this.setState({ routes: json }) })
  }

  async fetchCampsites() {
    await fetch('http://localhost:3001/campsites')
      .then((response) => response.json())
      .then((json) => { this.setState({ campsites: json }) })
  }

  async fetchAvailability() {
    await fetch('http://localhost:3001/availability')
      .then((response) => response.json())
      .then((json) => { this.setState({ availability: json }) })
  }

  async fetchSpecificRoute(id) {
    await fetch(`http://localhost:3001/route/${id}`)
      .then((response) => response.json())
      .then((json) => { this.setState({ selectedRouteInfo: json }) })
  }

  // DO THIS DO THIS DO THIS DO THIS DO THIS 
  async postBookedStatus(campsiteid) {
    await fetch(``)
      .then((response) => response.json())
      .then((json) => { this.setState({ availability: json }) })
  }

  handleSelectionChange(e) {
    let id = parseInt(e.target.value)
    this.setState({ selectedRoute: this.state.routes[id - 1] }, () => {
      this.fetchSpecificRoute(id)
      let campList = document.getElementById("camp-route")
      campList.removeAttribute('hidden')
      let routeList = document.getElementById("route-list")
      routeList.hidden = true
    })
  }

  handleButtonClick() {
    this.postBookedStatus()
  }

  render() {
    if (this.state.routes.length === 0) {
      this.fetchRoutes()
    }
    if (this.state.campsites.length === 0) {
      this.fetchCampsites()
    }
    if (this.state.availability.length === 0) {
      this.fetchAvailability()
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1>Yellowstone National Park Campground Booking Service</h1>
        </header>
        <div className="App-body">
          <h1>Hello there</h1>
          <DateSelection selectedRoute={this.state.selectedRoute} onChange={this.handleSelectionChange} />
          <Map selectedRoute={this.state.selectedRoute} />
          <h2>Book your trip now!</h2>
          <React.Fragment>
            <RoutesList routes={this.state.routes} selectedRoute={this.state.selectedRoute} routeInfo={this.state.selectedRouteInfo} />
          </React.Fragment>
        </div>
      </div>
    )
  }
}

export default App;