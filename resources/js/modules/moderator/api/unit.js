import axios from 'axios';
import route from '../../../config/routes';


const units = (params, headers) => {
    return axios.get(
        route('units.index'), {
            params: params,
            headers: headers
        }
    );
};

export {
    units
};
