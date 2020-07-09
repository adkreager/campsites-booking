import React from 'react'

const LodgTypeSelection = (props) => {
    return (
      <div>
      <label htmlFor="lodging-type">Lodging Style...</label> <br />
        <select name='lodging-type' id='lodging-type' onChange={props.onChange}>
          <option disabled selected hidden></option>
          <option value='campground'>Campground</option>
          <option value='hotel'>Hotel</option>
          <option value='both'>Both</option>
        </select>
      </div>
    )
  }

export default LodgTypeSelection