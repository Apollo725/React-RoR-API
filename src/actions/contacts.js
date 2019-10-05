import {
  TOGGLE_DRAWER,
  FETCH_CONTACTS,
  CONTACTS_RECEIVED,
} from '../constants'

export const toggleDrawer = payload => {
  return {
    type: TOGGLE_DRAWER,
    payload,
  }
}

export const fetchContacts = () => {
  return {
    type: FETCH_CONTACTS,
  }
}

export const receiveContacts = payload => {
  return {
    type: CONTACTS_RECEIVED,
    payload,
  }
}