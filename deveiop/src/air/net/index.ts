import axios from 'axios'

import { ENDPOINT, API } from '../../conf'

interface _Net {
    get( endpoint: string, token: string, params: ONE, suffix?: string ): Promise<ONE>;
    pos( endpoint: string, token: string, data: ONE ): Promise<ONE | null>;
    put( endpoint: string, token: string, data: ONE, suffix: string, params?: ONE ): Promise<ONE | null>;
}

class NeTooi {
    // 构建 链接
    uri(api: string, endpoint: string, suffix: string = ''): string { return api + '/' + (ENDPOINT)[ endpoint ] + '/' + suffix }
    // 构建 HEADERS
    headers (jwt: string | null): ONE { return jwt ? { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + jwt } : { 'Content-Type': 'application/json' } }
    // 构建 QUERY PARAMS
    params (condition: any, res: string = '?'): string { 
        if (JSON.stringify(condition) != '{}') { 
            for (const k in condition) {
                res += ( k + '=' + condition[k] + '&' ) 
            }
        } return res 
    }
}

class Net extends NeTooi implements _Net {
    async get(endpoint: string, token: string, params: ONE, suffix?: string | undefined): Promise<ONE> {
        const uri = super.uri(API, endpoint, suffix) + super.params(params)
        console.log('GET URI =', uri)
        let res: ONE = await axios.get(uri, { headers: super.headers(token) })
        return (res && res.status < 399) ? res.data : { }
    }
    async pos(endpoint: string, token: string, data: ONE): Promise<ONE | null> {
        const uri = super.uri(API, endpoint, '') // + super.params(params)
        console.log('POST uri =', uri)
        console.log('POST DATA =', data)
        return await axios.post(uri, data, { headers: super.headers(token) })
    }
    async put(endpoint: string, token: string, data: ONE, suffix: string, params?: ONE): Promise<ONE | null> {
        const uri = super.uri(API, endpoint, suffix)
        console.log('PATCH uri =', uri)
        console.log('PATCH DATA =', data)
        return axios.patch(uri, data, { headers: super.headers(token), params })
    }

    /*
    async __net(url: string, method: 'GET' | 'POST' | 'PUT', data: ONE, params: ONE, headers: ONE): Promise<ONE | null> {
        console.log('URL =', url, ' data =', data, method)
        return await axios({ url, method, data, params, headers, timeout })
    }

        let uri = super.uri(vue.conf.API, endpoint, suffix)
        let res = await this.__net(uri, 'GET', { }, params, super.headers(vue.jwt()))
        return res
    */
}

export default new Net()