import express from 'express'

const app = express()
app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log('Server Listening on PORT:', process.env.PORT)
})

app.get('/status', (request, response) => {
  const status = {
    Status: `It worksss${process.env.TEST_DISPLAY}`,
  }

  response.send(status)
})
