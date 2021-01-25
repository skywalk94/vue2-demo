import Vue from 'vue'
import Loading from './index.vue'

const constructor = Vue.extend(Loading)

const instance = new constructor()

instance.$mount()

document.body.appendChild(instance.$el)

export default instance