const Pool = require('pg').Pool
const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'booking',
    password: 'fastWeasel24!',
    port: 5432,
})

//GET LIST OF ROUTES
const getRoutes = (request, response) => {
    connection.query('SELECT * FROM t_routes', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//GET LIST OF LODGINGS for a specific route
const getLodgingsInfo = (request, response) => {
    let id = request.params.id
    let day = request.params.day
    let type = request.params.type

    connection.query('SELECT * FROM t_lodgings WHERE routeid=$1 AND daynumber=$2 AND lodgingtype=$3', [id, day, type], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const putBookedDate = (request, response) => {
    let lodgingid = request.params.id
    connection.query('UPDATE t_lodgings SET isbooked=true WHERE lodgingid=$1', [lodgingid], (error, results) => {
        if (error) {
            throw error
        }
        response.send(`Successfully booked lodging ${lodgingid}`)
    })
}


module.exports = {
    getRoutes,
    getLodgingsInfo,
    putBookedDate
}