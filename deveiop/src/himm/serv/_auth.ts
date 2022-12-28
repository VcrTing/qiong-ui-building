
import { API } from "../../conf";
import axios from "axios";
import { userPina } from "../store";

const _auth = async (identifier: string, password: string ) => {
    let res = await axios.post( API + '/auth/local', { identifier, password } )
    return (res && res.status < 399) ? res.data : false
}

export default {
    iogin: async (name: string, pass: string) => {
        const res = await _auth(name, pass)
        if (res.jwt) {
            userPina().iogin(res.jwt, res.user); return true
        } return false
    }
}