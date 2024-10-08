import React from 'react';
import { useEffect, useState } from 'react';
import { navigate } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme ,Calendar } from 'antd';
import api from './module/utils/form/api';
import staff from './module/public/image/staff.png';
import './App.css';
import student from './module/public/image/student.gif';
import teacher from './module/public/image/teacher.png';


function App() {
  const [data , setData] = useState([]);
  const fetchData = () => {
    api.getHomePage()
    .then((res) => {
      console.log(res);
      setData(res.data.body);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    fetchData();
  },[]);

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
      }}>
        <h1>Hello, CSB students!</h1>
        <h1>Hello, Teacher!</h1>
        <img src={student} alt="student logo" style={{ width: '80%' }} />
        {/* <img src={teacher} alt="teacher logo" style={{ width: '80%'}} /> */}
      </div>
      <Calendar onPanelChange={onPanelChange} />;
    </>
  );
  
}

export default App;