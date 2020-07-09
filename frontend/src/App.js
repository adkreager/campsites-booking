import React from 'react';
import './App.css';
import DateSelection from './DateSelection'
import RouteSelection from './RouteSelection'
import RoutesList from './RoutesList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [],
      startDate: "2020-07-11",
      trip: [],
      tripTotal: 0,
    }
    this.fetchRoutes = this.fetchRoutes.bind(this)
    // this.fetchLodgings = this.fetchLodgings.bind(this)
    this.handleRouteSelectionChange = this.handleRouteSelectionChange.bind(this)
    this.handleDateSelectionChange = this.handleDateSelectionChange.bind(this)
    this.handleOKClick = this.handleOKClick.bind(this)
  }

  async fetchRoutes() {
    await fetch('http://localhost:3001/routes')
      .then((response) => response.json())
      .then((json) => { this.setState({ routes: json }) })
  }

  // async fetchLodgings(id, day, type) {
  //   await fetch(`http://localhost:3001/lodging/${id}/${day}/${type}`)
  //     .then((response) => response.json())
  //     .then((json) => { this.setState({ routeLodgings: json }) })
  // }

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

  handleRouteSelectionChange(e) {
    let id = parseInt(e.target.value)
    this.setState({ selectedRoute: this.state.routes[id - 1] }
    )
  }

  handleDateSelectionChange(e) {
    this.setState({ startDate: e.target.value })
  }


  handleOKClick(lodgingType, lodgingLocation, roomStyle) {
    if (lodgingType && lodgingLocation && roomStyle) {
      let newTrip = this.state.trip
      newTrip.push({ lodgingType: lodgingType, lodgingLocation: lodgingLocation, roomStyle: roomStyle })
      this.setState({ trip: newTrip })
      //REMOVE BUTTON VISIBILITY ON OK CLICK
            //changes visibility of lists
      // let campList = document.getElementById("camp-route")
      // campList.removeAttribute('hidden')
      // let routeList = document.getElementById("route-list")
      // routeList.hidden = true
    }
  }
  //ON BUTTON CLICK, TAKES IN THE ROUTE INFO AND PERFORMS A PUT FOR THAT BOOKING
  //////////////////////////////////////////////////////////////////////
  handleButtonClick(routeInfo) {
    let startDate = this.state.startDate
    for (let i = 0; i < routeInfo.length; i++) {
      this.postBookedStatus(parseInt(routeInfo[i].campsiteid), startDate)
      //placeholder date incrementer TESTING ONLY
      let arr = startDate.split('-')
      arr[2] = parseInt(arr[2]) + 1
      startDate = arr.join('-')
    }
    let button = document.getElementById("book-button")
    button.hidden = true
    let dropList = document.getElementById("dateSelection")
    dropList.hidden = true
    let bookMessage = document.getElementById("book-message")
    bookMessage.innerText = "You booked this trip!"
    this.fetchAvailability()
    alert("You've booked your trip! Have a great time!")
  }


  render() {
    if (this.state.routes.length === 0) {
      this.fetchRoutes()
    }

    return (
      <div>
        <div className="App">
          <div className="App-body">
            <div id="top-card">
              <RouteSelection routes={this.state.routes} onRouteChange={this.handleRouteSelectionChange} />
              <DateSelection selectedRoute={this.state.selectedRoute} onChange={this.handleDateSelectionChange} />
              <h2 id="book-message">Book your trip now!</h2>
            </div>
            <RoutesList selectedRoute={this.state.selectedRoute} onOKClick={this.handleOKClick} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;