const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3006
const queries = require('./newquery')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
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

app.get('/routes', queries.getRoutes)
app.get('/lodging/:id/:day/:type', queries.getLodgingsInfo)
app.put('/book/:id', queries.putBookedDate)