import GenrericRouter from './routes/Router';
import App from './app';
import { Car } from './interfaces/CarInterface';
import CarController from './controllers/carController';

const server = new App();

const carController = new CarController();

const carRouter = new GenrericRouter<Car>();

carRouter.addRoute(carController);

server.addRouter(carRouter.router);

export default server;
