import {get} from './api';

const url = 'https://localhost:44334/api/portfolios';

export const getByUserId = async(id) => {
    return await get(`${url}/user/${id}`);
}