import React, { useState } from "react";
import { Form, Input, Checkbox, Button, Typography, Row, Col, notification } from "antd";
import cis from '../../../../public/image/cis.png';

const { Title, Paragraph } = Typography;

export default function ExamCSB01() {
  const [isOtherChecked, setIsOtherChecked] = useState(false);

  const onFinish = (values) => {
    console.log("Form values: ", values);

    // Trigger success notification
    notification.success({
      message: 'บันทึกสำเร็จ',
      description: 'แบบฟอร์มของคุณได้ถูกบันทึกเรียบร้อยแล้ว!',
      placement: 'topRight',
    });
  };

  const handleCheckboxChange = (checkedValues) => {
    if (checkedValues.includes("topic6")) {
      setIsOtherChecked(true);
    } else {
      setIsOtherChecked(false);
    }
  };

  return (
    <div style={{ margin: "auto", backgroundColor: "#fff", padding: 40, borderRadius: 10 }}>
      <img src={cis} alt="logo" style={{ display: "block", margin: "0 auto", width: "150px" }} />
      <Typography style={{ textAlign: "center", marginBottom: 24 }}>
        <Title level={3}>แบบฟอร์มเสนอหัวข้อโครงงานพิเศษ</Title>
        <Paragraph>
          โครงการพิเศษ (สองภาษา) ภาควิชาวิทยาการคอมพิวเตอร์และสารสนเทศ<br />
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
        >
          <Input placeholder="ชื่ออาจารย์ที่ปรึกษา" />
        </Form.Item>

        <Form.Item
          label="ประเภทโครงงาน"
          name="projectType"
          rules={[{ required: true, message: "กรุณาเลือกประเภทโครงงาน" }]}
        >
          <Checkbox.Group onChange={handleCheckboxChange}>
            <Row>
              <Col span={24}>
                <Checkbox value="topic1">Network & Cyber Security</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="topic2">Mobile and Web Technology</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="topic3">Smart Technology</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="topic4">Artificial Intelligence</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="topic5">Games & Multimedia</Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox value="topic6">Other</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        {isOtherChecked && (
          <Form.Item
            label="กรุณาระบุประเภทโครงงานอื่นๆ"
            name="otherProjectType"
            rules={[{ required: true, message: "กรุณาระบุประเภทโครงงานอื่นๆ" }]}
          >
            <Input placeholder="โปรดระบุ" />
          </Form.Item>
        )}

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
  );
}
