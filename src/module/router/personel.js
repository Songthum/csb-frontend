import App from '../../App';
import SideBar from '../component/sidebar';
import InputScoreCSB01 from '../page/teacher/input-score/inputscore-csb01';
import InputScoreCSB02 from '../page/teacher/input-score/inputscore-csb02';
import InputScoreCSB04 from '../page/teacher/input-score/inputscore-csb04';
import DataTable from '../page/teacher/request-lecture';
import ChairmanScoreCSB01 from '../page/teacher/chairman-score/chairman-score-csb01';
import ChairmanScoreCSB02 from '../page/teacher/chairman-score/chairman-score-csb02';
import ChairmanScoreCSB04 from '../page/teacher/chairman-score/chairman-score-csb04';
import DepartmentHeadScoreCSB01 from '../page/teacher/department-score/department-score-csb01';
import DepartmentHeadScoreCSB02 from '../page/teacher/department-score/department-score-csb02';
import DepartmentHeadScoreCSB04 from '../page/teacher/department-score/department-score-csb04';
import ApproveCSB03 from '../page/teacher/approve/approve-csb03';
import ApproveCSB04 from '../page/teacher/approve/approve-csb04';

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
              pageName={"ประเมินคะแนน"}
              pageSub={"ประเมินหัวข้อ"}
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
              pageName={"ประเมินคะแนน"}
              pageSub={"ประเมินก้าวหน้า"}
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
              pageName={"ประเมินคะแนน"}
              pageSub={"ประเมินป้องกัน"}
              path={"/input-score/inputscore-csb04"}
              rolePage={"personel"}
            />
          ),
        },
        {
          path: "/chairman-score/chairman-score-csb01",
          element: (
            <SideBar 
              page={ <ChairmanScoreCSB01/>}
              pageName={"อนุมัติคะแนนสอบหัวข้อโดยประธานกรรมการสอบ"}
              pageSub={""}
              path={"/chairman-score/chairman-score-csb01"}
              rolePage={"personel"}
            />
          ),
        },
        {
          path: "/chairman-score/chairman-score-csb02",
          element: (
            <SideBar 
              page={ <ChairmanScoreCSB02/>}
              pageName={"อนุมัติคะแนนสอบก้าวหน้าโดยประธานกรรมการสอบ"}
              pageSub={""}
              path={"/chairman-score/chairman-score-csb02"}
              rolePage={"personel"}
            />
          ),
        },
        {
          path: "/chairman-score/chairman-score-csb04",
          element: (
            <SideBar 
              page={ <ChairmanScoreCSB04/>}
              pageName={"อนุมัติคะแนนสอบป้องกันโดยประธานกรรมการสอบ"}
              pageSub={""}
              path={"/chairman-score/chairman-score-csb04"}
              rolePage={"personel"}
            />
          ),
        },
        {
          path: "/department-score/department-score-csb01",
          element: (
            <SideBar 
              page={ <DepartmentHeadScoreCSB01/>}
              pageName={"อนุมัติคะแนนสอบหัวข้อโดยหัวหน้าภาควิชา"}
              pageSub={""}
              path={"/department-score/department-score-csb01"}
              rolePage={"personel"}
            />
          ),
        },
        {
          path: "/department-score/department-score-csb02",
          element: (
            <SideBar 
              page={ <DepartmentHeadScoreCSB02/>}
              pageName={"อนุมัติคะแนนสอบก้าวหน้าโดยหัวหน้าภาควิชา"}
              pageSub={""}
              path={"/department-score/department-score-csb02"}
              rolePage={"personel"}
            />
          ),
        },
        {
          path: "/department-score/department-score-csb04",
          element: (
            <SideBar 
              page={ <DepartmentHeadScoreCSB04/>}
              pageName={"อนุมัติคะแนนสอบก้าวหน้าโดยหัวหน้าภาควิชา"}
              pageSub={""}
              path={"/department-score/department-score-csb04"}
              rolePage={"personel"}
            />
          ),
        },
        {
          path: "/approve/approve-csb03",
          element: (
            <SideBar 
              page={ <ApproveCSB03/>}
              pageName={"อนุมัติการยื่นสอบ"}
              pageSub={"อนุมัติการยื่นทดสอบโครงงาน"}
              path={"/approve/approve-csb03"}
              rolePage={"personel"}
            />
          ),
        },
        {
          path: "/approve/approve-csb04",
          element: (
            <SideBar 
              page={ <ApproveCSB04/>}
              pageName={"อนุมัติการยื่นสอบ"}
              pageSub={"อนุมัติการยื่นสอบป้องกันโครงงาน"}
              path={"/approve/approve-csb04"}
              rolePage={"personel"}
            />
          ),
        },
    ]
};