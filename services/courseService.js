import axios from '../utils/axios';
<<<<<<< HEAD
import { BASE_URL } from '@env';
const URL = `${BASE_URL}courses`;
=======
import { BASE_URL } from '@env'
const URL = BASE_URL + 'courses';
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9


export const getPopularCourse = async () => {
    try {
        const response = await axios.get(`${URL}/popular`);
        return response;
    } catch (error) {
        console.error('Error fetching popular course:', error);
        throw new Error(error.response?.message || 'Something went wrong');
    }
};
export const getInspiresCourse = async (categoryId, limit) => {
    try {
        const response = await axios.get(`${URL}/inspires`, { params: { categoryId, limit } });
        return response;
    } catch (error) {
        console.error('Error fetching inspires course:', error);
        throw new Error(error.response?.message || 'Something went wrong');
    }
};
<<<<<<< HEAD
export const getCourseByName = async (nameCourse) => {
    try {
        const response = await axios.get(`${URL}/filterCourse`, { params: { nameCourse } });
        return response;
    } catch (error) {
        console.error('Error fetching inspires course:', error);
        throw new Error(error.response?.message || 'Something went wrong');
    }
};
=======
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
