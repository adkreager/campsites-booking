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
      tripTotal: 0,
    }
    this.fetchRoutes = this.fetchRoutes.bind(this)
    this.handleRouteSelectionChange = this.handleRouteSelectionChange.bind(this)
    this.handleDateSelectionChange = this.handleDateSelectionChange.bind(this)
  }

  async fetchRoutes() {
    await fetch('http://localhost:3001/routes')
      .then((response) => response.json())
      .then((json) => { this.setState({ routes: json }) })
  }

  handleRouteSelectionChange(e) {
    let id = parseInt(e.target.value)
    this.setState({ selectedRoute: this.state.routes[id - 1] }
    )
  }

  handleDateSelectionChange(e) {
    this.setState({ startDate: e.target.value })
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
              <h2 id="book-message">Book your trip now!</h2>
              <div id='drops'>
              <RouteSelection routes={this.state.routes} onRouteChange={this.handleRouteSelectionChange} />
              <DateSelection selectedRoute={this.state.selectedRoute} onChange={this.handleDateSelectionChange} />
              </div>
            </div>
            <RoutesList selectedRoute={this.state.selectedRoute} date={this.state.startDate} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;