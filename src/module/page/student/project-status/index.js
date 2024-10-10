// import React, { useState, useEffect } from 'react';
// import { Layout, Typography, Table, Text } from 'antd';
// import api from '../../../utils/form/api';

// const { Title } = Typography;
// const { Content } = Layout;

// export default function ProjectStatus() {
//     const initialData = [
//         { id: 1, name: 'ตรวจสอบคุณสมบัติการยื่นสอบโครงงานพิเศษ 1', status: '', remark: '', projectStatus: 0 },
//         { id: 2, name: 'คำร้องขอเป็นอาจารย์ที่ปรึกษาโครงงาน', status: '', remark: '', projectStatus: 0 },
//         { id: 3, name: 'การสอบหัวข้อ', status: '', remark: '', projectStatus: 0 },
//         { id: 4, name: 'การสอบก้าวหน้า', status: '', remark: '', projectStatus: 0 },
//         { id: 5, name: 'ตรวจสอบคุณสมบัติการยื่นสอบโครงงานพิเศษ 2', status: '', remark: '', projectStatus: 0 },
//         { id: 6, name: 'การยื่นทดสอบโครงงาน', status: '', remark: '', projectStatus: 0 },
//         { id: 7, name: 'การสอบป้องกัน', status: '', remark: '', projectStatus: 0 },
//     ];

//     const [checkAllStatus, setCheckAllStatus] = useState(initialData);

//     useEffect(() => {
//         api.getAllProject()
//             .then((res) => {
//                 console.log("Response from API:", res.data.body);
//                 if (res.data.body.length > 0) {
//                     const projectData = res.data.body[0];
//                     console.log("Project Data:", projectData);
//                     const updatedStatus = initialData.map(item => ({
//                         ...item,
//                         status: projectData[item.id - 1]?.status || '',
//                         remark: projectData[item.id - 1]?.remark || '',
//                         projectStatus: projectData[item.id - 1]?.projectStatus || 0, // Add projectStatus here
//                     }));
//                     setCheckAllStatus(updatedStatus);
//                 }
//             })
//             .catch(err => {
//                 console.error("Error fetching project data:", err);
//             });
//     }, []); 

//     const columns = [
//         {
//             title: 'ลำดับที่',
//             dataIndex: 'id',
//             key: 'id',
//         },
//         {
//             title: 'รายการ',
//             dataIndex: 'name',
//             key: 'name',
//         },
//         {
//             title: 'สถานะ',
//             dataIndex: 'status',
//             key: 'status',
//             render: status => <Text>{status}</Text>,
//         },
//         {
//             title: 'หมายเหตุ',
//             dataIndex: 'remark',
//             key: 'remark',
//             render: remark => <Text>{remark}</Text>,
//         },
//         {
//             title: 'สถานะโครงการ', // New column title
//             dataIndex: 'projectStatus',
//             key: 'projectStatus',
//             render: projectStatus => <Text>{projectStatus}</Text>, // Render the projectStatus
//         },
//     ];

//     return (
//         <Content>
//             <Title level={2} style={{ textAlign: 'center' }}>ตรวจสอบสถานะต่างๆ</Title>
//             <Table
//                 dataSource={checkAllStatus}
//                 columns={columns}
//                 rowKey="id"
//                 pagination={false}
//             />
//         </Content>
//     );
// }
