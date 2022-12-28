
const _data = function(res: any, def = [ ]) { return res ? res.data : def }

const _insert = function(res: any ) { return { id: res.id, ...res.attributes } }

const data = function(res: any, _is_data: boolean = true): [] {
    res = _is_data ? _data(res) : res
    return res ? ( (res.constructor == Array) ? res.map( e => _insert(e) ) : (res ? _insert(res) : null) ) : [ ]
}

const kiii_of_k = function(src: [ ], k: string[ ]): [] {
    src.map((e: any) => {
        k.length > 0 ? k.map( _k => {
            e[ _k ] = data(e[ _k ])
        }) : undefined; return e
    }); return src
}

export default {
    data,
    kiii_of_k,
    ser_aii: (src: { [k:string]: any }, ks: string[ ]): {} => {
        const res = data(src)
        return {
            data: res ? kiii_of_k(res, ks) : [ ],
            page: src.meta ? src.meta.pagination: { }
        }
    }
}