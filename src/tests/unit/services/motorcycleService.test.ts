import { expect } from 'chai';
import Sinon, { SinonStub } from 'sinon';
import mongoose from 'mongoose';
import MotorcycleService from '../../../services/motorcycleService';
import { validMotorcycle, validMotorcycleResponse } from '../../mocks/motorcyclesMock'
import { Motorcycle } from '../../../interfaces/MotorcycleInterface';

describe('Motorcycle Service', () => {
  describe('Create Motorcycle', () => {
    const motorcycleService = new MotorcycleService();
    before(async () => {
      Sinon.stub(mongoose.Model, 'create').resolves(validMotorcycleResponse);
    })
    after(() => {
      Sinon.restore();
    })
    it('Create function test', async () => {
      const car = await motorcycleService.create(validMotorcycle as Motorcycle);
      expect(car).to.be.deep.equal(validMotorcycleResponse);
    });
  });

  describe('Read Motorcycle', () => {
    const motorcycleService = new MotorcycleService();
    before(async () => {
      Sinon.stub(mongoose.Model, 'find').resolves([validMotorcycleResponse]);
    })
    after(() => {
      Sinon.restore();
    })
    it('Read function test', async () => {
      const car = await motorcycleService.read();
      expect(car).to.be.deep.equal([validMotorcycleResponse]);
    });
  });

  describe('ReadOne Motorcycle', () => {
    const motorcycleService = new MotorcycleService();
    before(async () => {
      Sinon.stub(mongoose.Model, 'findOne').resolves(validMotorcycleResponse);
    })
    after(() => {
      Sinon.restore();
    })
    it('ReadOne function test', async () => {
      const car = await motorcycleService.readOne('123456789012345678901234');
      expect(car).to.be.deep.equal(validMotorcycleResponse);
    });
  });

  describe('update Motorcycle', () => {
    const motorcycleService = new MotorcycleService();
    before(async () => {
      Sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(validMotorcycleResponse);
    })
    after(() => {
      Sinon.restore();
    })
    it('update function test', async () => {
      const car = await motorcycleService.update('123456789012345678901234', validMotorcycle as Motorcycle);
      expect(car).to.be.deep.equal(validMotorcycleResponse);
    });
  });

  describe('delete Motorcycle', () => {
    const motorcycleService = new MotorcycleService();
    before(async () => {
      Sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(1);
    })
    after(() => {
      Sinon.restore();
    })
    it('delete function test', async () => {
      const car = await motorcycleService.delete('123456789012345678901234');
      expect(car).to.be.deep.equal(1);
    });
  });
  //   describe ('Create Car Service', () => {
  //     const motorcycleService = new MotorcycleService();
  //     const motorcycleModel = new MotorcycleModel();
  //     before(async () => {
  //       Sinon.stub(motorcycleModel, "create").resolves(validMotorcycleResponse as Motorcycle);
  //     })
  //     after(() => {
  //       Sinon.restore();
  //     })
  //     it ('Sucess Create function test', async () => {
  //       const car = await motorcycleService.create(validMotorcycle as Motorcycle);
  //       console.log(car);
  //       expect(car).to.be.deep.equal(validMotorcycleResponse);
  //     });
  //   });

  //   describe ('Read Car', () => {
  //     const motorcycleService = new MotorcycleService();
  //     const motorcycleModel = new MotorcycleModel();
  //     before(async () => {
  //       Sinon.stub(motorcycleModel, 'read').resolves([validMotorcycleResponse] as Motorcycle[]);
  //     })
  //     after(() => {
  //       Sinon.restore();
  //     })
  //     it ('Sucess Read function test', async () => {
  //       const car = await motorcycleService.read();
  //       expect(car).to.be.deep.equal([validMotorcycleResponse]);
  //     });
  //   });

  //   describe ('ReadOne Car', () => {
  //     const motorcycleService = new MotorcycleService();
  //     const motorcycleModel = new MotorcycleModel();
  //     before(async () => {
  //       Sinon.stub(motorcycleModel, 'readOne').resolves(validMotorcycleResponse as Motorcycle);
  //     })
  //     after(() => {
  //       Sinon.restore();
  //     })
  //     it ('Sucess ReadOne function test', async () => {
  //       const car = await motorcycleService.readOne('123456789012345678901234');
  //       expect(car).to.be.deep.equal(validMotorcycleResponse);
  //     });
  //   });

  //   describe ('Update Car', () => {
  //     const motorcycleService = new MotorcycleService();
  //     const motorcycleModel = new MotorcycleModel();
  //     before(async () => {
  //       Sinon.stub(motorcycleModel, 'update').resolves(validMotorcycleResponse as Motorcycle);
  //     })
  //     after(() => {
  //       Sinon.restore();
  //     })
  //     it ('Sucess Update function test', async () => {
  //       const car = await motorcycleService.update('123456789012345678901234', validMotorcycle as Motorcycle);
  //       expect(car).to.be.deep.equal(validMotorcycleResponse);
  //     });
  //   });

  //   describe ('Delete Car', () => {
  //     const motorcycleService = new MotorcycleService();
  //     const motorcycleModel = new MotorcycleModel();
  //     before(async () => {
  //       Sinon.stub(motorcycleModel, 'delete').resolves(validMotorcycleResponse as Motorcycle);
  //     })
  //     after(() => {
  //       Sinon.restore();
  //     })
  //     it ('Sucess Delete function test', async () => {
  //       const car = await motorcycleService.delete('123456789012345678901234');
  //       expect(car).to.be.deep.equal(validMotorcycleResponse);
  //     });
  //   });
});