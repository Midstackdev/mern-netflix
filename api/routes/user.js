import express from 'express'
import * as controller from '../controllers/user.js'

const router = express.Router()

router.get('/me', controller.me)

export default router