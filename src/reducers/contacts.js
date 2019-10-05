/* eslint-disable default-case */
import {
  TOGGLE_DRAWER,
  FETCH_CONTACTS,
  CONTACTS_RECEIVED
} from '../constants'

import initialState from './initialState'

export default function toggleDrawer(state = initialState.contacts, { type, payload = {} }) {
  switch (type) {
    case TOGGLE_DRAWER: {
      const drawerState = state.openDrawer;
      const { name, age, address, tags } = payload;
      const newState = {
        ...state,
        openDrawer: !drawerState,
        activeContact: {
          name,
          age,
          address,
          tags,
        }
      };

      return newState
    }
    case FETCH_CONTACTS: {
      const newState = {
        ...state,
        loading_contacts: true,
      }
      return newState
    }

    case CONTACTS_RECEIVED: {
      const newState = {
        ...state,
        loading_contacts: false,
        contacts: payload,
      }
      return newState
    }
    default:
      return state;
  }
}