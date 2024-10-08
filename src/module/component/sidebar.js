import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  LaptopOutlined,
  UserOutlined,
  FormOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import '../theme/css/sidebar.css';

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
  // {
  //   key: "/add-member-spacial-project",
  //   icon: React.createElement(UserOutlined),
  //   label: "เพิ่มรายชื่อนักศึกษา",
  // },
  // {
  //   key: "/student-no-lecture",
  //   icon: React.createElement(UserOutlined),
  //   label: "รายชื่อนักศึกษาที่ไม่มีอาจารย์ที่ปรึกษา",
  // }
];

const menuItemsTeacher = [
  {
    key: "/",
    icon: React.createElement(LaptopOutlined),
    label: "หน้าหลัก",

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
        key: "input-score/inputscore-csb04",
        label: "ประเมินป้องกัน", 
      },
    ]
  },
  {
    key: "/request-lecture",
    icon: React.createElement(LaptopOutlined),
    label: "คำร้องขอเป็นที่ปรึกษา",
  },
  {
    key: "/chairman-score/chairman-score-csb01",
    icon: React.createElement(LaptopOutlined),
    label: "อนุมัติโดยประธานกรรมการสอบ",
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
        <img
          src="https://hrd.kmutnb.ac.th/wp-content/uploads/2024/01/logo-kmutnb-final.png"
          alt="logo"
          className="logo"
        />
        <span>
          Special Project Examination Management System for CSB Program
        </span>
        <span>
          
          {"สวัสดี เจ้าหน้าที่ สุดหล่อ"}
          </span>
      </Header>

      <Layout>
        <Sider className="sider" style={{ background: colorBgContainer }}>
          <p>เจ้าหน้าที่</p>
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            defaultOpenKeys={["sub1"]}
            items={rolePage === "student" ? menuItemsStudent : menuItemsTeacher}
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
