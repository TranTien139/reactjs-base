import { put, takeLatest, all } from 'redux-saga/effects';
import {GET_LOGIN, GET_LOGOUT, LOGIN_RECEIVED} from './actions/actionTypes'
import axios from 'axios'
import {loginUser} from '../api/index'
function* fetchLogin(action) {
 try {
     // xử lý call api tại đây
   // const response =  yield axios.post(loginUser, {mail: action.email, password:  action.password})
   // yield put({ type: LOGIN_RECEIVED,  data: response.data.data});

    const response =  {"email": "test@gmail.com", "name": "user", "accesstoken": "token"};
    yield put({ type: LOGIN_RECEIVED,  data: response});
 }catch (e) {
    console.log(e, 'e')
 }
}
function* fetchLogout(action) {
  // console.log('fetch logout')
}
function* loginWatcher() {
  yield takeLatest(GET_LOGIN, fetchLogin)
}
function* logoutWatcher() {
  yield takeLatest(GET_LOGOUT, fetchLogout)
}
export default function* rootSaga() {
  yield all([
    loginWatcher(),
    logoutWatcher()
  ]);
}
