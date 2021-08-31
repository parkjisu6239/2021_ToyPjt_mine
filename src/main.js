// vue 3 import 방법 기본으로 생성됨
import { createApp } from 'vue'
import App from './App.vue'

// vue add router 하면 생성됨
import router from './router'

// font awesome은 설치해도 안생겨서 직접 입력해줘야함 설치는 여기 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faEnvelope, faBell)

// 적용
createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
