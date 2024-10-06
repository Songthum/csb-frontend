import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SideBar from '../component/sidebar';
import ProviderSp1 from '../page/special-project-1/provider';
import ExamCSB01 from '../page/special-project-1/exam-csb01';
import ExamCSB02 from '../page/special-project-1/exam-csb02';
import ProviderSp2 from '../page/special-project-2/provider';
import ExamCSB03 from '../page/special-project-2/exam-csb03';
import ExamCSB04 from '../page/special-project-2/exam-csb04';
import ProjectStatus from '../page/project-status';
import App from '../../App';

import '../theme/css/sidebar.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SideBar 
        page={ <App />}
        pageName={"หน้าหลัก"}
        pageSub={""}
        path={"/"}
      />
    ),
  },
  {
    path: "/special-project-1/provider",
    element: (
      <SideBar 
        page={ <ProviderSp1 />}
        pageName={"ตรวจสอบคุณสมบัตินักศึกษา"}
        pageSub={""}
        path={"/special-project-1/provider"}
      />
    ),
  },
  {
    path: "/special-project-1/exam-csb01",
    element: (
      <SideBar 
        page={ <ExamCSB01 />}
        pageName={"ยื่นสอบหัวข้อ"}
        pageSub={""}
        path={"/special-project-1/exam-csb01"}
      />
    ),
  },
  {
    path: "/special-project-1/exam-csb02",
    element: (
      <SideBar 
        page={ <ExamCSB02 />}
        pageName={"ยื่นสอบก้าวหน้า"}
        pageSub={""}
        path={"/special-project-1/exam-csb02"}
      />
    ),
  },
  {
    path: "/special-project-2/provider",
    element: (
      <SideBar 
        page={ <ProviderSp2 />}
        pageName={"ตรวจสอบคุณสมบัตินักศึกษา"}
        pageSub={""}
        path={"/special-project-2/provider"}
      />
    ),
  },
  {
    path: "/special-project-2/exam-csb03",
    element: (
      <SideBar 
        page={ <ExamCSB03 />}
        pageName={"ยื่นสอบหัวข้อ"}
        pageSub={""}
        path={"/special-project-2/exam-csb03"}
      />
    ),
  },
  {
    path: "/special-project-2/exam-csb04",
    element: (
      <SideBar 
        page={ <ExamCSB04 />}
        pageName={"ยื่นสอบป้องกัน"}
        pageSub={""}
        path={"/special-project-2/exam-csb04"}
      />
    ),
  },
  {
    path: "/project-status",
    element: (
      <SideBar 
        page={ <ProjectStatus />}
        pageName={"ตรวจสอบสถานะโครงงาน"}
        pageSub={""}
        path={"/project-status"}
      />
    ),
  }
]);

export default router;
