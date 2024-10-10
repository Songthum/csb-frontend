import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  LaptopOutlined,
  UserOutlined,
  FormOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import '../theme/css/sidebar.css';
import kmutnb from '../public/image/kmutnb.png'

const { Header, Content, Sider } = Layout;

const menuItemsStudent = [
  {
    key: "/",
    icon: React.createElement(LaptopOutlined),
    label: "หน้าหลัก",
  },
  {
    key: "/special-project-1",
    icon: React.createElement(FormOutlined),
    label: "Special Project 1",
    children: [
      {
        key: "/special-project-1/provider",
        // label: "ตรวจสอบคุณสมบัตินักศึกษา" <br/> "Special Project 1", 
        label: `${"ตรวจสอบคุณสมบัตินักศึกษา"} <br/> ${"Special Project 1"}`,
      },
      {
        key: "/special-project-1/exam-csb01",
        label: "ยื่นสอบหัวข้อ",
      },
      {
        key: "/special-project-1/exam-csb02",
        label: "ยื่นสอบก้าวหน้า", 
      },
    ]
  },
  {
    key: "/special-project-2",
    icon: React.createElement(FormOutlined),
    label: "Special Project 2",
    children: [
      {
        key: "/special-project-2/provider",
        label: "ตรวจสอบคุณสมบัติ", 
      },
      {
        key: "/special-project-2/exam-csb03",
        label: "ยื่นสอบทดสอบระบบ",
      },
      {
        key: "/special-project-2/exam-csb04",
        label: "ยื่นสอบป้องกัน", 
      },
    ]
  },
  {
    key: "/project-status",
    icon: React.createElement(LaptopOutlined),
    label: "ตรวจสอบสถานะโครงงาน",
  }
];

const menuItemsTeacher = [
  {
    key: "/",
    icon: React.createElement(LaptopOutlined),
    label: "หน้าหลัก",

  },
  {
    key: "/approve",
    icon: React.createElement(FormOutlined),
    label: "อนุมัติการยื่นสอบ",
    children: [
      {
        key: "/approve/approve-csb03",
        label: "อนุมัติการยื่นทดสอบโครงงาน",
      },
      {
        key: "/approve/approve-csb04",
        label: "อนุมัติการสอบป้องกัน",
      },
    ]
  },
  {
    key: "/input-score",
    icon: React.createElement(FormOutlined),
    label: "ประเมินคะแนน",
    children: [
      {
        key: "/input-score/inputscore-csb01",
        label: "ประเมินหัวข้อ",
      },
      {
        key: "/input-score/inputscore-csb02",
        label: "ประเมินก้าวหน้า",
      },
      {
        key: "/input-score/inputscore-csb04",
        label: "ประเมินป้องกัน", 
      },
    ]
  },
  {
    key: "/chairman-score",
    icon: React.createElement(FormOutlined),
    label: "อนุมัติคะแนนสอบ",
    children: [
      {
        key: "/chairman-score/chairman-score-csb01",
        label: "อนุมัติคะแนนสอบหัวข้อโดยประธานกรรมการสอบ",
      },
      {
        key: "/chairman-score/chairman-score-csb02",
        label: "อนุมัติคะแนนสอบก้าวหน้าโดยประธานกรรมการสอบ",
      },
      {
        key: "/chairman-score/chairman-score-csb04",
        label: "อนุมัติคะแนนสอบป้องกันโดยประธานกรรมการสอบ", 
      },
    ]
  },
  {
    key: "/department-score",
    icon: React.createElement(FormOutlined),
    label: "อนุมัติคะแนนสอบ",
    children: [
      {
        key: "/department-score/department-score-csb01",
        label: "อนุมัติคะแนนสอบหัวข้อหน้าโดยหัวหน้าภาควิชา",
      },
      {
        key: "/department-score/department-score-csb02",
        label: "อนุมัติคะแนนสอบก้าวหน้าโดยหัวหน้าภาควิชา",
      },
      {
        key: "/department-score/department-score-csb04",
        label: "อนุมัติคะแนนสอบป้องกันโดยหัวหน้าภาควิชา", 
      },
    ]
  },
];

const SiderBar = ({ page, pageName, pageSub, path, rolePage }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const [selectedKey, setSelectedKey] = useState("/");
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedKey(path);
  }, [path]);

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    navigate(e.key);
  };

  return (
    <Layout>
      <Header className="header" style={{ background: colorBgContainer }}>
      <img src={kmutnb} alt="logo" style={{ maxWidth: '15%', height: 'auto' }} />
      <span style={{ fontSize: '20px'}}>
          Special Project Examination Management System for CSB Program
        </span>
        <span>
          
          {"สวัสดี เจ้าหน้าที่ สุดหล่อ"}
          </span>
      </Header>

      <Layout>
        <Sider className="sider" style={{ background: colorBgContainer }}>
        {/* <p style={{ marginLeft: '20px' }}>Teacher</p> */}
        <p style={{ marginLeft: '20px' }}>Student</p>
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            defaultOpenKeys={["sub1"]}
            items={rolePage === "students" ? menuItemsStudent : menuItemsTeacher}
            onClick={handleMenuClick}
          />
        </Sider>

        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            className="breadcrumb"
            items={[{ title: pageName }, { title: pageSub ?? "" }]}
          />

          <Content
            className="content"
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {page}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SiderBar;
