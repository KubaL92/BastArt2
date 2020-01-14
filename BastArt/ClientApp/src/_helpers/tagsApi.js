import { get } from './api';

const url = 'https://localhost:44334/api/tags';

export const getAll = async () => {
    return await get(`${url}`);
}

export const getById = async (id) => {
    return await get(`${url}/${id}`);
}