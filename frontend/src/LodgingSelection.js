import React from 'react'

const LodgingSelection = (props) => {
  props.fetchLodgings(props.selectedRoute.routeid, props.currentDay, )
    return (
      <div>
      <label htmlFor="lodging">Lodging...</label> <br />
        <select name='lodging' id='lodging' onChange={props.onChange}>
          <option disabled selected hidden></option>
          {props.lodging.map(lodge => <option value={lodge.lodgingid}>{lodge.lodgingname}</option>)}

          <option value='1'>Route 1 (2 stops)</option>
          <option value='2'>Route 2 (3 stops)</option>
          <option value='3'>Route 3 (4 stops)</option>
        </select>
      </div>
    )
  }

export default LodgingSelection