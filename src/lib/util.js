/* @flow */
import uuid from 'uuid/v4'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { catchError, mergeMap } from 'rxjs/operators'

export const genId: Function = () => uuid().replace(/\-/g, '').substr(15).toUpperCase()

export const createStream: Observable = (value) => of(value)

export const get = (url: string) => fromPromise(fetch(url)).pipe(
    mergeMap(result => (result.ok ? fromPromise(result.json()) : createStream({ error: true, cause: 'Not found.' }))),
    catchError(err => createStream({ error: true, cause: err }))
)

export const fmtDate = (value: string) => {
    let dt = new Date(value)
      , date = (dt.getDate() < 10) ? `0${dt.getDate()}` : dt.getDate()
      , monthVal = dt.getMonth() + 1
      , month = (monthVal < 10) ? `0${monthVal}` : monthVal
    return `${date}/${month}/${dt.getFullYear()}`
}
