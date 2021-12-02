import {takeLatest, put, call, fork} from 'redux-saga/effects'
import {setSearchResults, setMovieInfo} from './redux/store'

const apiKey = "1bfe46bc"


function requestMoviesAPI(action: any) {
    const options = {
        method: 'GET',
        headers: {},
    }
    const apiUrl = `https://omdbapi.com/?apikey=${apiKey}&s=${action.payload.searchPhrase}`
    return fetch(apiUrl, options)
        .then((response) => response.json())
        .then((data) => {
            if (data["Response"] === "True") {
                return data["Search"]
            } else {
                return []
            }
        })
}

function requestMovieInfoAPI(action: any) {
    const options = {
        method: 'GET',
        headers: {},
    }
    const apiUrl = `https://omdbapi.com/?apikey=${apiKey}&i=${action.payload.imdbID}`
    return fetch(apiUrl, options)
        .then((response) => response.json())
        .then((data) => {
            if (data["Response"] === "True") {
                return data
            } else {
                return []
            }
        })
}

function* requestMoviesList(action: { type: string, payload: any }) {
    const movies: Array<any> = yield call(requestMoviesAPI, action)
    yield put(setSearchResults(movies))
}

function* requestMovieInfo(action: { type: string, payload: any }) {
    // @ts-ignore
    const movieInfo = yield call(requestMovieInfoAPI, action)
    yield put(setMovieInfo(movieInfo))
}

function* fetchMovies() {
    yield takeLatest("MOVIES_FETCH_REQUESTED", requestMoviesList)
}

function* fetchInfo() {
    yield takeLatest("MOVIE_INFO_REQUESTED", requestMovieInfo)
}

export default function* root() {
    yield fork(fetchMovies)
    yield fork(fetchInfo)
}