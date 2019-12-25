/* @flow */
'use strict'
import { Observable, BehaviorSubject, pipe, of } from 'rxjs'
import { scan, mergeMap } from 'rxjs/operators'

type ActionType = { type: string, payload: ?Object }
type ReducerType = (state: Object, action: ActionType) => Object

let appState$ = {}

const ensureStream: Function = (action) => (action instanceof Observable) ? action : of(action)
const isStream: Function = (obj) => (obj instanceof Observable)

export const types = (...args: string[]) => args.reduce((prev, next) => { prev[next] = next; return prev }, {})
export const action = (type: string) => (data: Object) => ({ type, payload: data })

export function dispatch(action: ActionType) {
    if (!isStream(action.payload)) {
        return appState$.next(action)
    }
    appState$.next({ type: action.type })
    setTimeout(() => appState$.next(action.payload), 1)
}

export function createStore(rootReducer: ReducerType, initialState: Object = {}): Observable {
    appState$ = new BehaviorSubject(initialState)
    return appState$.pipe(mergeMap(ensureStream), scan(rootReducer))
}

export function combineReducers(reducers: Object): ReducerType {
    const appReducer: ReducerType = (state, action) => {
        let newState = {}, reducerFn = null
        Object.keys(reducers).forEach(reducerName => {
            reducerFn = reducers[reducerName]
            newState[reducerName] = reducerFn(state[reducerName], action)
        })
        return newState
    }

    return appReducer
}
