import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Button, Table, Row, Col, Typography, message } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const ChairmanScoreCSB01 = () => {
    const [projects] = useState([
        { id: 1, Er_Pname: 'โครงงาน A', P_S1: 'นักศึกษาคนที่ 1A', P_S2: 'นักศึกษาคนที่ 2A', P_T: 'อาจารย์ที่ปรึกษา A' },
        { id: 2, Er_Pname: 'โครงงาน B', P_S1: 'นักศึกษาคนที่ 1B', P_S2: 'นักศึกษาคนที่ 2B', P_T: 'อาจารย์ที่ปรึกษา B' },
    ]);
    
    const [selectedProject, setSelectedProject] = useState(null);
    const [projectDetails, setProjectDetails] = useState(null);
    const [data, setData] = useState([{ id: 1, name: 'คะแนนรวม', fullscores: '90', score: '' }]);
    const [editingRowId, setEditingRowId] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            const projectDetail = projects.find(p => p.Er_Pname === selectedProject);
            setProjectDetails(projectDetail);
            setData([{ id: 1, name: 'คะแนนรวม', fullscores: '90', score: '' }]);
        }
    }, [selectedProject, projects]);

    const handleChange = (value) => {
        setSelectedProject(value);
    };

    const handleNameChange = (value) => {
        if (/^\d*$/.test(value) && Number(value) <= Number(data[0].fullscores)) {
            setData(prevData => prevData.map(item =>
                item.id === 1 ? { ...item, score: value } : item
            ));
        }
    };

    const handleEditClick = () => {
        setEditingRowId(1);
    };

    const handleSaveClick = () => {
        setEditingRowId(null);
        message.success('บันทึกคะแนนสำเร็จ!');
    };

    const handleSubmit = () => {
        if (!selectedProject) {
            message.error("กรุณาเลือกชื่อโครงงานก่อน");
            return;
        }
        message.success('บันทึกข้อมูลสำเร็จ!');
    };

    return (
        <div style={{ padding: 20 }}>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Title level={2}>แบบประเมินโครงงานพิเศษ (สอบหัวข้อ)</Title>
                </Col>

                <Col span={24}>
                    <Form layout="vertical">
                        <Form.Item label="เลือกชื่อโครงงาน">
                            <Select
                                value={selectedProject}
                                onChange={handleChange}
                                placeholder="เลือกโครงงาน"
                                style={{ width: '100%' }}
                            >
                                {projects.map((project) => (
                                    <Option key={project.id} value={project.Er_Pname}>
                                        {project.Er_Pname}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        {projectDetails && (
                            <>
                                <Form.Item label="โดย">
                                    <Row gutter={[16, 16]}>
                                        <Col span={12}>
                                            <Input
                                                value={projectDetails.P_S1}
                                                disabled
                                                placeholder="ชื่อ-สกุลนักศึกษาคนที่ 1"
                                            />
                                        </Col>
                                        <Col span={12}>
                                            <Input
                                                value={projectDetails.P_S2}
                                                disabled
                                                placeholder="ชื่อ-สกุลนักศึกษาคนที่ 2"
                                            />
                                        </Col>
                                    </Row>
                                </Form.Item>

                                <Form.Item label="อาจารย์ที่ปรึกษา">
                                    <Input
                                        value={projectDetails.P_T}
                                        disabled
                                        placeholder="ชื่ออาจารย์ที่ปรึกษา"
                                    />
                                </Form.Item>
                            </>
                        )}

                        {selectedProject && (
                            <>
                                <Title level={4}>ตารางคะแนนสำหรับประธานกรรมการสอบ</Title>
                                <Table
                                    dataSource={data}
                                    pagination={false}
                                    rowKey="id"
                                >
                                    <Table.Column title="คะแนนเต็ม" dataIndex="fullscores" key="fullscores" />
                                    <Table.Column
                                        title="คะแนนได้"
                                        key="score"
                                        render={(text, record) =>
                                            editingRowId === record.id ? (
                                                <Input
                                                    value={record.score}
                                                    onChange={(e) => handleNameChange(e.target.value)}
                                                    inputMode="numeric"
                                                />
                                            ) : (
                                                record.score
                                            )
                                        }
                                    />
                                    <Table.Column
                                        title="แก้ไข"
                                        key="action"
                                        render={(text, record) =>
                                            editingRowId === record.id ? (
                                                <Button type="primary" onClick={handleSaveClick}>
                                                    บันทึก
                                                </Button>
                                            ) : (
                                                <Button type="primary" onClick={handleEditClick}>
                                                    แก้ไข
                                                </Button>
                                            )
                                        }
                                    />
                                </Table>
                            </>
                        )}

                        <Row justify="start" gutter={[16, 16]} style={{ marginTop: 20 }}>
                            <Col>
                                <Button type="primary" onClick={handleSubmit}>
                                    บันทึก
                                </Button>
                            </Col>
                            <Col>
                                <Button onClick={() => setSelectedProject(null)}>
                                    ยกเลิก
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ChairmanScoreCSB01;
