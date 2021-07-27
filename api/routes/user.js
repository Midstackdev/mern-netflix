import express from 'express'
import * as controller from '../controllers/user.js'
import { isAuth } from '../middleware/auth.js'

const router = express.Router()

router.get('/', isAuth, controller.index)
router.get('/stats', isAuth, controller.stats)
router.get('/:id', controller.show)
router.put('/:id', isAuth, controller.update)
router.delete('/:id', isAuth, controller.remove)

export default router