import React, { useState } from "react";
import { Typography, Button, Row, Col } from "antd";

const { Title, Paragraph } = Typography;

export default function ExamCSB02() {
  const [data, setData] = useState({
    projectName: "",
    student: "",
    lecturer: "",
  });

  const handleAccept = () => {
    console.log("ยินยอม");
  };

  const handleDecline = () => {
    console.log("ปฏิเสธ");

  };

  return (
    <div style={{ padding: 40, backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "auto", backgroundColor: "#fff", padding: 40, borderRadius: 10, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <Typography style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={3}>แบบฟอร์มขอสอบความก้าวหน้าโครงงานพิเศษ</Title>
          <Paragraph>
            โครงการพิเศษ (สองภาษา) ภาควิชาวิทยาการคอมพิวเตอร์และสารสนเทศ
            คณะวิทยาศาสตร์ประยุกต์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
          </Paragraph>
        </Typography>

        <div style={{ marginBottom: 20 }}>
          <Title level={5}>โครงงาน</Title>
          <Paragraph>{data.projectName}</Paragraph>
        </div>

        <div style={{ marginBottom: 20 }}>
          <Title level={5}>นักศึกษาคนที่ 1</Title>
          <Paragraph>{data.student1}</Paragraph>
        </div>

        <div style={{ marginBottom: 20 }}>
          <Title level={5}>นักศึกษาคนที่ 2</Title>
          <Paragraph>{data.student2}</Paragraph>
        </div>

        <div style={{ marginBottom: 20 }}>
          <Title level={5}>อาจารย์ที่ปรึกษา</Title>
          <Paragraph>{data.lecturer}</Paragraph>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <Row gutter={16}>
            <Col>
              <Button type="primary" onClick={handleAccept}>
                ยินยอม
              </Button>
            </Col>
            <Col>
              <Button type="primary" danger onClick={handleDecline}>
                ปฏิเสธ
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
 