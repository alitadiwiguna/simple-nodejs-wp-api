// src/app.ts
import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'

const app = express()
const port = 5000

// Middleware to parse JSON request bodies
app.use(bodyParser.json())

// Define a route for handling POST requests to /via/v1/proposal/publish-day
app.post('/via/v1/proposal/publish-day', (req: Request, res: Response) => {
  // Extract parameters from the request body
  const { bo_id, bo_header_id, ordinal, date, presentation, detail } = req.body

  // Add your business logic here
  console.log(req.body)

  // Simulate generating wpId and permalink
  const wpId = 'wpId-83bx98f8998hs3h' // Replace with your logic to generate wpId
  const permalink = `https://viacroatia.mintaka.hr/page-element/daily-template-1/` // Replace with your permalink logic

  // Send a response with wpId and permalink
  res.status(200).json({
    wpId,
    permalink,
  })
})

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
