// import axios from 'axios';


// export const axiosInstance = axios.create({
//     baseURL: import.meta.env.VITE_BASE_URL, 
//     headers: {
//         'Content-Type': 'application/json',
// },
// });


import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Crée une instance Axios avec une configuration de base
const axiosInstance: AxiosInstance = axios.create({
    baseURL:  import.meta.env.VITE_BASE_URL as string,
    headers: {
        'Content-Type': 'application/json',
    },
        timeout: 10000,
});

// Fonction générique pour effectuer des requêtes HTTP
const fetchData = async (
    url: string, 
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body: any = null, 
    headers: any = null
    ) => {
    try {
        // Validation des paramètres
        if (!url) {
            throw new Error('URL is required');
        }

        if (!['GET', 'POST', 'PUT', 'DELETE'].includes(method)) {
            throw new Error(`Invalid HTTP method: ${method}`);
        }
        const config: AxiosRequestConfig = {
            method,
            url,
            data: body,
            headers: {
                ...headers,
            },
        };

        const response = await axiosInstance.request(config);

        return {
            status: response.status,
            data: response.data,
        };
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
           console.error('Axios error:', error.message);
           return {
            status: error.response?.status || 500,
            data: error.response?.data || 'An error occurred',
        };
    } else {
        console.error('Unexpected error:', error);
        return {
            status: 500,
            data: 'An unexpected error occurred',
        };
       }
    }

};

export { fetchData };
