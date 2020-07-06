const { connect } = require('http')

const Pool = require('pg').Pool
const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'campgrounds',
    password: 'fastWeasel24!',
    port: 5432,
})

//DISPLAY ALL POSSIBLE ROUTES
const getRoutes = (request, response) => {
    connection.query('SELECT * FROM t_availability', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//CHECK IF A DATE IS AVAILABLE
const checkDateAvailability = (request, response) => {
    // Path param NOT Query param, so no ?date= in the URL, just the date
    let date = request.params.date;

    connection.query('SELECT * FROM t_availability WHERE bookDate = $1', [date], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//UPDATE THE BOOKED STATUS FOR THE CAMPGROUND
//still needs error handling
const updateBooking = (request, response) => {
    if (id && typeof id === 'number') {
        const id = parseInt(request.params.id)
        const { firstname, lastname, email } = request.body
        if (firstname && lastname && email) {
            connection.query(
                'UPDATE users SET firstname = $1, lastname = $2, email = $3 WHERE userid = $4',
                [firstname, lastname, email, id],
                (error, results) => {
                    if (error) {
                        throw error
                    }
                    response.status(200).send(`User modified with ID: ${id}`)
                }
            )
        } else {
            response.status(400).send('Please enter all required fields.')
        }
    } else {
        response.status(400).send('Invalid ID')
    }
}

module.exports = {
    getRoutes,
    checkDateAvailability,
    updateBooking
}