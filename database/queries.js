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
const getUsers = (request, response) => {
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







// //CREATE users
// const createUser = (request, response) => {
//     const { firstname, lastname, email } = request.body

//     connection.query('INSERT INTO users (firstname, lastname, email) VALUES ($1, $2, $3)',
//         [firstname, lastname, email], (error, results) => {
//             if (error) {
//                 throw error
//             }
//             response.status(200).send(`User ${firstname} ${lastname} added.`)
//         })
// }

// //READ a user's information
// const getUserById = (request, response) => {
//     // Path param NOT Query param, so no ?id= in the URL, just the number
//     let id = parseInt(request.params.id);

//     connection.query('SELECT * FROM users WHERE userid = $1', [id], (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }

// //UPDATE a user's information
// //still needs error handling
// const updateUser = (request, response) => {
//     if (id && typeof id === 'number') {
//         const id = parseInt(request.params.id)
//         const { firstname, lastname, email } = request.body
//         if (firstname && lastname && email) {
//             connection.query(
//                 'UPDATE users SET firstname = $1, lastname = $2, email = $3 WHERE userid = $4',
//                 [firstname, lastname, email, id],
//                 (error, results) => {
//                     if (error) {
//                         throw error
//                     }
//                     response.status(200).send(`User modified with ID: ${id}`)
//                 }
//             )
//         } else {
//             response.status(400).send('Please enter all required fields.')
//         }
//     } else {
//         response.status(400).send('Invalid ID')
//     }
// }

// //DELETE a user's information
// const deleteUser = (request, response) => {
//     const id = parseInt(request.params.id)
  
//     connection.query('DELETE FROM users WHERE userid = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User deleted with ID: ${id}`)
//     })
//   }

// //LIST all users information
// const getUsers = (request, response) => {
//     connection.query('SELECT * FROM users', (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }

module.exports = {
    // getUsers,
    // createUser,
    // getUserById,
    // updateUser,
    // deleteUser
    checkDateAvailability,
    updateBooking,
}