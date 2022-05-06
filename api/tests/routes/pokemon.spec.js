/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');
const modelPokemon = require('../../src/models/Pokemon.js');
const modelType = require('../../src/models/Type.js');

const agent = session(app);
const pokemon = {
  name: 'PikachuTest',
  id: 'a416d989-91d1-48c9-b583-267df138834c',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons/').expect(200)
    );
  });

  describe('GET /pokemons/:id', () => {
    it('should get 200', function () {
      agent.get(`/pokemons/${pokemon.id}`)
        .expect(200)
      // console.log(pokemon);
    });
    it('should get Name', function () {
      agent.get(`/pokemons/${pokemon.id}`)
        .expect(200)
        .expect(res => {
          expect(res.body.name).to.equal(pokemon.name);
        });
    });
  });

  describe('GET /pokemons?name=', () => {
    it('should get 200', function () {
      agent.get(`/pokemons?name=${pokemon.name}`)
        .expect(200)
    });
    it('should get Name', function () {
      agent.get(`/pokemons?name=${pokemon.name}`)
        .expect(200)
        .expect(res => {
          expect(res.body[0].name).to.equal(pokemon.name);
        });
    });
  });
  
  
  
  describe('POST /pokemons', () => {
    it('should get 200', function () {
      agent.post('/pokemons/')
        .send(pokemon)
        .expect(200)
    });
    it('should get Name', function () {
      agent.post('/pokemons/')
        .send(pokemon)
        .expect(200)
        .expect(res => {
          expect(res.body.name).to.equal(pokemon.name);
        });
    });
  });
  });