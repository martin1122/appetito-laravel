import axios from 'axios';
import route from '../../../config/routes';


const nations = (params) => {
  return axios.get(
      route('nations.index'), {
          params: params
      }
  );
};

export {
  nations
};
