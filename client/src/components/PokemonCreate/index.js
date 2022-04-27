import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getTypes } from '../../actions'

const validate = ({ name, hp, attack, defense, speed, height, weight }) => {
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

export const index = () => {
  return (
    <div>index</div>
  )
}
