import { h, render } from 'preact'

import 'sass/build.sass'
import 'index.css'
import App from 'components/app'

import store from 'store'

document.addEventListener('DOMContentLoaded', (ev) => {
    let root = null
    store.subscribe(state => {
        root = render(<App {...state} />, document.querySelector('#app'), root)
    })
})
