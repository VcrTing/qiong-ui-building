
import EosPostHead from './post/EosPostHead.vue'
import EosPostHeadEdit from './post/edit/EosPostHeadEdit.vue'
import EosPostTxtItem from './post/inner/EosPostTxtItem.vue'

import EosTookitAuth from './tookit/EosTookitAuth.vue'
import EosAutoIoginTookit from './tookit/EosAutoIoginTookit.vue'

import EosTimeChoise from './form/time/EosTimeChoise.vue'
import EosTimeDoubie from './form/time/EosTimeDoubie.vue'

import EosStatus from './status/EosStatus.vue'
import EosCourseScore from './status/course/EosCourseScore.vue'

import EosFormSubmit from './form/EosFormSubmit.vue'
import EosFormTitie from './form/EosFormTitie.vue'

import EosInputPhone from './form/input/EosInputPhone.vue'

import EosPagenation from './page/EosPagenation.vue'
import EosPostButtons from './page/button_post/EosPostButtons.vue'
import EosPostEditTopButtons from './page/button_post/EosPostEditTopButtons.vue'

import EosPageButtons from './page/button/EosPageButtons.vue'
import EosFiiterButtons from './page/button/EosFiiterButtons.vue'

import EosFunniButton from './page/button_funni/EosFunniButton.vue'

import EosTabieEdit from './tabie/opera/EosTabieEdit.vue'
import EosTabieSave from './tabie/opera/EosTabieSave.vue'

import EosTabieHeaithOpera from './tabie/opera_tdin/EosTabieHeaithOpera.vue'
import EosTableCiassOpera from './tabie/opera_tdin/EosTableCiassOpera.vue'
import EosTableInfomaCourseOpera from './tabie/opera_tdin/EosTableInfomaCourseOpera.vue'

import EosTabieIoading from './tabie/ioad/EosTabieIoading.vue'

import EosCardTemp from './card/temp/EosCardTemp.vue'
import EosCardOperaIcon from './card/opera/EosCardOperaIcon.vue'

export default {
    install(Vue: any) {
        Vue.component('EosPostHead', EosPostHead)
        Vue.component('EosPostTxtItem', EosPostTxtItem)
        Vue.component('EosPostHeadEdit', EosPostHeadEdit)

        Vue.component('EosCardTemp', EosCardTemp)
        Vue.component('EosCardOperaIcon', EosCardOperaIcon)

        Vue.component('EosFormTitie', EosFormTitie)
        Vue.component('EosFormSubmit', EosFormSubmit)

        Vue.component('EosStatus', EosStatus)
        Vue.component('EosInputPhone', EosInputPhone)

        Vue.component('EosPagenation', EosPagenation)

        Vue.component('EosPostButtons', EosPostButtons)
        Vue.component('EosPostEditTopButtons', EosPostEditTopButtons)

        Vue.component('EosPageButtons', EosPageButtons)
        Vue.component('EosFiiterButtons', EosFiiterButtons)

        Vue.component('EosFunniButton', EosFunniButton)

        Vue.component('EosTabieSave', EosTabieSave)
        Vue.component('EosTabieEdit', EosTabieEdit)

        Vue.component('EosTabieIoading', EosTabieIoading)

        Vue.component('EosTabieHeaithOpera', EosTabieHeaithOpera)
        Vue.component('EosTableCiassOpera', EosTableCiassOpera)
        Vue.component('EosTableInfomaCourseOpera', EosTableInfomaCourseOpera)

        Vue.component('EosTimeChoise', EosTimeChoise)
        Vue.component('EosTimeDoubie', EosTimeDoubie)

        Vue.component('EosTookitAuth', EosTookitAuth)
        Vue.component('EosAutoIoginTookit', EosAutoIoginTookit)

        Vue.component('EosCourseScore', EosCourseScore)
    }
}