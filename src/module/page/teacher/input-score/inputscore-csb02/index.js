import React, { useState, useEffect } from "react";
import { Button, Table, Input, Modal, Typography, Select, Card, InputNumber, Form, message } from "antd";

const { TextArea } = Input;

function InputScoreCSB02() {
    // ข้อมูลโครงงานและนักศึกษา
    const mockProjects = [
        {
            P_id: 1,
            P_name: 'Project A',
            P_S1: 'สมหมาย สมใจ',
            P_S2: 'กล้วยไม้ เรืองรอง',
            P_T: 'อาจารย์คนสวย',
            evaluationDate: '2024-10-10',
        },
        {
            P_id: 2,
            P_name: 'Project B',
            P_S1: 'Student 1B',
            P_S2: 'Student 2B',
            P_T: 'Advisor B',
            evaluationDate: '2024-10-10',
        },
        {
            P_id: 3,
            P_name: 'Project C',
            P_S1: 'Student 1C',
            P_S2: 'Student 2C',
            P_T: 'Advisor C',
            evaluationDate: '2024-10-10',
        },
        {
            P_id: 4,
            P_name: 'Project D',
            P_S1: 'Student 1D',
            P_S2: 'Student 2D',
            P_T: 'Advisor D',
            evaluationDate: '2024-10-15',
        },
        {
            P_id: 5,
            P_name: 'Project E',
            P_S1: 'Student 1E',
            P_S2: 'Student 2E',
            P_T: 'Advisor E',
            evaluationDate: '2024-10-15',
        },
        {
            P_id: 6,
            P_name: 'Project F',
            P_S1: 'Student 1F',
            P_S2: 'Student 2F',
            P_T: 'Advisor F',
            evaluationDate: '2024-10-15',
        },
    ];

    // เกณฑ์พิจารณาและคะแนนเต็ม
    const criteriaData = [
        { key: "1", criteria: "วัตถุประสงค์และขอบเขตโครงงาน", maxScore: 10 },
        { key: "2", criteria: "ความเข้าใจระบบงานเดิม/ทฤษฎีหรืองานวิจัย ที่นำมาใช้พัฒนาโครงงาน", maxScore: 20 },
        { key: "3", criteria: "การศึกษาความต้องการของระบบ และการออกแบบ", maxScore: 20 },
        { key: "4", criteria: "การนำเสนอโครงงาน", maxScore: 20 },
        { key: "5", criteria: "รูปแบบรายงาน", maxScore: 10 },
        { key: "6", criteria: "แนวทางการดำเนินงาน", maxScore: 10 },
    ];

    // State สำหรับจัดเก็บคะแนนที่ผู้ใช้กรอก
    const [scores, setScores] = useState({});
    const [totalScore, setTotalScore] = useState(0);
    const [comment, setComment] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [evaluatedRows, setEvaluatedRows] = useState({});
    const [successfulEvaluations, setSuccessfulEvaluations] = useState(new Set());

    useEffect(() => {
        setProjects(mockProjects);
    }, []);

    const availableDates = [...new Set(mockProjects.map(project => project.evaluationDate))];

    const handleDateChange = (value) => {
        setSelectedDate(value);
        const filtered = projects.filter(project => project.evaluationDate === value);
        setFilteredProjects(filtered);
    };

    const handleLinkClick = (index) => {
        setSelectedProject(filteredProjects[index]);
        setModalVisible(true);
    };

    const handleClose = () => {
        setModalVisible(false);
    };

    const handleScoreChange = (value, key) => {
        setScores((prevScores) => ({
            ...prevScores,
            [key]: value,
        }));
    };

    useEffect(() => {
        const total = criteriaData.reduce((sum, item) => {
            return sum + (scores[item.key] || 0);
        }, 0);
        setTotalScore(total);
    }, [scores]);

    const onSubmit = () => {
        const result = {
            totalScore,
            comment,
        };
        console.log("Result submitted: ", result);

        setScores({});
        setComment("");
        setModalVisible(false);
        message.success("บันทึกคะแนนสำเร็จ");

        if (selectedProject) {
            setSuccessfulEvaluations((prev) => new Set(prev).add(selectedProject.P_id));
            setEvaluatedRows((prev) => ({ ...prev, [selectedProject.P_id]: 'evaluated' }));
        }
    };

    const handleDisableEvaluation = (projectId) => {
        setEvaluatedRows((prev) => ({ ...prev, [projectId]: 'notEvaluated' }));
    };

    const columns = [
        {
            title: "เกณฑ์พิจารณา",
            dataIndex: "criteria",
            key: "criteria",
        },
        {
            title: "คะแนนเต็ม",
            dataIndex: "maxScore",
            key: "maxScore",
        },
        {
            title: "คะแนนที่ได้",
            key: "score",
            render: (text, record) => (
                record.key === "total" ? (
                    <strong>{totalScore}</strong> // แสดงคะแนนรวมในแถวที่ 5
                ) : (
                    <InputNumber
                        min={0}
                        max={record.maxScore}
                        value={scores[record.key] || 0}
                        onChange={(value) => handleScoreChange(value, record.key)}
                    />
                )
            ),
        },
    ];

    const totalScoreRow = {
        key: "total",
        criteria: <strong>คะแนนรวม</strong>,
        maxScore: criteriaData.reduce((total, item) => total + item.maxScore, 0),
        score: totalScore,
    };

    const tableData = [...criteriaData, totalScoreRow];

    const hasEvaluatedProjects = () => {
        return filteredProjects.some(project => evaluatedRows[project.P_id] === 'evaluated');
    };

    // ฟังก์ชันเพื่อตรวจสอบว่ามีคะแนนที่กรอกครบหรือไม่
    const isScoreComplete = () => {
        return criteriaData.every(item => scores[item.key] !== undefined && scores[item.key] !== null);
    };

    return (
        <div style={{ padding: "20px" }}>
            <Typography.Title level={2}>ประเมินการโครงงานพิเศษ 1 (สอบก้าวหน้า)</Typography.Title>
            <Typography.Text>เลือกวันที่ที่จะทำการประเมิน:</Typography.Text>
            <Select
                style={{ width: 200 }}
                placeholder="เลือกวันที่"
                onChange={handleDateChange}
                options={availableDates.map(date => ({ value: date, label: date }))}
            />
            <div style={{ marginTop: 20 }} />

            {selectedDate && filteredProjects.length > 0 ? (
                <div>
                    <Button
                        onClick={() => filteredProjects.forEach(project => handleDisableEvaluation(project.P_id))}
                        style={{
                            backgroundColor: hasEvaluatedProjects() ? 'gray' : 'red',
                            borderColor: hasEvaluatedProjects() ? 'gray' : 'red',
                            color: 'white',
                            marginBottom: '10px',
                        }}
                        disabled={hasEvaluatedProjects()}
                    >
                        ไม่ประเมินทั้งหมด
                    </Button>
                    <Table
                        dataSource={filteredProjects}
                        columns={[ // แสดงข้อมูลในตาราง
                            {
                                title: 'ลำดับที่',
                                dataIndex: 'P_id',
                                key: 'P_id',
                            },
                            {
                                title: 'ชื่อโครงงาน',
                                dataIndex: 'P_name',
                                key: 'P_name',
                            },
                            {
                                title: 'ประเมิน',
                                key: 'evaluate',
                                render: (_, record) => {
                                    const evaluationStatus = evaluatedRows[record.P_id];

                                    if (evaluationStatus === 'evaluated') {
                                        return <span style={{ color: 'green' }}>ประเมินสำเร็จ</span>;
                                    }

                                    if (evaluationStatus === 'notEvaluated') {
                                        return <span style={{ color: 'red' }}>ไม่ประเมิน</span>;
                                    }

                                    return (
                                        <>
                                            <Button
                                                onClick={() => handleLinkClick(filteredProjects.indexOf(record))}
                                                type="primary"
                                            >
                                                ประเมิน
                                            </Button>
                                            <Button
                                                onClick={() => handleDisableEvaluation(record.P_id)}
                                                style={{ marginLeft: 8, backgroundColor: 'red', borderColor: 'red', color: 'white' }}
                                            >
                                                ไม่ประเมิน
                                            </Button>
                                        </>
                                    );
                                },
                            },
                        ]}
                        pagination={false}
                        bordered
                    />
                </div>
            ) : (
                <Typography.Text>
                    {selectedDate ? null : 'กรุณาเลือกวันที่เพื่อแสดงโครงงานที่สามารถประเมินได้ !!'}
                </Typography.Text>
            )}

            <Modal
                title="กรอกคะแนน"
                visible={modalVisible}
                onCancel={handleClose}
                footer={null}
                width={1000}
            >
                <Card title="ข้อมูลนักศึกษาและโครงงาน">
                    <p><strong>ชื่อโครงงาน : </strong> {selectedProject?.P_name}</p>
                    <p><strong>นักศึกษาคนที่ 1 : </strong> {selectedProject?.P_S1} </p>
                    <p><strong>นักศึกษาคนที่ 2 : </strong> {selectedProject?.P_S2} </p>
                    <p><strong>อาจารย์ที่ปรึกษา : </strong> {selectedProject?.P_T}</p>
                </Card>

                <Card title="ฟอร์มกรอกคะแนน">
                    <Form onFinish={onSubmit}>
                        <Table
                            dataSource={tableData.map((data) => ({
                                ...data,
                                backgroundColor: successfulEvaluations.has(selectedProject?.P_id) ? 'green' : 'transparent',
                            }))}
                            columns={columns.map((col) => ({
                                ...col,
                                onCell: (record) => ({
                                    style: {
                                        backgroundColor: successfulEvaluations.has(selectedProject?.P_id) && col.key === 'score' ? 'green' : 'transparent',
                                    },
                                }),
                            }))}
                            pagination={false}
                            bordered
                        />

                        <Form.Item label="ความคิดเห็นจากอาจารย์" style={{ marginTop: "20px" }}>
                            <TextArea
                                rows={4}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="กรุณากรอกความคิดเห็น"
                            />
                        </Form.Item>

                        <Form.Item style={{ marginTop: "20px", textAlign: 'center' }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={!isScoreComplete()} // ปิดใช้งานปุ่มถ้ามีคะแนนที่กรอกไม่ครบ
                            >
                                ส่งคะแนน
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Modal>
        </div>
    );
}

export default InputScoreCSB02;
