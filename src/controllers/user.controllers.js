import bcrypt from 'bcrypt'
import { User } from '../models/user.model.js'
import { createAccessToken } from '../libs/jwt.js'

class Users {
  async createUser (req, res) {
    try {
      const { firstName, lastName, password, repeatPassword, email } = req.body

      const foundUser = await User.findOne({ email })

      if (foundUser) { return res.status(302).json({ message: 'User already exist' }) }

      if (password !== repeatPassword) { return res.status(400).json({ message: 'Passwords do not match' }) }

      const newUser = new User({
        firstName,
        lastName,
        password: await bcrypt.hash(password, 10), // Encrypt password function
        email
      })

      const userSaved = await newUser.save()
      const token = await createAccessToken({ id: userSaved._id })

      res.status(201).json({ message: 'User created' })
      res.cookie('token', token)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  async getUser (req, res) {
    try {
      const foundUsers = await User.find({ isDeleted: false })

      if (!foundUsers) { return res.status(404).json({ message: 'No registered users' }) }

      res.status(200).json({ Users: foundUsers })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  async getUserById (req, res) {
    try {
      const foundUser = await User.findOne({ _id: req.params.id, isDeleted: false })

      if (!foundUser) { return res.status(404).json({ message: 'User not found' }) }

      res.status(200).json({ User: foundUser })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  async updateUserById (req, res) {
    try {
      const foundUser = await User.findOne({ _id: req.params.id, isDeleted: false })

      if (!foundUser) { res.status(404).json({ mesage: 'User not found' }) }

      await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

      res.status(200).json({ message: 'Successfull' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  async deleteUserById (req, res) {
    try {
      const foundUser = await User.findOneAndUpdate({ _id: req.params.id }, { $set: { isDeleted: true } })

      if (!foundUser) { res.status(404).json({ mesage: 'User not found' }) }

      res.status(200).json({ message: 'Successfull' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
export default new Users()
