import React, { useState } from "react";
import { Form, Input, Button, Table } from "antd";

export default function InputScoreCSB01() {
  const [form] = Form.useForm();
  const [scores, setScores] = useState([]);

  // ฟังก์ชันสำหรับบันทึกข้อมูลเมื่อผู้ใช้กรอกคะแนน
  const onFinish = (values) => {
    const newScore = {
      studentName: values.studentName,
      subject: values.subject,
      score: values.score,
    };
    setScores([...scores, newScore]);
    form.resetFields(); // ล้างฟอร์มหลังจากบันทึกคะแนน
  };

  // คอลัมน์ของตาราง
  const columns = [
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Exam Score Entry</h1>
      
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 600, marginBottom: 20 }}
      >
        <Form.Item
          label="Student Name"
          name="studentName"
          rules={[{ required: true, message: "Please input the student's name!" }]}
        >
          <Input placeholder="Enter student's name" />
        </Form.Item>

        <Form.Item
          label="Subject"
          name="subject"
          rules={[{ required: true, message: "Please input the subject!" }]}
        >
          <Input placeholder="Enter subject" />
        </Form.Item>

        <Form.Item
          label="Score"
          name="score"
          rules={[{ required: true, message: "Please input the score!" }]}
        >
          <Input placeholder="Enter score" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* แสดงตารางคะแนน */}
      <Table dataSource={scores} columns={columns} rowKey={(record) => record.studentName + record.subject} />
    </div>
  );
};