import express from 'express'
import * as controller from '../controllers/list.js'
import { isAuth } from '../middleware/auth.js'

const router = express.Router()

router.get('/', isAuth, controller.index)
router.post('/', isAuth, controller.create)
router.delete('/:id', isAuth, controller.remove)

export default router