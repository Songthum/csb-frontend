import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '../theme/css/sidebar.css';
import Student from './student';
import Teacher from './personal';
import Error from '../component/error';

let initRoute = [];
let role = '';
//  role = 'personnal'; 
 role = 'students'; 

if(role === 'students'){
  initRoute = Student();
}else if(role === 'personnal'){
  initRoute = Teacher();
}else{
  initRoute = [{
    path : '/*',
    element : <Error />
  }];
}
const router = createBrowserRouter(
  initRoute
);




export default router;
