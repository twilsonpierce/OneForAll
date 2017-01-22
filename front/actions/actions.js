export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';

export const register = (data) => ({
  type: REGISTER,
  data: data
})

export const login = (data) => ({
  type: LOGIN
})
