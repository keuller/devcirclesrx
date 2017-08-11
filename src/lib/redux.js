'use strict'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

let appState$ = {}

const ensureStream = (action) => (action instanceof Observable) ? action : Observable.of(action)
const isStream = (obj) => (obj instanceof Observable)

export const types = (...args) => args.reduce((prev, next) => { prev[next] = next; return prev }, {})
export const action = (type) => (data) => ({ type, payload: data })

export function dispatch(action) {
    if (!isStream(action.payload)) {
        return appState$.next(action)
    }
    appState$.next({ type: action.type })
    setTimeout(() => appState$.next(action.payload), 1)
}

export function createStore(rootReducer, initialState = {}) {
    appState$ = new BehaviorSubject(initialState)
    return appState$.flatMap(ensureStream).scan(rootReducer)
}

export function combineReducers(reducers) {
    const appReducer = (state, action) => {
        let newState = {}, reducerFn = null
        Object.keys(reducers).forEach(reducerName => {
            reducerFn = reducers[reducerName]
            newState[reducerName] = reducerFn(state[reducerName], action)
        })
        return newState
    }

    return appReducer
}
