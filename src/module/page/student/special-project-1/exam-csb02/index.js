import React, { useState } from "react";
import { Typography, Button, Row, Col } from "antd";
import cis from '../../../../public/image/cis.png';

const { Title, Paragraph } = Typography;

export default function ExamCSB02() {
  const [data, setData] = useState({
    projectName: "ระบบจัดการข้อมูลโครงงาน",
    student1: "John Doe",
    student2: "Jane Smith",
    lecturer: "Dr. Somsak J",
  });

  const handleAccept = () => {
    console.log("ยินยอม");
  };

  const handleDecline = () => {
    console.log("ปฏิเสธ");
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 40, borderRadius: 15,}}>
      <img src={cis} alt="logo" style={{ display: "block", margin: "0 auto", width: "150px" }} />

      <Typography style={{ textAlign: "center", marginBottom: 24 }}>
        <Title level={3} style={{ fontWeight: "bold" }}>แบบฟอร์มขอสอบความก้าวหน้าโครงงานพิเศษ</Title>
        <Paragraph style={{ fontSize: "16px"}}>
          โครงการพิเศษ (สองภาษา) ภาควิชาวิทยาการคอมพิวเตอร์และสารสนเทศ <br />
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

      <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <Row gutter={16}>
          <Col>
            <Button type="primary" onClick={handleAccept} style={{ padding: "6px 30px", fontSize: "16px" }}>
              ยินยอม
            </Button>
          </Col>
          <Col>
            <Button type="primary" danger onClick={handleDecline} style={{ padding: "6px 30px", fontSize: "16px" }}>
              ปฏิเสธ
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
