import express, { Router } from 'express';
import connectToDatabase from './connection';
import Routes from './routes';

class App {
  public app: express.Application;
  public routes = Routes;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes(this.app);
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase();
    this.app.listen(
      PORT,
      () => console.log(`BR Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;
