import jwt from 'jsonwebtoken'
import { config } from '../config.js'

const { JWT_SECRET } = config

export function createAccessToken (payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, { expiresIn: 'id' }, (err, token) => {
      if (err) console.log(err)
      resolve(token)
    })
  })
}
