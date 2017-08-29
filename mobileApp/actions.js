import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import { getPeople, getDataServer, login } from './api'

import { setAuthorizationToken } from './utils/setAuthorizationToken';

import myCircleServer from './myCircleServer'

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure(data) {
  return {
    type: FETCHING_DATA_FAILURE,
    data
  }
}

export function fetchData() {
    return (dispatch) => {
        dispatch(getData())
        getPeople()
          .then((data) => {
            dispatch(getDataSuccess(data))
          })
          .catch((err) => console.log('err:', err))
    }
}

export function fetchDataServer() {
    return (dispatch) => {
       return myCircleServer.get('/api/users').then(res => {
          console.log(res.data);
       })
       .catch(err => {
          console.log(err.response.data);
       })
    }
}

export function loginAction(loginData) {
    return dispatch => {
        return myCircleServer.post('/api/authenticate',loginData).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwtDecode(token)));
        })
        .catch(err => {
           console.log(err.response.data);
        })
    }
//    return (dispatch) => {
//            dispatch(getData())
//            login(loginData)
//              .then((data) => {
//                console.log(data);
//                //dispatch(getDataSuccess(data.data))
//              })
//              .catch((err) => {dispatch(getDataSuccess(err.response.data))})
//        }
}
