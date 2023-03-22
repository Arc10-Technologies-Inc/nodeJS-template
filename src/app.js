const path = require('path')
const hbs = require('hbs')
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../Templates/views')
const partialsPath = path.join(__dirname, '../Templates/partials')

// Setup handlebars and view location
// app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//// setup static directory to serve
app.use(express.static(publicDirectoryPath))

const corsOptions = {
  origin: "*",
  credentials: true,
}
app.use(cors(corsOptions))

app.get('/health', (req, res) => {
    res.status(200).send({
        status: 'success',
        message: 'Health check successful'
    })
})

app.listen(port, () => {
    console.log('Server is up on the port ' + port)
})