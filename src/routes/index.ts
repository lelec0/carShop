import {Application as App} from 'express';

const Routes = (app:App) => {
  app.get('/', (_req, res) => res.status(200).json('nosayrandom'))
}

export default Routes;