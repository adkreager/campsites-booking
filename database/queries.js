const { connect } = require('http')

const Pool = require('pg').Pool
const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'campsites',
    password: 'fastWeasel24!',
    port: 5432,
})

//GET ALL ROUTES
const getRoutes = (request, response) => {
    connection.query('SELECT * FROM t_routeList', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//GET ALL ROUTE INFO
const getRouteInfo = (request, response) => {
    connection.query('SELECT * FROM t_routeInfo', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//GET ALL CAMPSITES
const getCampsites = (request, response) => {
    connection.query('SELECT * FROM t_campsites', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//GET ALL AVAILABILITY
const getAvailability = (request, response) => {
    connection.query('SELECT * FROM t_availability', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getRoutes,
    getRouteInfo,
    getCampsites,
    getAvailability
}