import React from 'react'

const OutputCard = (props) => {
    if (props.lodging.length !== 0 && props.lodgingSelection !== "") {
        let lodgName = ""
        let price = ""
        for (let i = 0; i < props.lodging.length; i++) {
            if (parseInt(props.lodgingSelection) === props.lodging[i].lodgingid) {
                lodgName = props.lodging[i].lodgingname
                price = props.lodging[i].price
                // props.setTotal(price)
            }
        }
        return (
            <div className="card output-card">
                <div className="card-body">
                    <p>{lodgName}</p>
                    <p className="mb-3 text-muted">${price}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card output-card">
                <h2 className="card-header"></h2>
                <div className="card-body">
                    <h1 className="card-title"></h1>
                    <h2 className="card-subtitle mb-3 text-muted"></h2>
                </div>
            </div>
        )
    }
}

export default OutputCard