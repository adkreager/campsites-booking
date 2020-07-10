import React from 'react'
import LodgTypeSelection from './LodgTypeSelection'
import LodgingSelection from './LodgingSelection'
import OutputCard from './OutputCard'

//Displays all of the campground list items contained in a single route
class RouteCampgrounds extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDay: props.currentDay,
            selectedRoute: props.selectedRoute,
            lodging: [],
            lodgingSelection: '',
            price: ''
        }
        this.fetchLodgings = this.fetchLodgings.bind(this)
        this.handleLodgTypeSelectionChange = this.handleLodgTypeSelectionChange.bind(this)
        this.handleLodgingSelectionChange = this.handleLodgingSelectionChange.bind(this)
    }

    fetchLodgings(id, day, type) {
        fetch(`http://localhost:3006/lodging/${id}/${day}/${type}`)
            .then((response) => response.json())
            .then((json) => { this.setState({ lodging: json }) })
    }

    async handleLodgTypeSelectionChange(e) {
        await this.setState({ lodgingType: e.target.value }, () => {
            this.fetchLodgings(this.state.selectedRoute.routeid, this.state.currentDay, this.state.lodgingType)
        })
    }

    async handleLodgingSelectionChange(e) {
        await this.setState({ lodgingSelection: e.target.value, price: e.target.price })
    }



    render() {
        if (this.state.selectedRoute !== undefined) {
            return (
                <div>
                    <div className="card">
                        <h2 className="card-header">Day {this.state.currentDay}</h2>
                        <div className="card-body">
                            <LodgTypeSelection selectedRoute={this.state.selectedRoute} onChange={this.handleLodgTypeSelectionChange}
                                currentDay={this.state.currentDay} />
                            <br />
                            <LodgingSelection onChange={this.handleLodgingSelectionChange} fetchLodgings={this.fetchLodgings}
                                lodging={this.state.lodging} selectedRoute={this.props.selectedRoute} currentDay={this.props.currentDay}
                                lodgingType={this.state.lodgingType}
                            />
                            <br />
                            <OutputCard setTotal={this.props.setTotal} currentDay={this.state.currentDay} lodging={this.state.lodging} lodgingSelection={this.state.lodgingSelection} />
                            <a href='#' className="btn btn-primary" onClick={this.props.post(this.state.lodgingSelection)}>Book Now!!!</a>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default RouteCampgrounds