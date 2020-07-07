import React from 'react';
import placeholder from './placeholder.jpg'
import './App.css';

//Map of Yellowstone, hoping to apply map html and display routes on map
const Map = (props) => {
  return (
    <img src={placeholder} alt="Map of Yellowstone National Park" />
  )
}

//Displays all of the potential routes you could take, and the stops you could make
const RoutesList = (props) => {
  return (
    <ul>

    </ul>
  )
}

const DateSelection = (props) => {
  return (
    <div>
      <label htmlFor="dates">Plan your trip...</label>
      <br/>
      <select name='dates' id='dates' onChange={props.onChange}>
        <option value='1'>July 11 - July 13</option>
        <option value='2'>July 11 - July 14</option>
        <option value='3'>July 11 - July 15</option>
      </select>
    </div>
  )
}

//Displays one campground list item
const Campground = (props) => {
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
const RouteCampgrounds = (props) => {
  return (
    <ul>
      {/* ALL THE CAMPGROUNDS IN THAT ROUTE WILL BE IN THIS LIST */}
    </ul>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [],
      routeInfo: [],
      campsites: [],
      availability: [],
      selectedRoute: 1,
    }
    this.fetchRoutes = this.fetchRoutes.bind(this)
    this.fetchRouteInfo = this.fetchRouteInfo.bind(this)
    this.fetchCampsites = this.fetchCampsites.bind(this)
    this.fetchAvailability = this.fetchAvailability.bind(this)
    this.handleSelectionChange = this.handleSelectionChange.bind(this)
  }

  async fetchRoutes() {
    await fetch('http://localhost:3001/routes')
      .then((response) => response.json())
      .then((json) => { this.setState({ routes: json }) })
  }

  async fetchRouteInfo() {
    await fetch('http://localhost:3001/routeinfo')
      .then((response) => response.json())
      .then((json) => { this.setState({ routeInfo: json }) })
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

  handleSelectionChange(e) {
    this.setState({selectedRoute: parseInt(e.target.value)})
  }
  

  render() {
    if (this.state.routes.length === 0) {
      this.fetchRoutes()
    }
    if (this.state.routeInfo.length === 0) {
      this.fetchRouteInfo()
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
          <RoutesList selectedRoute={this.state.selectedRoute} routes={this.state.routes} routeInfo={this.state.routeInfo} />
        </div>
      </div>
    )
  }
}

export default App;