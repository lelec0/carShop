import { expect } from 'chai';
import mongoose from 'mongoose';
import Sinon, { SinonStub } from 'sinon';
import CarModel from '../../../models/carModel';
import { validCar, validCarResponse } from '../../mocks/carMock'

describe ('Car Model', () => {

  describe ('Create Car', () => {
    const carModel = new CarModel();
    before(async () => {
      Sinon.stub(mongoose.Model, 'create').resolves(validCarResponse);
    })
    after(() => {
      Sinon.restore();
    })
    it ('Create function test', async () => {
      const car = await carModel.create(validCar);
      expect(car).to.be.deep.equal(validCarResponse);
    });
  });

  describe ('Read Car', () => {
    const carModel = new CarModel();
    before(async () => {
      Sinon.stub(mongoose.Model, 'find').resolves([validCarResponse]);
    })
    after(() => {
      Sinon.restore();
    })
    it ('Read function test', async () => {
      const car = await carModel.read();
      expect(car).to.be.deep.equal([validCarResponse]);
    });
  });

  describe ('ReadOne Car', () => {
    const carModel = new CarModel();
    before(async () => {
      Sinon.stub(mongoose.Model, 'findOne').resolves(validCarResponse);
    })
    after(() => {
      Sinon.restore();
    })
    it ('ReadOne function test', async () => {
      const car = await carModel.readOne('123456789012345678901234');
      expect(car).to.be.deep.equal(validCarResponse);
    });
  });

  describe ('update Car', () => {
    const carModel = new CarModel();
    before(async () => {
      Sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(validCarResponse);
    })
    after(() => {
      Sinon.restore();
    })
    it ('update function test', async () => {
      const car = await carModel.update('123456789012345678901234', validCar);
      expect(car).to.be.deep.equal(validCarResponse);
    });
  });

  describe ('delete Car', () => {
    const carModel = new CarModel();
    before(async () => {
      Sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(1);
    })
    after(() => {
      Sinon.restore();
    })
    it ('delete function test', async () => {
      const car = await carModel.delete('123456789012345678901234');
      expect(car).to.be.deep.equal(1);
    });
  });

});
