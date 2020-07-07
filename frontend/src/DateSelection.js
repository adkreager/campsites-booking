import React from 'react';

//Dates available to choose from
const DateSelection = (props) => {
    return (
      <div>
        <label htmlFor="dates">Plan your trip...</label>
        <br />
        <select name='dates' id='dates' onChange={props.onChange}>
          <option disabled selected hidden></option>
          <option value='1'>July 11 - July 13</option>
          <option value='2'>July 11 - July 14</option>
          <option value='3'>July 11 - July 15</option>
        </select>
      </div>
    )
  }

  export default DateSelection