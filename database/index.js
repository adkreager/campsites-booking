const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const queries = require('./queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', queries.getUsers)
// app.get('students/:studentId', queries.getStudentById)
// app.get('student?search=', queries.getStudentByName)
// app.post('/grade', queries.addGrade)
// app.post('/register', queries.addStudent)