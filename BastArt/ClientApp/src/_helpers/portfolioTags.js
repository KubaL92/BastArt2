import {get} from './api';

const url = 'https://localhost:44334/api/portfolioTags';

export const getByUserId = async(id) => {
    return await get(`${url}/portfolio/${id}`);
}