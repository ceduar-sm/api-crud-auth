import app from './app.js'
import { config } from './config.js'
import { connectDB } from './database/db.config.js'

const { PORT } = config

connectDB()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
