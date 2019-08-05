import {replace, first, at} from 'lodash';
import {apiVersion} from "../config";


const routes = {
    recipes: {
        index: '/recipes',
        show: '/recipes/:id',
        store: '/recipes',
        update: '/recipes/:id',
        delete: '/recipes/:id',
    },

    nations: {
        index: '/nations',
        show: '/nations/:id'
    },

    ingredients: {
        index: '/ingredients',
        show: '/ingredients/:id'
    },

    units: {
        index: '/units',
        show: '/units/:id'
    }
};

function route(name, id = null, version = null){

    return version === null ?
        apiVersion + replace(first(at(routes, name)), ':id', id) :
        apiVersion + replace(first(at(routes, name)), ':id', id);
}

export default route;
