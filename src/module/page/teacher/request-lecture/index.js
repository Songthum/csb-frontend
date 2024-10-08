import React, { useState } from 'react';
import { Table, Button, notification } from 'antd';

export default function DataTable() {
    const [responses, setResponses] = useState({});

    const dataSource = [
        {
            key: '1',
            projectName: 'AI-Powered Chatbot',
            student1: 'ทรงธรรม คงสมปราชญ์',
            student2: 'สุภาวดี คงสมปราชญ์',
            projectDetails: 'โครงการพัฒนา Chatbot ด้วย AI',
        },
        {
            key: '2',
            projectName: 'Smart Home Automation',
            student1: 'ณัชริกา กันทะสอน',
            student2: 'วรัญญา กันทะสอน',
            projectDetails: 'ระบบควบคุมบ้านอัจฉริยะ',
        },
        {
            key: '3',
            projectName: 'Web Development Project Web Development ProjectWeb Development ProjectWeb Development Project',
            student1: 'นฤมล จันทรา',
            student2: 'พีรดา จันทรา',
            projectDetails: 'การพัฒนาเว็บไซต์ที่ตอบสนองต่อผู้ใช้',
        },
        {
            key: '4',
            projectName: 'AI-Powered Chatbot',
            student1: 'ทรงธรรม คงสมปราชญ์',
            student2: 'สุภาวดี คงสมปราชญ์',
            projectDetails: 'โครงการพัฒนา Chatbot ด้วย AI',
        },
        {
            key: '5',
            projectName: 'Smart Home Automation',
            student1: 'ณัชริกา กันทะสอน',
            student2: 'วรัญญา กันทะสอน',
            projectDetails: 'ระบบควบคุมบ้านอัจฉริยะ',
        },
        {
            key: '6',
            projectName: 'Web Development Project',
            student1: 'นฤมล จันทรา',
            student2: 'พีรดา จันทรา',
            projectDetails: 'การพัฒนาเว็บไซต์ที่ตอบสนองต่อผู้ใช้การพัฒนาเว็บไซต์ที่ตอบสนองต่อผู้ใช้การพัฒนาเว็บไซต์ที่ตอบสนองต่อผู้ใช้',
        },
    ];

    const handleResponse = (key, response) => {
        setResponses({
            ...responses,
            [key]: response,
        });

        notification.open({
            message: response === 'accepted' ? 'รับเป็นที่ปรึกษาโครงงาน' : 'ไม่รับเป็นที่ปรึกษาโครงงาน',
            description: `คุณได้ ${response === 'accepted' ? 'รับ' : 'ไม่รับ'} โครงงานนี้เป็นที่ปรึกษา`,
            style: {
                backgroundColor: response === 'accepted' ? '#e6ffed' : '#fff1f0',
                borderRadius: '15px',
            },
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    const columns = [
        {
            title: 'ลำดับที่',
            dataIndex: 'key',
            key: 'key',
            width: 80,
        },
        {
            title: 'ชื่อโครงงาน',
            dataIndex: 'projectName',
            key: 'projectName',
            width: 225,
        },
        {
            title: 'ชื่อนักศึกษา',
            key: 'students',
            render: (text, record) => (
                <div>
                    <span>{record.student1}</span><br />
                    <span>{record.student2}</span>
                </div>
            ),
            width: 180,
        },
        {
            title: 'รายละเอียดโครงงาน',
            dataIndex: 'projectDetails',
            key: 'projectDetails',
            width: 350,
        },
        {
            title: 'การตอบสนอง',
            key: 'response',
            render: (text, record) => {
                const response = responses[record.key];
                return response ? (
                    <span>{response === 'accepted' ? 'รับ' : 'ไม่รับ'}</span>
                ) : (
                    <span>
                        <Button type="primary" style={{ marginRight: 8 }} onClick={() => handleResponse(record.key, 'accepted')}>
                            รับ
                        </Button>
                        <Button type="default" onClick={() => handleResponse(record.key, 'rejected')}>
                            ไม่รับ
                        </Button>
                    </span>
                );
            },
            width: 120,
        },
    ];


    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{ x: 'max-content' }}
        />
    );
}
