import express from 'express'
import * as controller from '../controllers/movie.js'
import { isAuth } from '../middleware/auth.js'

const router = express.Router()

router.get('/', isAuth, controller.index)
router.post('/', isAuth, controller.create)
router.get('/random', isAuth, controller.random)
router.get('/:id', isAuth, controller.show)
router.put('/:id', isAuth, controller.update)
router.delete('/:id', isAuth, controller.remove)

export default router