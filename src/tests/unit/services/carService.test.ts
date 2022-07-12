import { expect } from 'chai';
import mongoose from 'mongoose';
import Sinon, { SinonStub } from 'sinon';
import CarService from '../../../services/carService';
import { validCar, validCarResponse } from '../../mocks/carMock'

describe ('Car Service', () => {
  describe ('Create Car', () => {
    const carService = new CarService();
    before(async () => {
      Sinon.stub(mongoose.Model, 'create').resolves(validCarResponse);
    })
    after(() => {
      Sinon.restore();
    })
    it ('Create function test', async () => {
      const car = await carService.create(validCar);
      expect(car).to.be.deep.equal(validCarResponse);
    });
  });

  describe ('Read Car', () => {
    const carService = new CarService();
    before(async () => {
      Sinon.stub(mongoose.Model, 'find').resolves([validCarResponse]);
    })
    after(() => {
      Sinon.restore();
    })
    it ('Read function test', async () => {
      const car = await carService.read();
      expect(car).to.be.deep.equal([validCarResponse]);
    });
  });

  describe ('ReadOne Car', () => {
    const carService = new CarService();
    before(async () => {
      Sinon.stub(mongoose.Model, 'findOne').resolves(validCarResponse);
    })
    after(() => {
      Sinon.restore();
    })
    it ('ReadOne function test', async () => {
      const car = await carService.readOne('123456789012345678901234');
      expect(car).to.be.deep.equal(validCarResponse);
    });
  });

  describe ('update Car', () => {
    const carService = new CarService();
    before(async () => {
      Sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(validCarResponse);
    })
    after(() => {
      Sinon.restore();
    })
    it ('update function test', async () => {
      const car = await carService.update('123456789012345678901234', validCar);
      expect(car).to.be.deep.equal(validCarResponse);
    });
  });

  describe ('delete Car', () => {
    const carService = new CarService();
    before(async () => {
      Sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(1);
    })
    after(() => {
      Sinon.restore();
    })
    it ('delete function test', async () => {
      const car = await carService.delete('123456789012345678901234');
      expect(car).to.be.deep.equal(1);
    });
  });
  //  MOCKAR O MONGO DEPOIS VOLTO PARA FINALIZAR
  // describe ('Create Car Service', () => {
  //   const carService = new CarService();
  //   const carModel = new CarModel();
  //   before(async () => {
  //     Sinon.stub(carModel, "create").resolves(validCarResponse);
  //   })
  //   after(() => {
  //     Sinon.restore();
  //   })
  //   it ('Sucess Create function test', async () => {
  //     const car = await carService.create(validCar);
  //     console.log(car);
  //     expect(car).to.be.deep.equal(validCarResponse);
  //   });
  // });
  
  // describe ('Read Car', () => {
  //   const carService = new CarService();
  //   const carModel = new CarModel();
  //   before(async () => {
  //     Sinon.stub(carModel, 'read').resolves([validCarResponse]);
  //   })
  //   after(() => {
  //     Sinon.restore();
  //   })
  //   it ('Sucess Read function test', async () => {
  //     const car = await carService.read();
  //     expect(car).to.be.deep.equal([validCarResponse]);
  //   });
  // });

  // describe ('ReadOne Car', () => {
  //   const carService = new CarService();
  //   const carModel = new CarModel();
  //   before(async () => {
  //     Sinon.stub(carModel, 'readOne').resolves(validCarResponse);
  //   })
  //   after(() => {
  //     Sinon.restore();
  //   })
  //   it ('Sucess ReadOne function test', async () => {
  //     const car = await carService.readOne('123456789012345678901234');
  //     expect(car).to.be.deep.equal(validCarResponse);
  //   });
  // });

  // describe ('Update Car', () => {
  //   const carService = new CarService();
  //   const carModel = new CarModel();
  //   before(async () => {
  //     Sinon.stub(carModel, 'update').resolves(validCarResponse);
  //   })
  //   after(() => {
  //     Sinon.restore();
  //   })
  //   it ('Sucess Update function test', async () => {
  //     const car = await carService.update('123456789012345678901234', validCar);
  //     expect(car).to.be.deep.equal(validCarResponse);
  //   });
  // });

  // describe ('Delete Car', () => {
  //   const carService = new CarService();
  //   const carModel = new CarModel();
  //   before(async () => {
  //     Sinon.stub(carModel, 'delete').resolves(validCarResponse);
  //   })
  //   after(() => {
  //     Sinon.restore();
  //   })
  //   it ('Sucess Delete function test', async () => {
  //     const car = await carService.delete('123456789012345678901234');
  //     expect(car).to.be.deep.equal(validCarResponse);
  //   });
  // });
});