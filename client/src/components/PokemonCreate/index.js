import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getTypes, createPokemon, getPokemons } from '../../actions'
import {DEFAULT_IMG} from '../../utils'
import style from './PokemonCreate.module.css'

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
    if (clicSelect === 2) errors.type = 'Only up to two types can be selected'
    return errors;
};

let clicSelect = 0;

export default function PokemonCreate() {
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

    const handleChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name);
        setPokemon({
            ...pokemon,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...pokemon,
            [e.target.name]: e.target.value
        }));
    };

    const handleSelect = (e) => {
        setPokemon({
            ...pokemon,
                type: [...e.target.options].filter(o => o.selected).map(o => o.value)
        })
        clicSelect++
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (pokemon.image === '') {
            pokemon.image = DEFAULT_IMG; 
        }
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
        dispatch(getPokemons());
        // console.log(pokemon);
    };
    
    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    // console.log(clicSelect);
    return (
        <div className={`${style.divContainer}`}>
            <h1 className={`${style.title}`}>Create Pokemon</h1>
            <div className={`${style.divForm}`}>
                <form className={`${style.form}`} onSubmit={handleSubmit}>
                    <div className={`${style.divName}`}>
                        <label className={`${style.labelName}`} name="name">Name</label>
                        <input
                            className={`${style.inputName}`}
                            type="text"
                            name="name"
                            value={pokemon.name}
                            onChange={handleChange}
                            placeholder={errors.name}
                        />
                        {/* {errors.name && <p>{errors.name}</p>} */}
                    </div>
                    <div className={`${style.divHp}`}>
                        <label className={`${style.labelHp}`} name="hp">HP</label>
                        <input
                            className={`${style.inputHp}`}
                            type="text"
                            name="hp"
                            value={pokemon.hp}
                            onChange={handleChange}
                        />
                        {errors.hp && <p className={`${style.pError}`}>{errors.hp}</p>}
                    </div>
                    <div className={`${style.divAttack}`}>
                        <label className={`${style.labelAttack}`} name="attack">Attack</label>
                        <input
                            className={`${style.inputAttack}`}
                            type="text"
                            name="attack"
                            value={pokemon.attack}
                            onChange={handleChange}
                        />
                        {errors.attack && <p className={`${style.pError}`}>{errors.attack}</p>}
                    </div>
                    <div className={`${style.divDefense}`}>
                        <label className={`${style.labelDefense}`} name="defense">Defense</label>
                        <input
                            className={`${style.inputDefense}`}
                            type="text"
                            name="defense"
                            value={pokemon.defense}
                            onChange={handleChange}
                        />
                        {errors.defense && <p className={`${style.pError}`}>{errors.defense}</p>}
                    </div>
                    <div className={`${style.divSpeed}`}>
                        <label className={`${style.labelSpeed}`} name="speed">Speed</label>
                        <input
                            className={`${style.inputSpeed}`}
                            type="text"
                            name="speed"
                            value={pokemon.speed}
                            onChange={handleChange}
                        />
                        {errors.speed && <p className={`${style.pError}`}>{errors.speed}</p>}
                    </div>
                    <div className={`${style.divHeight}`}>
                        <label className={`${style.labelHeight}`} name="height">Height</label>
                        <input
                            className={`${style.inputHeight}`}
                            type="text"
                            name="height"
                            value={pokemon.height}
                            onChange={handleChange}
                        />
                        {errors.height && <p className={`${style.pError}`}>{errors.height}</p>}
                    </div>
                    <div className={`${style.divWeight}`}>
                        <label className={`${style.labelWeight}`} name="weight">Weight</label>
                        <input
                            className={`${style.inputWeight}`}
                            type="text"
                            name="weight"
                            value={pokemon.weight}
                            onChange={handleChange}
                        />
                        {errors.weight && <p className={`${style.pError}`}>{errors.weight}</p>}
                    </div>
                    <div className={`${style.divImage}`}>
                        <label className={`${style.labelImage}`} name="image">Image</label>
                        <input
                            className={`${style.inputImage}`}
                            type="text"
                            name="image"
                            value={pokemon.image}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={`${style.divType}`}>
                        <label className={`${style.labelType}`} name="Type">Type</label>
                        <select
                            className={`${style.selectType}`}
                            name="type"
                            
                            multiple
                            value={pokemon.type}
                            onChange={handleSelect}
                        >
                            {types.map((type) => (
                                <option key={type.id} value={type.name}>{type.name}</option>
                            ))}
                        </select>
                        {errors.type && <p className={`${style.pError}`}>{errors.type}</p>}
                    </div>
                    <div className={`${style.divButton}`}>
                    {Object.keys(errors).length > 0 ? // Si existen errores el botón se deshabilita
                        <button className={`${style.buttonDisabled}`} type="submit" disabled>Create Pokemon</button>
                        : <button className={`${style.buttonSubmit}`} type="submit">Create Pokemon</button>
                        }
                    </div>
                </form>
            </div>
            <Link to="/home">
                <button className={`${style.button}`}>Back to Home</button>
            </Link>
      </div>
  )
}
