import React, { useState, useEffect } from "react";
import { Table, InputNumber, Form, Button, Card, Input } from "antd";

const { TextArea } = Input;

export default function InputScoreCSB02() {
    // ข้อมูลนักศึกษาและโครงงาน
    const studentInfo = {
        studentID: ["6304062636120", "6304062620061"],
        students: ["ทรงธรรม คงสมปราชญ์", "ณัชริกา กันทะสอน"],
        projectName: "AI-Powered Chatbot",
        TprojectName: "รองศาสตราจารย์ ดร.ธนภัทร์ อนุศาสน์อมรกุล",
    };

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
    const [totalScore, setTotalScore] = useState(0); // State สำหรับคะแนนรวม
    const [comment, setComment] = useState(""); // State สำหรับคอมเมนต์

    // ฟังก์ชันที่ทำงานเมื่อผู้ใช้กรอกคะแนน
    const handleScoreChange = (value, key) => {
        setScores((prevScores) => ({
            ...prevScores,
            [key]: value,
        }));
    };

    // คำนวณคะแนนรวมทุกครั้งที่มีการเปลี่ยนแปลงคะแนน
    useEffect(() => {
        const total = criteriaData.reduce((sum, item) => {
            return sum + (scores[item.key] || 0);
        }, 0);
        setTotalScore(total); // อัปเดตคะแนนรวม
    }, [scores]);

    // ฟังก์ชันที่ทำงานเมื่อฟอร์มถูกส่ง
    const onSubmit = () => {
        // เก็บเฉพาะ totalScore และ comment
        const result = {
            totalScore,
            comment,
        };
        console.log("Result submitted: ", result); // แสดงผลใน console

        // เคลียร์คะแนนและคอมเมนต์
        setScores({});
        setComment("");
    };

    // คอลัมน์ของตาราง
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

    // ข้อมูลสำหรับแถวคะแนนรวม (แถวที่ 5)
    const totalScoreRow = {
        key: "total",
        criteria: <strong>คะแนนรวม</strong>,
        maxScore: criteriaData.reduce((total, item) => total + item.maxScore, 0), // รวมคะแนนเต็ม
        score: totalScore,  // แสดงผลคะแนนรวมที่คำนวณได้
    };

    // รวมแถวคะแนนรวมกับข้อมูลเกณฑ์พิจารณา
    const tableData = [...criteriaData, totalScoreRow];

    return (
        <div style={{ padding: "20px" }}>
            {/* ส่วนที่ 1: แสดงข้อมูลนักศึกษาและโครงงาน */}
            <Card title="ข้อมูลนักศึกษาและโครงงาน" style={{ marginBottom: "20px" }}>
                <p><strong>ชื่อโครงงาน : </strong> {studentInfo.projectName}</p>
                {studentInfo.students.map((student, index) => (
                    <p key={index}><strong>นักศึกษาคนที่ {index + 1} </strong>: {student}</p>
                ))}
                <p><strong>อาจารย์ที่ปรึกษา : </strong> {studentInfo.TprojectName}</p>
            </Card>

            {/* ส่วนที่ 2: ฟอร์มกรอกคะแนน */}
            <Card title="ฟอร์มกรอกคะแนน">
                <Form onFinish={onSubmit}>
                    <Table
                        dataSource={tableData}
                        columns={columns}
                        pagination={false}
                        bordered
                    />

                    {/* แถวสำหรับคอมเมนต์ */}
                    <Form.Item label="ความคิดเห็นจากอาจารย์" style={{ marginTop: "20px" }}>
                        <TextArea
                            rows={4}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="กรุณากรอกความคิดเห็น"
                        />
                    </Form.Item>

                    {/* ปุ่มสำหรับส่งคะแนน */}
                    <Form.Item style={{ marginTop: "20px" }}>
                        <Button type="primary" htmlType="submit">
                            ส่งคะแนน
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}
