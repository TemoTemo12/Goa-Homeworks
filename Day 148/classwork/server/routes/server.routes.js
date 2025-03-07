import { Router } from 'express'
import { routes as apiUsers } from './routes.api.users.js'

const routes = Router()

routes.use('/api/users', apiUsers)

export { routes }