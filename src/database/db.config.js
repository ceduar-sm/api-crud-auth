import mongoose from 'mongoose'
import { config } from '../config.js'

import '../models/user.model.js'

const { URI_DB } = config

export const connectDB = async () => {
  try {
    await mongoose.connect(URI_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected Database')
  } catch (error) {
    return console.log(error.message)
  }
}
