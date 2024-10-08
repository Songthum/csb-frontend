import React, { useState, useEffect } from 'react';
import { Select, Input, Button, Table, Form, Row, Col, message } from 'antd';

const { Option } = Select;

function DepartmentHeadScoreCSB04() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [projectDetails, setProjectDetails] = useState(null);
    const [data, setData] = useState([{ id: 1, name: 'คะแนนรวม', fullscores: '90', score: '' }]);

    useEffect(() => {
        const mockProjects = [
            { Er_Pname: 'Project A', P_S1: 'Student 1', P_S2: 'Student 2', P_T: 'Advisor A', Er_CSB02: '85', Er_CSB02_status: 'รอการตรวจ' },
            { Er_Pname: 'Project B', P_S1: 'Student 3', P_S2: 'Student 4', P_T: 'Advisor B', Er_CSB02: '88', Er_CSB02_status: 'รอการตรวจ' }
        ];

        const filteredProjects = mockProjects.filter(project => project.Er_CSB02 > 0 && project.Er_CSB02_status !== 'ผ่าน');
        setProjects(filteredProjects);
    }, []);

    useEffect(() => {
        if (selectedProject) {
            const selectedProjectData = projects.find(project => project.Er_Pname === selectedProject.Er_Pname);
            if (selectedProjectData) {
                setProjectDetails(selectedProjectData);
                setData([{ id: 1, name: 'คะแนนรวม', fullscores: '90', score: selectedProjectData.Er_CSB02 }]);
            }
        }
    }, [selectedProject, projects]);

    const handleChange = (value) => {
        const project = projects.find(p => p.Er_Pname === value);
        setSelectedProject(project);
    };

    const handleSubmit = () => {
        if (!selectedProject || !selectedProject.Er_Pname) {
            message.warning("กรุณาเลือกชื่อโครงงานก่อน");
            return;
        }

        const updatedScore = data.find(item => item.name === 'คะแนนรวม')?.score;

        if (!updatedScore) {
            message.error("กรุณากรอกคะแนนให้ครบถ้วน");
            return;
        }
        message.success("บันทึกคะแนนสำเร็จ!");
        setProjects(prevProjects => prevProjects.filter(p => p.Er_Pname !== selectedProject.Er_Pname));
        setSelectedProject(null);
        setProjectDetails(null);
        setData([{ id: 1, name: 'คะแนนรวม', fullscores: '90', score: '' }]);
    };

    const handleCancel = () => {
        setSelectedProject(null);
        setProjectDetails(null);
        setData([{ id: 1, name: 'คะแนนรวม', fullscores: '90', score: '' }]);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '60%', textAlign: 'center' }}>
            <h1 >แบบประเมินโครงงานพิเศษ 2 (ปริญญานิพนธ์)</h1>
                <Form layout="vertical">
                    <Form.Item>
                    <h3>เลือกชื่อโครงงาน</h3>
                        <Select
                            placeholder="เลือกชื่อโครงงาน"
                            onChange={handleChange}
                            style={{ width: '100%' }}
                            value={selectedProject?.Er_Pname || undefined}
                        >
                            {projects.map((project) => (
                                <Option key={project.Er_Pname} value={project.Er_Pname}>
                                    {project.Er_Pname}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    {selectedProject && (
                        <>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item label="ชื่อ-สกุลนักศึกษาคนที่ 1">
                                        <Input value={projectDetails?.P_S1 || ''} disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="ชื่อ-สกุลนักศึกษาคนที่ 2">
                                        <Input value={projectDetails?.P_S2 || ''} disabled />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item label="ชื่ออาจารย์ที่ปรึกษา">
                                <Input value={projectDetails?.P_T || ''} disabled />
                            </Form.Item>

                            <h2 style={{ textAlign: 'center' }}>ตารางคะแนนสำหรับหัวหน้าภาควิชา</h2>
                            <Table
                                dataSource={data}
                                columns={[
                                    { title: 'คะแนนเต็ม', dataIndex: 'fullscores', key: 'fullscores' },
                                    { title: 'คะแนนได้', dataIndex: 'score', key: 'score' }
                                ]}
                                pagination={false}
                                rowKey="id"
                            />

                            <div style={{ marginTop: 16, textAlign: 'center' }}>
                                <Button type="primary" onClick={handleSubmit}>
                                    อนุมัติคะแนน
                                </Button>
                                <Button style={{ marginLeft: 8 }} onClick={handleCancel}>
                                    ยกเลิก
                                </Button>
                            </div>
                        </>
                    )}
                </Form>
            </div>
            </div>
    );
}

export default DepartmentHeadScoreCSB04;
