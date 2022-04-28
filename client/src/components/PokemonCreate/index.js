import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getTypes, createPokemon, getPokemons } from '../../actions'
import { get } from '../../../../api/src/routes/pokemons';

const validate = ({ name, hp, attack, defense, speed, height, weight, type }) => {
    const errors = {};
    const regEx = /^\d+$/;

    if (!name) errors.name = 'Name is required';
    if (!hp || hp.search(regEx) === -1) errors.hp = 'HP is required and must be a number';
    if (!attack || attack.search(regEx) === -1) errors.attack = 'Attack is required and must be a number';
    if (!defense || defense.search(regEx) === -1) errors.defense = 'defense is required and must be a number';
    if (!speed || speed.search(regEx) === -1) errors.speed = 'Speed is required and must be a number';
    if (!height || height.search(regEx) === -1) errors.height = 'Height is required and must be a number';
    if (!weight || weight.search(regEx) === -1) errors.weight = 'Weight is required and must be a number';
    return errors;
};

export default function PokemonCreate () {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const [pokemon, setPokemon] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        image: '',
        type: []
    });
    const [errors, setErrors] = useState({});
    // const [isSubmitting, setIsSubmitting] = useState(false);
    const allPokemons = useSelector((state) => state.pokemons);

    const handleChange = (e) => {
        setPokemon({
            ...pokemon,
            [e.target.name]: e.target.value
        });
    };

    const handleSelect = (e) => {
        setPokemon({
            ...pokemon,
            type: [...e.target.options].filter(o => o.selected).map(o => o.value)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(pokemon);
        setErrors(errors);
        // setIsSubmitting(true);
        if (Object.keys(errors).length === 0) {
            dispatch(createPokemon(pokemon));
            setPokemon({
                name: '',
                hp: '',
                attack: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
                image: '',
                type: []
            });
        }
    };

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);
    
    // dispatch(getPokemons());

  return (
      <div>
          <h1>Create Pokemon</h1>
          <form onSubmit={handleSubmit}>
              <div>
                  <label name="name">Name</label>
                  <input
                      type="text"
                      name="name"
                      value={pokemon.name}
                      onChange={handleChange}
                  />
                  {errors.name && <p>{errors.name}</p>}   
              </div>
              <div>
                  <label name="hp">HP</label>
                  <input
                      type="text" 
                      name="hp"
                      value={pokemon.hp}
                      onChange={handleChange}
                  />  
                  {errors.hp && <p>{errors.hp}</p>}   
              </div>
              <div>
                  <label name="attack">Attack</label>
                  <input
                      type="text"
                      name="attack"
                      value={pokemon.attack}
                      onChange={handleChange}
                  />  
                  {errors.attack && <p>{errors.attack}</p>}   
              </div>
              <div>
                  <label name="defense">Defense</label>    
                  <input
                      type="text"
                      name="defense"
                      value={pokemon.defense}
                      onChange={handleChange}
                  />
                  {errors.defense && <p>{errors.defense}</p>} 
              </div>
              <div>
                  <label name="speed">Speed</label>
                  <input
                      type="text"
                      name="speed"
                      value={pokemon.speed}
                      onChange={handleChange}
                  />
                  {errors.speed && <p>{errors.speed}</p>} 
              </div>  
              <div>
                  <label name="height">Height</label>  
                  <input
                      type="text"
                      name="height"
                      value={pokemon.height}
                      onChange={handleChange}
                  />
                  {errors.height && <p>{errors.height}</p>}   
              </div>
              <div>
                  <label name="weight">Weight</label>  
                  <input
                      type="text"
                      name="weight"
                      value={pokemon.weight}
                      onChange={handleChange}
                  />
                  {errors.weight && <p>{errors.weight}</p>}   
              </div>
              <div>
                  <label name="Type">Type</label>
                  <select
                      name="type"
                      multiple
                      value={pokemon.type}
                      onChange={handleSelect}
                  >
                      {types.map(type => (
                          <option key={type.id} value={type.name}>{type.name}</option>
                      ))}
                  </select>
                    {errors.type && <p>{errors.type}</p>}
              </div>
              <div>
                  <label name="image">Image</label>
                  <input
                      type="text"
                      name="image"
                      value={pokemon.image}
                      onChange={handleChange}
                  />
                </div>
              <button type="submit">Submit</button>
          </form>
          <Link to="/home">Back to Home</Link>
      </div>
  )
}
