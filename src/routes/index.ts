import {Application as App} from 'express';
import genrericRoutes from './genrericRoutes'

const Routes = (app:App) => {
  app.use('/', genrericRoutes)
  app.get('/xablau', (_req, res) => res.status(200).json('nosayrandom'))
}

export default Routes;