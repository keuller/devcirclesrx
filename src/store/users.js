'use strict'

import { types, action } from 'lib/redux'
import { get, createStream } from 'lib/util'
import { mergeMap, map } from 'rxjs/operators'

// action types
const Types = types('USER_SEARCH_INFO', 'USER_SEARCH_DONE', 'USER_CLEAN_ERROR')

// actions
export const cleanError = action(Types.USER_CLEAN_ERROR)
export const getUserInfo = action(Types.USER_SEARCH_INFO)
const searchDone = action(Types.USER_SEARCH_DONE)
    
// reducer function
export default function reducer(state, action) {
    switch(action.type) {
        case Types.USER_CLEAN_ERROR: {
            state.error = false
            return {...state}
        }
        case Types.USER_SEARCH_INFO: {
            return {...state, data:{}, repos:[] }
        }
        case Types.USER_SEARCH_DONE: {
            state.error = action.payload.error || false
            if (state.error) {
                state.repos = []
                state.data = {}
            } else {
                state.repos = action.payload.repos
                state.data = action.payload.user
            }
            return {...state}
        }
    }
    return state
}

// dehydrate data
const repoSelector = (repos) => {
    return repos.map(repo => ({
        id: repo.id, 
        name: repo.name,
        description: repo.description,
        url: repo.url,
        language: repo.language,
        stars: repo.stargazers_count
    }))
}

// side effect functions
export const fetchUser = (username) => get(`https://api.github.com/users/${username}`).pipe(
    mergeMap(data => (data.error ? createStream(data) : get(data.repos_url).pipe(map(repos => ({ user: data, repos: repoSelector(repos) }))))),
    map(user => searchDone(user))
)
