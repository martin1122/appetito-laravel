import axios from 'axios';
import route from '../../../config/routes';


const ingredients = (params, headers) => {
    return axios.get(
        route('ingredients.index'), {
            params: params,
            headers: headers
        }
    );
};

export {
    ingredients
};
