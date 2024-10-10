import React, { useState, useEffect } from "react";
import { Form, Button, Typography, DatePicker, Space, Row, Col, notification } from "antd";
import cis from '../../../../public/image/cis.png';
import api from '../../../../utils/form/api';

const { Title, Paragraph } = Typography;

export default function ExamCSB03() {
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);
  const [data, setData] = useState({
    projectName: "",
    student: [],
    lecturer: [],
  });
  const [loading, setLoading] = useState(true);

  const handleAccept = (values) => {
    console.log("ยินยอม", values);
    notification.success({
      message: 'ยินยอม',
      description: 'ท่านยินยอมยื่นทดสอบโครงงานพิเศษแล้ว',
      placement: 'topRight',
    });
    setSubmitDisabled(true); // ปิดการใช้งานปุ่มหลังจากส่งข้อมูล
  };

  const onChange = (date, dateString) => {
    console.log("Selected date:", dateString);
  };

  useEffect(() => {
    api
      .getAllProject()
      .then((res) => {
        console.log(res.data.body);
        if (res.data.body.length > 0) {
          const projectData = res.data.body[0];
          console.log(projectData);

          setData({
            projectName: projectData.projectName,
            student: projectData.student || [],
            lecturer: projectData.lecturer || [],
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          message: 'Error Fetching Projects',
          description: 'Unable to fetch project data. Please try again later.',
          placement: 'topRight',
        });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
<div style={{ maxWidth: 600, margin: "auto", flexDirection: 'column', alignItems: 'center', textAlign: 'center',  borderRadius: 15 }}>
      <img src={cis} alt="logo" style={{ width: "150px", marginBottom: 24 }} />
      <Typography>
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

      <Row gutter={[16, 16]} style={{ width: '100%' }}>
        <Col span={12}>
          {data.student.length > 0 && (
            <div><br />
              <Paragraph style={{ fontSize: "18px" }}>รายชื่อนักศึกษา</Paragraph>
              {data.student.map((student, index) => (
                <Paragraph key={index} style={{ fontSize: "16px", color: "#555" }}>
                  {index + 1}. {`${student.FirstName} ${student.LastName}`} 
                </Paragraph>
              ))}
            </div> 
          )}
        </Col>
        <Col span={12}>
          <div><br />
            <Paragraph style={{ fontSize: "18px" }}>อาจารย์ที่ปรึกษา</Paragraph>
            {data.lecturer.length > 0 && (
              data.lecturer.map((lecturer, index) => (
                <Paragraph key={index} style={{ fontSize: "16px", color: "#555" }}>
                  {index + 1}. {`${lecturer.FirstName} ${lecturer.LastName}`}
                </Paragraph>
              ))
            )}
          </div>
        </Col>
      </Row>

      <Form onFinish={handleAccept} layout="vertical" style={{ width: '100%' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Form.Item 
            label="เลือกวันที่ยื่นทดสอบ" 
            name="date" 
            rules={[{ required: true, message: 'กรุณาเลือกวันที่!' }]}
            style={{ textAlign: 'center' }} 
          >
            <DatePicker onChange={onChange} format="YYYY-MM-DD" style={{ width: '100%' }} />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <Row gutter={16}>
              <Col>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={isSubmitDisabled}
                  style={{ padding: "6px 30px", fontSize: "16px" }}
                >
                  ยินยอม
                </Button>
              </Col>
            </Row>
          </div>
        </Space>
      </Form>
    </div>
  );
}
