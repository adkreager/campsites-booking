const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
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

// app.put('/book', queries.bookCampRoute)

app.get('/routes', queries.getRoutes)
app.get('/lodging/:id/:day/:type', queries.getLodgingsInfo)
// app.get('/room/:lodgingid/:day', queries.getRoomsOrSites)
app.put('/book', queries.putBookedDate)