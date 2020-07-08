const { connect } = require('http')

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

module.exports = {
    getRoutes,
}