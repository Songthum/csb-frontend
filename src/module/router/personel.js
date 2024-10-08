import App from '../../App';
import SideBar from '../component/sidebar';
import InputScoreCSB01 from '../page/teacher/input-score/inputscore-csb01';
import InputScoreCSB02 from '../page/teacher/input-score/inputscore-csb02';
import InputScoreCSB04 from '../page/teacher/input-score/inputscore-csb04';
import DataTable from '../page/teacher/request-lecture';
import ChairmanScoreCSB01 from '../page/teacher/chairman-score/chairman-score-csb01';

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
        {
          path: "/input-score/inputscore-csb02",
          element: (
            <SideBar 
              page={ <InputScoreCSB02/>}
              pageName={"ประเมินก้าวหน้า"}
              pageSub={""}
              path={"/input-score/inputscore-csb02"}
              rolePage={"personel"}
            />
          ),
        },
        {
          path: "/input-score/inputscore-csb04",
          element: (
            <SideBar 
              page={ <InputScoreCSB04/>}
              pageName={"ประเมินป้องกัน"}
              pageSub={""}
              path={"/input-score/inputscore-csb04"}
              rolePage={"personel"}
            />
          ),
        },
        {
          path: "/request-lecture",
          element: (
            <SideBar 
              page={ <DataTable/>}
              pageName={"คำร้องขอเป็นที่ปรึกษา"}
              pageSub={""}
              path={"/request-lecture"}
              rolePage={"personel"}
            />
          ),
        },
        {
          path: "/chairman-score/chairman-score-csb01",
          element: (
            <SideBar 
              page={ <ChairmanScoreCSB01/>}
              pageName={"อนุมัติโดยประธานกรรมการสอบ"}
              pageSub={""}
              path={"/chairman-score/chairman-score-csb01"}
              rolePage={"personel"}
            />
          ),
        }
    ]
};