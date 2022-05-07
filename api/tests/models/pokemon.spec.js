const { Type, Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');


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

  describe('Creation Pokemons & Types', () => {
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
    describe('Should create a type', () => {
      beforeEach(() => Type.sync({ force: true }));
      it('Should create a type', () => {
        return Type.create({ name: 'Electric' })
          .then(type => {
            expect(type.name).to.equal('Electric');
            // console.log('NOMBREEEEEE:', type.name);
          });
      });
    });
  });

  it('Should throw an error if name is repeated', (done) => {
    Pokemon.create({ name: 'pikachuTestModel2' });
    Pokemon.create({ name: 'pikachuTestModel3' })
    .then(() => done())
    .catch(() => done(new Error('It requires a valid name')));
  });
  
  describe('Stats', () => {
    it("Should throw an error if HP is not a number", (done) => {
      Pokemon.create({ name: "pikachuTestModel", hp: "aaa" })
        .then(() => done(new Error("HP is not a number")))
        .catch(() => done());
    });
  
    it("Should throw an error if Attack is not a number", (done) => {
      Pokemon.create({ name: "pikachuTestModel", attack: "aaa" })
        .then(() => done(new Error("Attack is not a number")))
        .catch(() => done());
    });

    it("Should throw an error if Defense is not a number", (done) => {
      Pokemon.create({ name: "pikachuTestModel", defense: "aaa" })
        .then(() => done(new Error("Defense is not a number")))
        .catch(() => done());
    });

    it("Should throw an error if Speed is not a number", (done) => {
      Pokemon.create({ name: "pikachuTestModel", speed: "aaa" })
        .then(() => done(new Error("Speed is not a number")))
        .catch(() => done());
    });

    it("Should throw an error if height is not a number", (done) => {
      Pokemon.create({ name: "pikachuTestModel", height: "aaa" })
        .then(() => done(new Error("Height is not a number")))
        .catch(() => done());
    });

    it("Should throw an error if weight is not a number", (done) => {
      Pokemon.create({ name: "pikachuTestModel", weight: "aaa" })
        .then(() => done(new Error("Weight is not a number")))
        .catch(() => done());
    });
  });
});
