const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const queries = require('./queries')
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
app.get('/routeinfo', queries.getRouteInfo)
app.get('/campsites', queries.getCampsites)
app.get('/availability', queries.getAvailability)
app.get('/route/:id', queries.getSpecificRouteInfo)