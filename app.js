const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// for health check by fly.io
app.get('/health', (req, res) => {
  // throw 'error...'
  res.send('ok')
})

// notify the version of this app
app.get('/version', (req, res) => {
  res.send('9')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
