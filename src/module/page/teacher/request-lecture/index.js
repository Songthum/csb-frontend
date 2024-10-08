// src/DataTable.js
import React, { useState } from 'react';
import { Table, Button } from 'antd';

const DataTable = () => {
    // สร้าง state เพื่อจัดเก็บการตอบสนองของแต่ละแถว
    const [responses, setResponses] = useState({});

    // ข้อมูลตัวอย่าง
    const dataSource = [
        {
            key: '1',
            projectName: 'AI-Powered Chatbot',
            studentName: 'ทรงธรรม คงสมปราชญ์',
            projectDetails: 'โครงการพัฒนา Chatbot ด้วย AI',
        },
        {
            key: '2',
            projectName: 'Smart Home Automation',
            studentName: 'ณัชริกา กันทะสอน',
            projectDetails: 'ระบบควบคุมบ้านอัจฉริยะ',
        },
        {
            key: '3',
            projectName: 'Web Development Project',
            studentName: 'นฤมล จันทรา',
            projectDetails: 'การพัฒนาเว็บไซต์ที่ตอบสนองต่อผู้ใช้',
        },
    ];

    // ฟังก์ชันจัดการการคลิกปุ่มรับหรือไม่รับ
    const handleResponse = (key, response) => {
        setResponses({
            ...responses,
            [key]: response, // อัปเดตสถานะปุ่มที่เลือก
        });
    };

    // คอลัมน์ของตาราง
    const columns = [
        {
            title: 'ลำดับที่',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'ชื่อโครงงาน',
            dataIndex: 'projectName',
            key: 'projectName',
        },
        {
            title: 'ชื่อนักศึกษา',
            dataIndex: 'studentName',
            key: 'studentName',
        },
        {
            title: 'รายละเอียดโครงงาน',
            dataIndex: 'projectDetails',
            key: 'projectDetails',
        },
        {
            title: 'การตอบสนอง',
            key: 'response',
            render: (text, record) => {
                const response = responses[record.key];
                return response ? (
                    <span>{response === 'accepted' ? 'รับ' : 'ไม่รับ'}</span> // แสดงข้อความที่เลือก
                ) : (
                    // ปุ่มรับและไม่รับจะแสดงหากยังไม่มีการตอบสนอง
                    <span>
                        <Button
                            type="primary"
                            style={{ marginRight: 8 }}
                            onClick={() => handleResponse(record.key, 'accepted')}
                        >
                            รับ
                        </Button>
                        <Button
                            type="default"
                            onClick={() => handleResponse(record.key, 'rejected')}
                        >
                            ไม่รับ
                        </Button>
                    </span>
                );
            },
        }
    ];

    return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};

export default DataTable;
