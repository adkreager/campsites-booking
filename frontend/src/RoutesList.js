import React from 'react'
import RouteCampgrounds from './RouteCampgrounds'

//Displays all of the potential routes you could take
class RoutesList extends React.Component {
    constructor(props) {
        super(props)
    }

    async postBookedStatus(lodgingid) {
        let data = {
          id: lodgingid,
        }
    
        await fetch(`http://localhost:3001/book/${data.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }).then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }

    render() {
        let arr = [];
        if (this.props.selectedRoute !== undefined) {
            for (let i = 1; i <= this.props.selectedRoute.numberofdays; i++) {
                arr.push(i)
            }
        }
        let cards = arr.map(day => <RouteCampgrounds post={this.postBookedStatus} currentDay={day} selectedRoute={this.props.selectedRoute} setTotal={this.setTripTotal}/>);

        return (
            <div className="flex">
                <div className="flex">
                    {cards}
                </div>
            </div>
        )
    }
}

export default RoutesList