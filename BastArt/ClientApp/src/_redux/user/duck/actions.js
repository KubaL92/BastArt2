import types from './types';


const add = item => ({ type: types.ADD_USER, item });  
const reset = () => ({ type: types.RESET_USER });  
const addRole = item => ({ type: types.ADD_ROLE, item });
const resetRole = () => ({ type: types.RESET_ROLE})

export default{
    add,
    reset,
    addRole,
    resetRole
}