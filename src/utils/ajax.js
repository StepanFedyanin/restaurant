import _defaults from 'lodash/defaults'
import axios from 'axios'
import { ajax as settings } from 'src/settings'

export default class {
    static get (params) {
        return this.request(_defaults({ method: 'get' }, params))
    }
    
    static post (params) {
        return this.request(_defaults({ method: 'post' }, params))
    }
    
    static put (params) {
        return this.request(_defaults({ method: 'put' }, params))
    }
    
    static patch (params) {
        return this.request(_defaults({ method: 'patch' }, params))
    }
    
    static delete (params) {
        return this.request(_defaults({ method: 'delete' }, params))
    }
    
    static request (params) {
        if (params.extraData) {
            params.data = this.__append_extra_data(params.data, params.extraData)
            delete params.extraData
        }
        if (params.extraParams) {
            params.params = this.__append_extra_params(params.params, params.extraParams)
            delete params.extraParams
        }
        if (params.cancel) {
            // eslint-disable-next-line import/no-named-as-default-member
            params.cancelToken = new axios.CancelToken(params.cancel)
            delete params.cancel
        }
        return axios.request(_defaults({}, params, this.settings))
    }
    
    static cancelToken () {
        // eslint-disable-next-line import/no-named-as-default-member
        return axios.CancelToken.source()
    }
    
    static getUri (params) {
        return axios.getUri(params)
    }
    
    static __append_extra_data (data, extra) {
        data = data || {}
        
        if (data instanceof FormData) {
            for (const k in extra) {
                data.append(k, extra[k])
            }
        } else if (data instanceof URLSearchParams) {
            for (const k in extra) {
                data.append(k, extra[k])
            }
        } else if (typeof data === 'string') {
            for (const k in extra) {
                if (data !== '') data += '&'
                data += encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
            }
        } else if (typeof data === 'object') {
            for (const k in extra) {
                data[k] = extra[k]
            }
        } else {
            throw new Error('Can\'t append extra data to this type of data')
        }
        return data
    }
    
    static __append_extra_params (data, extra) {
        data = data || {}
        
        if (data instanceof URLSearchParams) {
            for (const k in extra) {
                data.append(k, extra[k])
            }
        } else if (typeof data === 'object') {
            for (const k in extra) {
                data[k] = extra[k]
            }
        } else {
            throw new Error('Can\'t append extra params to this type of params')
        }
        return data
    }
    
    static get settings () {
        return settings
    }
}
