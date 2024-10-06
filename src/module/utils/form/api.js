import axios from 'axios';
import AuthServices from './AuthServices';

const BASE = "http://localhost:8788";
const FRONTEND = "http://localhost:3000";


const service = axios.create({ baseURL: BASE });

service.interceptors.request.use(function(config){
  if(typeof window !== 'undefined'){
    return config;
  }
  const gobalToken = AuthServices.getToken();
  const userId = AuthServices.getUserId();
  const usertoken = AuthServices.getUserToken();

  if(gobalToken && config.headers.acess_token){
    config.headers['global-token'] = gobalToken;
  }
  if(usertoken && config.headers.acess_token){
    config.headers.Authorization = 'bearer' + usertoken;
  }
  if(userId){
    config.headers['user-id'] = userId;
  }

  if(AuthServices.isNearExpired() && !/auth/g.test(config.url)){
    AuthServices.getNewToken();
  }

  return config;

})


export default{
  service,
  apiUrl: BASE,
  frontendUrl: FRONTEND,
  
  login: (data) => service.post('/auth/login', data),
  getNewToken: () => service.post('/auth/refresh-token'),



  getHomePage: (params) => service.get('/', {params}),



  // RoomManagement
  getRoomPage: (params) => service.get('/room-management', {params}),
  createRoomManagement: (data) => service.post('/create-room-management', data),



  // getAllProject
  getAllProject: (params) => service.get('/project-students', {params}),



  // getStudent
  getStudent: (data) => service.post('/students', {data}),



  // getLeacturer
  getLeacturer: (params) => service.get('/lecturers', {params}),


  
  // getAnouncement
  createAnouncement: (data) => service.post('/create-anouncement', data),


  // getSumaryRoom
  getSumaryRoom: (params) => service.get('/sumary-room', {params}),

}

