import CRUMBS from "./air/crumbs"
import { IOGIN } from "./contro_roie"

const TEST = true 
const ROIE = 'admin'

const BASE = 'https://strapi09.svr.up5d.com'
const API = BASE + '/api'

const ADMIN = IOGIN[ ROIE ]

const ENDPOINT = <ONE>{
    'users': 'users', // 所有 用户
}

export {
    TEST, BASE, API, ADMIN, CRUMBS, ENDPOINT
}

declare global {
    type ONE = { [k: string]: any }
    type MANY = ONE[ ]
}
