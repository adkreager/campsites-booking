import React from 'react';
import yellowstone from './yellowstone-map.png'

//Map of Yellowstone, hoping to apply map html and display routes on map
const MapImage = (props) => {
    return (
        <img src={yellowstone} alt="Map of Yellowstone National Park" id="park-map" />
    )
}

export default MapImage