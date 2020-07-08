import React from 'react'

const LodgingSelection = (props) => {
    return (
      <div id="routeSelection">
      <label htmlFor="route">Lodging...</label> <br />
        <select name='route' id='route' onChange={props.onChange}>
          <option disabled selected hidden></option>

            DROP DOWN LIST POPULATE WITH MAP HERE

          <option value='1'>Route 1 (2 stops)</option>
          <option value='2'>Route 2 (3 stops)</option>
          <option value='3'>Route 3 (4 stops)</option>
        </select>
      </div>
    )
  }

export default LodgingSelection