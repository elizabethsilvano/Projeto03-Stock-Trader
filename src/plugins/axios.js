import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://corretora-19660-default-rtdb.firebaseio.com/'
        })
    }
})
