export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const DONATE = 'DONATE';
export const SUBMIT_DONATION = 'SUBMIT_DONATION';

export const register = (data) => ({
  type: REGISTER,
  data: data
})

export const login = (data) => ({
  type: LOGIN,
  data: data
})

export const donate = (data) => ({
  type: DONATE,
  data: data
})

export const submit_donation = (data) => ({
  type: SUBMIT_DONATION,
  data: data
})