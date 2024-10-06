import React from 'react';
import { useEffect, useState } from 'react';
import { navigate } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import api from './module/utils/form/api';
import staff from './module/public/image/staff.png';
import './App.css';

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


  return (
    <>
     <div>
      <h1>สวัสดี เจ้าหน้าที่ CSB ทุกท่าน</h1>
      {/* <img src={staff} className="App-logo" alt="logo" /> */}
      <img src={staff} className="" alt="logo" />
     </div>
    </>
  );
}

export default App;
