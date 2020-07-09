import React from 'react'

const SiteSelection = (props) => {
  //props.fetchRooms(props.lodgingSelection, props.currentDay)
    return (
      <div>
      <label htmlFor="site">Site...</label><br />
        <select name='site' id='site' onChange={props.onChange}>
          <option disabled selected hidden></option>

            DROP DOWN LIST POPULATE WITH MAP HERE
            {props.rooms.map(room => <div><option value={room.lodgingid}>{room.sitename}</option></div>)}

          <option value='1'>Route 1 (2 stops)</option>
          <option value='2'>Route 2 (3 stops)</option>
          <option value='3'>Route 3 (4 stops)</option>
        </select>
      </div>
    )
  }

export default SiteSelection