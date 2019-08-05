import axios from 'axios';
import route from '../../../config/routes';


const storeRecipe = (data, headers) => {
    return axios.post(
        route('recipes.store'), {
            data: data,
            headers: headers
        }
    );
};

export {
    storeRecipe
};
