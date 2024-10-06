import React, { useState } from 'react';
import { Layout, Typography, Table, Paper } from 'antd';

const { Title, Text } = Typography;
const { Content } = Layout;

export default function ProjectStatus(){
    const initialData = [
        { id: 1, name: 'ตรวจสอบคุณสมบัติการยื่นสอบโครงงานพิเศษ 1', status: '', remark: '' },
        { id: 2, name: 'คำร้องขอเป็นอาจารย์ที่ปรึกษาโครงงาน', status: '', remark: '' },
        { id: 3, name: 'การสอบหัวข้อ', status: '', remark: '' },
        { id: 4, name: 'การสอบก้าวหน้า', status: '', remark: '' },
        { id: 5, name: 'ตรวจสอบคุณสมบัติการยื่นสอบโครงงานพิเศษ 2', status: '', remark: '' },
        { id: 6, name: 'การยื่นทดสอบโครงงาน', status: '', remark: '' },
        { id: 7, name: 'การสอบป้องกัน', status: '', remark: '' },
    ];

    const [checkAllStatus, setCheckAllStatus] = useState(initialData);

    const columns = [
        {
            title: 'ลำดับที่',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'รายการ',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'สถานะ',
            dataIndex: 'status',
            key: 'status',
            render: status => <Text>{status}</Text>,
        },
        {
            title: 'หมายเหตุ',
            dataIndex: 'remark',
            key: 'remark',
            render: remark => <Text>{remark}</Text>,
        },
    ];

    return (
        <Layout style={{ padding: '50px' }}>
            <Content>
                <Title level={2}>ตรวจสอบสถานะต่างๆ</Title>

                    <Table
                        dataSource={checkAllStatus}
                        columns={columns}
                        rowKey="id"
                        pagination={false}
                    />
            </Content>
        </Layout>
    );
};

 