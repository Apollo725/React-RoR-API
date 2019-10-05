import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchContacts() {
  const json = yield fetch('https://cors-anywhere.herokuapp.com/https://ruby-test-11.herokuapp.com/api/v1/contacts')
        .then(response => response.json(), );    
  yield put({ type: "CONTACTS_RECEIVED", payload: json.data, });
}
function* actionWatcher() {
     yield takeLatest('FETCH_CONTACTS', fetchContacts)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
