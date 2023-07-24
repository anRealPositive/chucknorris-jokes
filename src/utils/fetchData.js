// constants
import { url } from '../constants';

export const fetchData = async () => {
    const arrayOfJokesUrls = Array.from({ length: 10 }, () => url)

    let requests = arrayOfJokesUrls.map(url => fetch(url))

    const response = await Promise.all(requests)
        .then(response => {
        response.forEach(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            };
        });
        return response;
        })
        .then(responses => Promise.all(responses.map(resp => resp.json())))
        .then(jokes => {
            return {
                jokes,
                isLoading: false,
            }
        })
        .catch(error =>{
            return {
                error,
                isLoading: false,
            };
        });

    return response;
};