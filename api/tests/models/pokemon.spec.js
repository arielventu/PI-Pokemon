const { Type, Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');
const modelPokemon = require('../../src/models/Pokemon.js');
const modelType = require('../../src/models/Type.js');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('Should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('Should work when its a valid name', () => {
        Pokemon.create({ name: 'PikachuPrueba' });
      });
    });
  });

  describe('Creation', () => {
    describe('Should create a pokemon', () => {
      beforeEach(() => Pokemon.sync({ force: true }));
      it('Should create a pokemon', () => {
        return Pokemon.create({ name: 'PikachuPrueba' })
          .then(pokemon => {
            expect(pokemon.name).to.equal('PikachuPrueba');
            // console.log('NOMBREEEEEE:', pokemon.name);
          });
      })
    });
  });

    it("Should throw an error if Hp is not a number", (done) => {
      Pokemon.create({ name: "pikachuTestModel", hp: "aaa" })
        .then(() => done(new Error("HP is not a number")))
        .catch(() => done());
    });
     
    it('Should throw an error if name is repeated', (done) => {
      Pokemon.create({ name: 'pikachuTestModel2' });
      Pokemon.create({ name: 'pikachuTestModel3' })
        .then(() => done())
        .catch(() => done(new Error('It requires a valid name')));
    });

});
