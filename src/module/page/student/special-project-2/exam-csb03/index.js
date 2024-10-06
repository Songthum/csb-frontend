import React from "react";
import { Form, Input, Checkbox, Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function ExamCSB03() {
  const onFinish = (values) => {
    console.log("Form values: ", values);
  };

  return (
    <div style={{ padding: 40, backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      <div style={{  margin: "auto", backgroundColor: "#fff", padding: 40, borderRadius: 10, }}>
        <Typography style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={3}>แบบฟอร์มเสนอหัวข้อโครงงานพิเศษ</Title>
          <Paragraph>
            โครงการพิเศษ (สองภาษา) ภาควิชาวิทยาการคอมพิวเตอร์และสารสนเทศ
            คณะวิทยาศาสตร์ประยุกต์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
          </Paragraph>
        </Typography>

        <Form
          name="projectForm"
          layout="vertical"
          onFinish={onFinish}
          style={{ maxWidth: 600, margin: "auto" }}
        >
          <Form.Item
            label="ชื่อนักศึกษาคนที่ 1"
            name="student1"
            rules={[{ required: true, message: "กรุณากรอกชื่อนักศึกษาคนที่ 1" }]}
          >
            <Input placeholder="ชื่อนักศึกษาคนที่ 1" />
          </Form.Item>

          <Form.Item
            label="ชื่อนักศึกษาคนที่ 2"
            name="student2"
            rules={[{ required: true, message: "กรุณากรอกชื่อนักศึกษาคนที่ 2" }]}
          >
            <Input placeholder="ชื่อนักศึกษาคนที่ 2" />
          </Form.Item>

          <Form.Item
            label="ชื่อโครงงานภาษาอังกฤษ"
            name="projectName"
            rules={[{ required: true, message: "กรุณากรอกชื่อโครงงานภาษาอังกฤษ" }]}
          >
            <Input placeholder="ชื่อโครงงานภาษาอังกฤษ" />
          </Form.Item>

          <Form.Item
            label="ชื่ออาจารย์ที่ปรึกษา (ถ้ามี)"
            name="lecturer"
            // rules={[{ required: true, message: "กรุณากรอกชื่ออาจารย์ที่ปรึกษา" }]}
          >
            <Input placeholder="ชื่ออาจารย์ที่ปรึกษา" />
          </Form.Item>

          <Form.Item 
            label="ประเภทโครงงาน"
            name="projectType"
            rules={[{ required: true, message: "กรุณาเลือกประเภทโครงงาน" }]}

          >
            
            <Checkbox.Group>
              <Checkbox value="topic1">Network & Cyber Security</Checkbox>
              <Checkbox value="topic2">Mobile and Web Technology (Web application / Mobile Application)</Checkbox>
              <Checkbox value="topic3">Smart Technology</Checkbox>
              <Checkbox value="topic4">Artificial Intelligence</Checkbox>
              <Checkbox value="topic5">Games & Multimedia</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            label="รายละเอียด"
            name="details"
            rules={[{ required: true, message: "กรุณากรอกรายละเอียด" }]}
          >
            <Input.TextArea placeholder="กรอกรายละเอียด" rows={4} />
          </Form.Item>

          <Form.Item
            label="เครื่องมือที่ใช้"
            name="tools"
            rules={[{ required: true, message: "กรุณากรอกเครื่องมือที่ใช้" }]}
          >
            <Input placeholder="กรอกเครื่องมือที่ใช้" />
          </Form.Item>

          <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="primary" htmlType="submit">
              บันทึก
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

 