import React, { useState } from "react";
import { Form, Input, Button, Typography, DatePicker, Space ,Row ,Col } from "antd";
import cis from '../../../../public/image/cis.png';

const { Title, Paragraph } = Typography;
const { RangePicker } = DatePicker;

export default function ExamCSB03() {
  const [isSubmitDisabled, setSubmitDisabled] = useState(false); // เพิ่ม state เพื่อจัดการปุ่ม submit
  const [data, setData] = useState({
    projectName: "ระบบจัดการข้อมูลโครงงาน",
    student1: "John Doe",
    student2: "Jane Smith",
    lecturer: "Dr. Somsak J",
  });

  const onFinish = (values) => {
    console.log("Form values: ", values);
    handleSubmit(values);
  };

  const handleSubmit = (values) => {
    let body = {
      examName: values.projectName,
      examStartDate: values.examDate[0].format("YYYY-MM-DD HH:mm"),
      examEndDate: values.examDate[1].format("YYYY-MM-DD HH:mm"),
    };
  };

  const handleAccept = () => {
    console.log("ยินยอม");
  };

  const handleDecline = () => {
    console.log("ปฏิเสธ");
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 40, borderRadius: 15,}}>
    <div style={{ margin: "auto", backgroundColor: "#fff", padding: 40, borderRadius: 10 }}>
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
    </div>
  );
}
