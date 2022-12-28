

export default {

    // IMG
    img_of_many: (imgs: MANY, named: string): string => {
        if (imgs && imgs.length > 0) {
            const res: ONE = imgs[ 0 ]
            return named ? res[ named ] : res.fileurl
        } return ''
    },
    img: (img: ONE, named: string): string => {
        img = img ? img : { }
        return named ? img[ named ] : img.fileurl
    }
}