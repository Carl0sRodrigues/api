import Api from './api'

export const ServiceListUser = () => {
  return Api.get('/auth/users').then(res => res);
}