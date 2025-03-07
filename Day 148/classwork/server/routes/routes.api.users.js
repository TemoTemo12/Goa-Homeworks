import express from 'express'
import {
  deleteUserApi,
  getUserApi,
  postUserApi,
  updateUserApi
} from '../controllers/user.controller.js'

const routes = express.Router()

routes.get('/', getUserApi)
routes.post('/', postUserApi)
routes.delete('/:id', deleteUserApi)
routes.put('/:id', updateUserApi)

export { routes }
