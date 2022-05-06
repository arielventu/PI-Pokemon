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
        Pokemon.create({ name: 'Pikachu' });
      });
    });
  });

  describe('Creation', () => {
    describe('should create a pokemon', () => {
      beforeEach(() => Pokemon.sync({ force: true }));
      it('should create a pokemon', () => {
        return Pokemon.create({ name: 'Pikachu' })
          .then(pokemon => {
            expect(pokemon.name).to.equal('Pikachu');
            // console.log('NOMBREEEEEE:', pokemon.name);
          });
      })
    });

    describe('should get a pokemon', () => {
      beforeEach(() => Pokemon.sync({ force: true }));
      beforeEach(() => Pokemon.create({ name: 'Pikachu' }));
      it('should get a pokemon', () => {
        return Pokemon.findOne({ where: { name: 'Pikachu' } })
          .then(pokemon => {
            expect(pokemon.name).to.equal('Pikachu');
          }
          );
      })
    });
  });

  describe('Relations', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    beforeEach(() => Type.sync({ force: true }));
    beforeEach(() => Pokemon.create({ name: 'Pikachu', id: 'a416d989-91d1-48c9-b583-267df1388343' }));
    beforeEach(() => Type.create({ name: 'Electric' }));
    beforeEach(() => Pokemon.create({ name: 'Pikachu', type: 'Electric' }));
    
    describe('should get a pokemon with its type', () => {
      it('should get a pokemon with its type', () => {
        return Pokemon.findOne({ where: { name: 'Pikachu' } })
          .then(pokemon => {
            expect(pokemon.name).to.equal('Pikachu');
            expect(pokemon.type).to.equal('Electric');
          });
      });
    });
  });

});
