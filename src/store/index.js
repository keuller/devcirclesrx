'use strict'

import { createStore, combineReducers } from 'lib/redux'
import character from 'store/character'
import user from 'store/users'
import billing from 'store/billing'

const initState = {
    character: {
        selected: {},
        data: {
            '4536': { name: 'Sheldon Cooper', picture: 'static/sheldon.jpg' },
            '7821': { name: 'Leonard Hofstader', picture: 'static/leonard.jpg' },
            '9036': { name: 'Howard Wolowitz', picture: 'static/howard.jpg' },
            '1430': { name: 'Rajesh Koothrapali', picture: 'static/rajesh.jpg' }
        }
    },
    billing: {
        total: 0,
        data: {}
    },
    user: {
        error: false,
        repos: [],
        data: {}
    }
}

const store$ = createStore(combineReducers({ character, billing, user }), initState)

export default store$
