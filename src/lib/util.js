import uuid from 'uuid/v4'
import { Observable } from 'rxjs/Observable'

export const genId = () => uuid().replace(/\-/g, '').substr(15).toUpperCase()

export const createStream = (value) => Observable.of(value)

export const get = (url) => Observable.fromPromise(fetch(url))
    .flatMap(result => (result.ok ? Observable.fromPromise(result.json()) : createStream({ error: true, cause: 'Not found.' })))
    .catch(err => createStream({ error: true, cause: err }))

export const fmtDate = (value) => {
    let dt = new Date(value)
      , date = (dt.getDate() < 10) ? `0${dt.getDate()}` : dt.getDate()
      , monthVal = dt.getMonth() + 1
      , month = (monthVal < 10) ? `0${monthVal}` : monthVal
    return `${date}/${month}/${dt.getFullYear()}`
}
