import { expect } from 'chai';
import mongoose from 'mongoose';
import Sinon, { SinonStub } from 'sinon';
import MotorcycleModel from '../../../models/motorcycleModel';
import { validMotorcycle, validMotorcycleResponse } from '../../mocks/motorcyclesMock'
import { Motorcycle } from '../../../interfaces/MotorcycleInterface';

describe ('Motorcycle Model', () => {

  describe ('Create Motorcycle', () => {
    const motorcycleModel = new MotorcycleModel();
    before(async () => {
      Sinon.stub(mongoose.Model, 'create').resolves(validMotorcycleResponse);
    })
    after(() => {
      Sinon.restore();
    })
    it ('Create function test', async () => {
      const car = await motorcycleModel.create(validMotorcycle as Motorcycle);
      expect(car).to.be.deep.equal(validMotorcycleResponse);
    });
  });

  describe ('Read Motorcycle', () => {
    const motorcycleModel = new MotorcycleModel();
    before(async () => {
      Sinon.stub(mongoose.Model, 'find').resolves([validMotorcycleResponse]);
    })
    after(() => {
      Sinon.restore();
    })
    it ('Read function test', async () => {
      const car = await motorcycleModel.read();
      expect(car).to.be.deep.equal([validMotorcycleResponse]);
    });
  });

  describe ('ReadOne Motorcycle', () => {
    const motorcycleModel = new MotorcycleModel();
    before(async () => {
      Sinon.stub(mongoose.Model, 'findOne').resolves(validMotorcycleResponse);
    })
    after(() => {
      Sinon.restore();
    })
    it ('ReadOne function test', async () => {
      const car = await motorcycleModel.readOne('123456789012345678901234');
      expect(car).to.be.deep.equal(validMotorcycleResponse);
    });
  });

  describe ('update Motorcycle', () => {
    const motorcycleModel = new MotorcycleModel();
    before(async () => {
      Sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(validMotorcycleResponse);
    })
    after(() => {
      Sinon.restore();
    })
    it ('update function test', async () => {
      const car = await motorcycleModel.update('123456789012345678901234', validMotorcycle as Motorcycle);
      expect(car).to.be.deep.equal(validMotorcycleResponse);
    });
  });

  describe ('delete Motorcycle', () => {
    const motorcycleModel = new MotorcycleModel();
    before(async () => {
      Sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(1);
    })
    after(() => {
      Sinon.restore();
    })
    it ('delete function test', async () => {
      const car = await motorcycleModel.delete('123456789012345678901234');
      expect(car).to.be.deep.equal(1);
    });
  });

});
