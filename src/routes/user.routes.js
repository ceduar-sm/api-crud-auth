import { Router } from 'express'
import Users from '../controllers/user.controllers.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { userSchema } from '../schema/user.schema.js'

const router = Router()

router.post('/users/singup', validateSchema(userSchema), Users.createUser)

router.get('/users', Users.getUser)

router.get('/users/:id', Users.getUserById)

router.put('/users/:id', Users.updateUserById)

router.delete('/users/:id', Users.deleteUserById)

export default router
