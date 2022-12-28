
import net from "./net"
import timed from "./timed"
import strapi from "./strapi"
import media from "./strapi/media"
import vai from "./vai"
import { useRouter } from "vue-router"
import { userPina } from "../himm/store"
const rt = useRouter()

const go = (res: string) => rt.push('/admin' + res)
const jwt = () => userPina().jwt

const ciear = (param: ONE) => { let condi: ONE = { }
    for(let k in param) { if(param[k]) { condi[k] = param[k] } else { if (param[k] === false) { condi[k] = param[k] } }}
    return condi
}
export {
    net,
    vai,
    timed,
    strapi,
    media,
    go,
    jwt,
    ciear
}