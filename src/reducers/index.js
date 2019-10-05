import { combineReducers } from 'redux'

import contactsReducer from './contacts'

const appReducer = combineReducers({
  contacts: contactsReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer