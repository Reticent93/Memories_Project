const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const  mongoose = require('mongoose')
const dotenv = require('dotenv')


const app = express()
dotenv.config()

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.get('/', (req, res) => {
    res.send("Welcome to Memories API")
})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false)
