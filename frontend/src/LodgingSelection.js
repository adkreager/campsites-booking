import React from 'react'

const LodgingSelection = (props) => {
  props.fetchLodgings(props.selectedRoute.routeid, props.currentDay, props.lodgingType)
    return (
      <div>
      <label htmlFor="lodging">Lodging...</label> <br />
        <select name='lodging' id='lodging' onChange={props.onChange}>
          <option disabled selected hidden></option>
          {props.lodging.map(lodge => <option value={lodge.lodgingid}>{lodge.lodgingname} ${lodge.price}</option>)}
        </select>
      </div>
    )
  }

export default LodgingSelection