import {app as settings} from '../settings/index';
import { REST, RESTError } from './rest'

export default class extends REST {
    static get settings () {
        return settings
    }

    static getRestaurant (id) {
        return this._get(`restaurants/${id}`, {}, {}).then(data=>{
            return data
        }).catch((error)=>{
            throw new RESTError(error, 'не удалось получить ресторан')
        })
    }
    static getRestaurantCategory (id) {
        return this._get(`restaurants/${id}/category`, {}, {}).then(data=>{
            return data
        }).catch((error)=>{
            throw new RESTError(error, 'не удалось получить категории блюд')
        })
    }
    static getDish (id) {
        return this._get(`restaurants/dish/${id}`, {}, {}).then(data=>{
            return data
        }).catch((error)=>{
            throw new RESTError(error, 'не удалось получить блюдо')
        })
    }
}
