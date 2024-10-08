import React, { useState, useEffect } from 'react';
import { Select, Input, Button, Table, Form, Row, Col, notification } from 'antd';

function ChairmanScoreCSB01() {
  const [projects, setProjects] = useState([]);
  const [approvedProjects, setApprovedProjects] = useState(new Set()); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [data, setData] = useState([{ id: 1, name: 'คะแนนรวม', fullscores: '80', score: '' }]);
  const [projectDetails, setProjectDetails] = useState(null);

  const mockProjects = [
    { Er_Pname: 'Project A', Er_CSB03: '75', Er_CSB03_status: 'ไม่ผ่าน' },
    { Er_Pname: 'Project B', Er_CSB03: '80', Er_CSB03_status: 'ไม่ผ่าน' },
  ];

  const mockProjectDetails = {
    'Project A': { P_S1: 'Student 1A', P_S2: 'Student 2A', P_T: 'Advisor A' },
    'Project B': { P_S1: 'Student 1B', P_S2: 'Student 2B', P_T: 'Advisor B' },
  };

  useEffect(() => {
    setProjects(mockProjects);
  }, []);

  const handleProjectChange = (value) => {
    const selected = projects.find((p) => p.Er_Pname === value);
    setSelectedProject(selected);
    setProjectDetails(mockProjectDetails[value]);

    setData([{ id: 1, name: 'คะแนนรวม', fullscores: '80', score: selected.Er_CSB03 }]);
  };

  const handleScoreChange = (e) => {
    const newScore = e.target.value;
    setData((prevData) => prevData.map((item) => ({ ...item, score: newScore })));
  };

  const resetForm = () => {
    setSelectedProject(null);
    setProjectDetails(null);
    setData([{ id: 1, name: 'คะแนนรวม', fullscores: '80', score: '' }]);
  };

  const handleSubmit = () => {
    if (!selectedProject) {
      notification.error({
        message: 'ผิดพลาด',
        description: 'กรุณาเลือกชื่อโครงงานก่อน',
      });
      return;
    }

    const updatedData = data.find((item) => item.name === 'คะแนนรวม')?.score || '';
    if (!updatedData) {
      notification.error({
        message: 'ผิดพลาด',
        description: 'กรุณากรอกคะแนนให้ครบถ้วน',
      });
      return;
    }

    notification.success({
      message: 'อัปเดตข้อมูลสำเร็จ!',
      description: `คะแนนที่ได้: ${updatedData}, โครงงาน: ${selectedProject.Er_Pname}`,
    });

    setApprovedProjects((prev) => new Set(prev).add(selectedProject.Er_Pname));

    resetForm();
  };

  const handleCancel = () => {
    resetForm();
  };

  const filteredProjects = projects.filter((project) => !approvedProjects.has(project.Er_Pname));

  const columns = [
    {
      title: 'คะแนนเต็ม',
      dataIndex: 'fullscores',
      key: 'fullscores',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'คะแนนได้',
      dataIndex: 'score',
      key: 'score',
      render: (_, record) => (
        <Input
          value={record.score}
          onChange={handleScoreChange}
          style={{ width: '80px', border: '1px solid #d9d9d9', borderRadius: '4px' }}
        />
      ),
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '60%', textAlign: 'center' }}>
        <h1>แบบประเมินโครงงานพิเศษ 1 (สอบหัวข้อ)</h1>

        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item>
                <h3>เลือกชื่อโครงงาน</h3>
                <Select
                  value={selectedProject?.Er_Pname}
                  onChange={handleProjectChange}
                  placeholder="เลือกโครงงาน"
                >
                  {filteredProjects.map((project) => (
                    <Select.Option key={project.Er_Pname} value={project.Er_Pname}>
                      {project.Er_Pname}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {projectDetails && (
            <>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="ชื่อ-สกุลนักศึกษาคนที่ 1">
                    <Input value={projectDetails.P_S1} disabled style={{ width: '100%', borderRadius: '4px' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="ชื่อ-สกุลนักศึกษาคนที่ 2">
                    <Input value={projectDetails.P_S2} disabled style={{ width: '100%', borderRadius: '4px' }} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item label="ชื่ออาจารย์ที่ปรึกษา">
                    <Input value={projectDetails.P_T} disabled style={{ width: '100%', borderRadius: '4px' }} />
                  </Form.Item>
                </Col>
              </Row>

              <h2>ตารางคะแนนสำหรับประธานกรรมการสอบ</h2>
              <Table
                dataSource={data}
                columns={columns}
                pagination={false}
                rowKey="id"
                bordered
                style={{ marginTop: '16px' }}
              />

              <Row gutter={16} style={{ marginTop: '16px', justifyContent: 'center' }}>
                <Col>
                  <Button type="primary" onClick={handleSubmit}>
                    อนุมัติคะแนน
                  </Button>
                </Col>
                <Col>
                  <Button onClick={handleCancel}>
                    ยกเลิก
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </Form>
      </div>
    </div>
  );
}

export default ChairmanScoreCSB01;
