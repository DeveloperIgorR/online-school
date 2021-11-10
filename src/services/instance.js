import * as axios from 'axios'

export const SERVER_URL = 'https://online-school-server.herokuapp.com'

export const instance = axios.create({      
    baseURL: SERVER_URL + '/api/',    
})
instance.interceptors.request.use(function(config){
    config.headers.Authorization  = 'Bearer ' + localStorage.getItem('token')
    return config    
})