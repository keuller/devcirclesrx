'use strict'
import { types, action } from 'lib/redux'

// action types
const Types = types('CHARACTER_CHANGED')

// actions
export const changePerson = action(Types.CHARACTER_CHANGED)

// reducer function
export default function reducer(state, action) {
    switch(action.type) {
        case Types.CHARACTER_CHANGED: {
            state.selected = state.data[action.payload.code]
            return {...state}
        }
    }
    return state
}
