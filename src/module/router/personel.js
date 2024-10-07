import App from '../../App';
import SideBar from '../component/sidebar';
import InputScoreCSB01 from '../page/teacher/input-score/inputscore-csb01';


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
        {
          path: "/input-score/inputscore-csb01",
          element: (
            <SideBar 
              page={ <InputScoreCSB01/>}
              pageName={"ประเมินหัวข้อ"}
              pageSub={""}
              path={"/input-score/inputscore-csb01"}
              rolePage={"personel"}
            />
          ),
        },
    ]
};