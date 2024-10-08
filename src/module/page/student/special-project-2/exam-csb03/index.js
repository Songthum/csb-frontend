import React, { useState } from "react";
import { Form, Input, Button, Typography, DatePicker, Space, Row, Col, notification } from "antd";
import cis from '../../../../public/image/cis.png';

const { Title, Paragraph } = Typography;
const { RangePicker } = DatePicker;

export default function ExamCSB03() {
  const [isSubmitDisabled, setSubmitDisabled] = useState(false); // Manage submit button state

  const [data] = useState({
    projectName: "ระบบจัดการข้อมูลโครงงาน",
    student1: "John Doe",
    student2: "Jane Smith",
    lecturer: "Dr. Somsak J",
  });

  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const handleAccept = (values) => {
    let body = {
      examName: data.projectName, // Use project name from state
      examStartDate: values.examDate[0].format("YYYY-MM-DD HH:mm"),
      examEndDate: values.examDate[1].format("YYYY-MM-DD HH:mm"),
    };

    console.log("ยินยอม", body);
    notification.success({
      message: 'ยินยอม',
      description: 'ท่านยินยอมยื่นทดสอบโครงงานพิเศษแล้ว',
      placement: 'topRight',
    });
    setSubmitDisabled(true); // Disable the submit button
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 40, borderRadius: 15 }}>
      <img src={cis} alt="logo" style={{ display: "block", margin: "0 auto", width: "150px" }} />
      <Typography style={{ textAlign: "center", marginBottom: 24 }}>
        <Title level={3}>หนังสือรับรองการทดสอบโครงงานพิเศษ</Title>
        <Paragraph>
          โครงการพิเศษ (สองภาษา) ภาควิชาวิทยาการคอมพิวเตอร์และสารสนเทศ<br />
          คณะวิทยาศาสตร์ประยุกต์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
        </Paragraph>
      </Typography>

      <div><br />
        <Paragraph style={{ fontSize: "18px" }}>โครงงาน</Paragraph>
        <Paragraph style={{ fontSize: "16px", color: "#555" }}>{data.projectName}</Paragraph>
      </div>

      <div><br />
        <Paragraph style={{ fontSize: "18px" }}>นักศึกษาคนที่ 1</Paragraph>
        <Paragraph style={{ fontSize: "16px", color: "#555" }}>{data.student1}</Paragraph>
      </div>

      <div><br />
        <Paragraph style={{ fontSize: "18px" }}>นักศึกษาคนที่ 2</Paragraph>
        <Paragraph style={{ fontSize: "16px", color: "#555" }}>{data.student2}</Paragraph>
      </div>

      <div><br />
        <Paragraph style={{ fontSize: "18px" }}>อาจารย์ที่ปรึกษา</Paragraph>
        <Paragraph style={{ fontSize: "16px", color: "#555" }}>{data.lecturer}</Paragraph>
      </div>

      <Form onFinish={handleAccept} layout="vertical">
        <Space direction="vertical" size={12}>
          <Form.Item
            label="วันที่เริ่ม-สิ้นสุด (Exam Date)"
            name="examDate"
            rules={[{ required: true, message: "กรุณาเลือกเวลาสอบ" }]}
          >
            <RangePicker
              showTime={{
                format: "HH:mm",
              }}
              format="YYYY-MM-DD HH:mm"
              onChange={(value, dateString) => {
                console.log("Selected Time: ", value);
                console.log("Formatted Selected Time: ", dateString);
              }}
              onOk={onOk}
              placeholder={["วันที่เริ่มต้น", "วันที่สิ้นสุด"]}
            />
          </Form.Item>
        </Space>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <Row gutter={16}>
            <Col>
              <Button
                type="primary"
                htmlType="submit"
                disabled={isSubmitDisabled} // Disable after submission
                style={{ padding: "6px 30px", fontSize: "16px" }}
              >
                ยินยอม
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
}
