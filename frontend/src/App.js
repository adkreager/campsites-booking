import React from 'react';
import './App.css';
import DateSelection from './DateSelection'
import MapImage from './MapImage'
import RoutesList from './RoutesList'

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

  // PERFORMS PUT QUERY TAKING IN DATA FROM THE CURRENT ROUTE
  ///////////////////////////////////////////////////////////
  async postBookedStatus(campsiteid, date) {
    let data = {
      id: campsiteid,
      date: date,
    }

    await fetch('http://localhost:3001/book', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  handleSelectionChange(e) {
    let id = parseInt(e.target.value)
    this.setState({ selectedRoute: this.state.routes[id - 1] }, () => {
      this.fetchSpecificRoute(id)

      //changes visibility of lists
      let campList = document.getElementById("camp-route")
      campList.removeAttribute('hidden')
      let routeList = document.getElementById("route-list")
      routeList.hidden = true
    })
  }
  //ON BUTTON CLICK, TAKES IN THE ROUTE INFO AND PERFORMS A PUT FOR THAT BOOKING
  //////////////////////////////////////////////////////////////////////
  handleButtonClick(routeInfo) {
    let startDate = '2019-07-11'
    //let zone = 'T05:00:00.000Z'
    for (let i = 0; i < routeInfo.length; i++) {
      this.postBookedStatus(parseInt(routeInfo[i].campsiteid), startDate) //+ zone)
      //placeholder date incrementer TESTING ONLY
      let arr = startDate.split('-')
      arr[2] = parseInt(arr[2]) + 1
      startDate = arr.join('-')
    }
    let button = document.getElementById("book-button")
    button.hidden = true
    let bookMessage = document.getElementById("book-message")
    bookMessage.innerText = "You booked this trip!"
    this.fetchAvailability()
    alert("You've booked your trip! Have a great time!")
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
          <MapImage selectedRoute={this.state.selectedRoute} />
          <h2 id="book-message">Book your trip now!</h2>
          <RoutesList routes={this.state.routes} selectedRoute={this.state.selectedRoute} 
            routeInfo={this.state.selectedRouteInfo} handleButtonClick={this.handleButtonClick} />
        </div>
      </div>
    )
  }
}

export default App;