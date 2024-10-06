import App from '../../App';
import SideBar from '../component/sidebar';


export default function Teacher(){

    return  [
        {
          path: "/",
          element: (
            <SideBar 
              page={ <App />}
              pageName={"หน้าหลักอาจารย์"}
              pageSub={""}
              path={"/"}
            />
          ),
        },
    ]
};