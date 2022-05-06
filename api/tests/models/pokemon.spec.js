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
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'PikachuPrueba' });
      });
    });
  });

  describe('Creation', () => {
    describe('should create a pokemon', () => {
      beforeEach(() => Pokemon.sync({ force: true }));
      it('should create a pokemon', () => {
        return Pokemon.create({ name: 'PikachuPrueba' })
          .then(pokemon => {
            expect(pokemon.name).to.equal('PikachuPrueba');
            // console.log('NOMBREEEEEE:', pokemon.name);
          });
      })
    });

    describe('should get a pokemon', () => {
      beforeEach(() => Pokemon.sync({ force: true }));
      beforeEach(() => Pokemon.create({ name: 'PikachuPrueba' }));
      it('should get a pokemon', () => {
        return Pokemon.findOne({ where: { name: 'PikachuPrueba' } })
          .then(pokemon => {
            expect(pokemon.name).to.equal('PikachuPrueba');
            console.log('NOMBREEEEEE:', pokemon.name + ' ' + pokemon.type);
          });
      })
    });
  });

  describe("Stats", () => {
    it("Should throw an error if Hp is not a number", (done) => {
      Pokemon.create({ name: "pikachu1", hp: "aaa" })
        .then(() => done())
        .catch(() => done(new Error("Hp is not a number")));
    });


  });

});
