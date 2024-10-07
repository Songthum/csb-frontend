import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '../theme/css/sidebar.css';
import Student from './student';
import Teacher from './personel';
import Error from '../component/error';

let initRoute = [];
let role = '';
 role = 'personel'; 
//  role = 'students'; 

if(role === 'students'){
  initRoute = Student();
}else if(role === 'personel'){
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
