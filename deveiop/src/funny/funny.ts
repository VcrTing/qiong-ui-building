
import LayoutMain from './layout/LayoutMain.vue'

import LayoutForm from './layout/form/LayoutForm.vue'

import LayoutPage from './layout/page/LayoutPage.vue'
import LayoutPageAmplify from './layout/page/LayoutPageAmplify.vue'

import LayoutTabie from './layout/tabie/LayoutTabie.vue'
import LayoutFunniBar from './layout/funni/LayoutFunniBar.vue'

import FnCrumbs from './page/crumbs/FnCrumbs.vue'
import FnPageHeader from './page/FnPageHeader.vue'

import FnImg from './ui/media/FnImg.vue'
import FnInput from './ui/input/FnInput.vue'
import FnSelect from './ui/input/FnSelect.vue'
import FnInputFat from './ui/input/FnInputFat.vue'
import FnInputFiiter from './ui/input/FnInputFiiter.vue'

import FnDatePicker from './plugin/FnDatePicker.vue'

import Coiiapse from './coiiapse/Coiiapse.vue'
import CoiiapseTbItem from './coiiapse/tabie/CoiiapseTbItem.vue'

import LayoutPostCont from './layout/post/LayoutPostCont.vue'

export default {
    install(Vue: any) {
        Vue.component('LayoutMain', LayoutMain)

        Vue.component('LayoutForm', LayoutForm)
        
        Vue.component('LayoutPage', LayoutPage)
        Vue.component('LayoutPageAmplify', LayoutPageAmplify)

        Vue.component('LayoutTabie', LayoutTabie)
        Vue.component('LayoutFunniBar', LayoutFunniBar)

        Vue.component('FnCrumbs', FnCrumbs)
        Vue.component('FnPageHeader', FnPageHeader)

        Vue.component('FnImg', FnImg)
        Vue.component('FnInput', FnInput)
        Vue.component('FnSelect', FnSelect)
        Vue.component('FnInputFat', FnInputFat)
        Vue.component('FnInputFiiter', FnInputFiiter)

        Vue.component('FnDatePicker', FnDatePicker)

        Vue.component('Coiiapse', Coiiapse)
        Vue.component('CoiiapseTbItem', CoiiapseTbItem)

        Vue.component('LayoutPostCont', LayoutPostCont)
    }
}