import React from 'react'
import LodgingSelection from './LodgingSelection'
import SiteSelection from './SiteSelection'

//Displays all of the campground list items contained in a single route
const RouteCampgrounds = (props) => {
    return (
        //FOR EACH DAY
        <div>
            <div className="card">
                <h2 className="card-header">Day #</h2>
                <div className="card-body">
                    <label htmlFor="campground">Campground </label>
                    <input type="radio" name="venue" value="campground"></input>
                    <br />
                    <label htmlFor="hotel">Hotel </label>
                    <input type="radio" name="venue" value="hotel"></input>
                    <br />
                    <label htmlFor="both">Both </label>
                    <input type="radio" name="venue" value="both"></input>
                    <br />
                    <br />
                {/* --SELECT PREFERRED LODGING LOCATION */}
                <LodgingSelection />
                    <br />
                {/* --SELECT PREFERRED SITE/ROOM */}
                <SiteSelection />
                    <br />
                {/* --BUTTON TO CONFIRM THAT ROOM/SITE, THEN DISPLAY THE NEXT CARD */}
                <button type="button" className="btn btn-primary">OK</button>
            </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">SITE NAME HERE</h1>
                    <h2 className="card-subtitle mb-3 text-muted">PRICE HERE</h2>
                    <p className="card-text">SITE DESCRIPTION HERE</p>
                    <p className="card-text text-muted">AVAILABLE? HERE</p>
                </div>
            </div>
        </div>
    )
}

export default RouteCampgrounds