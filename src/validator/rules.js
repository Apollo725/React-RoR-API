import { isEmpty, isNull } from 'lodash'

export const join = rules => (value, data) =>
  rules
    .map(rule => rule(value, data))
    .filter(error => !!error)[0]

export function email(value) {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  if(!isEmpty(value) && !regex.test(value)) {
    return 'Invalid email address'
  }
}

export function required(value) {
  const type = typeof value
  const restrictedTrimType = ['number', 'boolean']
  if (isEmpty(value)) {
    return 'This field is required'
  }
  if (restrictedTrimType.indexOf(type) === -1 && value && value.trim().length === 0) {
    return 'This field is required'
  }
}