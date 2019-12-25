/* @flow */
import uuid from 'uuid/v4'
import { Observable, of, from } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

export const genId: Function = () => uuid().replace(/\-/g, '').substr(15).toUpperCase()

export const createStream: Observable = (value) => of(value)

export const get = (url: string) => ajax(url).pipe(
    mergeMap(result => (result.response ? of(result.response) : createStream({ error: true, cause: 'Not found.' }))),
    catchError(err => createStream({ error: true, cause: err }))
)

export const fmtDate = (value: string) => {
    let dt = new Date(value)
      , date = (dt.getDate() < 10) ? `0${dt.getDate()}` : dt.getDate()
      , monthVal = dt.getMonth() + 1
      , month = (monthVal < 10) ? `0${monthVal}` : monthVal
    return `${date}/${month}/${dt.getFullYear()}`
}
