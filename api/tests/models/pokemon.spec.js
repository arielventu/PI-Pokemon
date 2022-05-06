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
    
    describe('should create a pokemon with a type', () => {
      beforeEach(() => Pokemon.sync({ force: true }));
      beforeEach(() => Type.sync({ force: true }));
      beforeEach(() => Type.create({ name: 'Electric' }));
      beforeEach(() => Pokemon.create({ name: 'PikachuPrueba' }));



      it('should create a pokemon with a type', () => {
        return Pokemon.findOne({ where: { name: 'PikachuPrueba' } })
          .then(pokemon => {
            expect(pokemon.name).to.equal('PikachuPrueba');
            return pokemon.getTypes();
          }
        ).then(types => {
          expect(types[0].name).to.equal('Electric');
        }
        );
      }
      );
    }
    );



  });

});
