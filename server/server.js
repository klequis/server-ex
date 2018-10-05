import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import 'babel-polyfill'


import { greenf, redf, yellow } from '../logger'
import hello from '../routes/hello'

const app = express()
const port = process.env.PORT

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/', hello)
app.get('/', (req, res) => {
  redf('Invalid endpoint!')
  res.send('Invalid endpoint!')
})

if (!module.parent) {
  app.listen(port, () => {
    console.log(`Events API server is listening on port ${port}`)
  })
}

module.exports = { app, port }
