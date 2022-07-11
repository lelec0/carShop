import GenrericRouter from './routes/Router';
import App from './app';
import { Car } from './interfaces/CarInterface';
import { Motorcycle } from './interfaces/MotorcycleInterface';
import CarController from './controllers/carController';
import MotorcycleController from './controllers/motorcycleController';

const server = new App();

const carController = new CarController();
const motorcyclesController = new MotorcycleController();

const carRouter = new GenrericRouter<Car>();
const motorcycleRouter = new GenrericRouter<Motorcycle>();

carRouter.addRoute(carController);
motorcycleRouter.addRoute(motorcyclesController);

server.addRouter(carRouter.router);
server.addRouter(motorcycleRouter.router);

export default server;
