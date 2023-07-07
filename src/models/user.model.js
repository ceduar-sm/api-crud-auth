import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

// User data schema
const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    require: true
  },
  lastName: {
    type: String,
    trim: true,
    require: true
  },
  password: {
    type: String,
    trim: true,
    require: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    require: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

export const User = model('User', userSchema)

//
userSchema.pre('findById', function () {
  this.where({ isDeleted: false })
})

// Compare password function
userSchema.methods.comparePassword = async function (candidatePass) {
  return await bcrypt.compare(candidatePass, this.password)
}
