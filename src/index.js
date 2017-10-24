import { h, render } from 'preact'

import 'sass/build.sass'
import 'index.css'
import store from 'store'
import App from 'components/app'

document.addEventListener('DOMContentLoaded', (ev) => {
    let root = null
    store.subscribe(state => {
        root = render(<App {...state} />, document.querySelector('#app'), root)
    })
})
