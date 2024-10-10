import React, { useState, useEffect } from 'react';
import { Select, Input, Button, Form, Row, Col, message } from 'antd';

export default function ApproveCSB03() {
  const [projects, setProjects] = useState([]);
  const [approvedProjects, setApprovedProjects] = useState(new Set());
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectDetails, setProjectDetails] = useState(null);

  const mockProjects = [
    { projectName: 'Project A', students: ['Student 1A', 'Student 2A'], lecture: 'Lecture A' },
    { projectName: 'Project B', students: ['Student 1B', 'Student 2B'], lecture: 'Lecture B' },
    { projectName: 'Project C', students: ['Student 1C', 'Student 2C'], lecture: 'Lecture C' },
  ];

  useEffect(() => {
    setProjects(mockProjects);
  }, []);

  const handleProjectChange = (value) => {
    const selected = projects.find((p) => p.projectName === value);
    setSelectedProject(selected);
    setProjectDetails(selected);
  };

  const resetForm = () => {
    setSelectedProject(null);
    setProjectDetails(null);
  };

  const handleApprove = () => {
    if (!selectedProject) {
      message.warning('กรุณาเลือกชื่อโครงงานก่อน');
      return;
    }
    message.success(`อนุมัติโครงงาน ${selectedProject.projectName} สำเร็จ`);
    setApprovedProjects((prev) => new Set(prev).add(selectedProject.projectName));
    resetForm();
  };

  const handleReject = () => {
    if (!selectedProject) {
      message.warning('กรุณาเลือกชื่อโครงงานก่อน');
      return;
    }
    message.warning(`ปฏิเสธการยื่นทดสอบโครงงาน ${selectedProject.projectName}`);
    resetForm();
  };

  const filteredProjects = projects.filter((project) => !approvedProjects.has(project.projectName));

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <h1 style={{ textAlign: 'center' }}>อนุมัติการยื่นทดสอบโครงงาน</h1>

        <Form layout="vertical">
          <Row justify="center" gutter={16}>
            <Col  span={12}>
              <Form.Item style={{ textAlign: 'center' }}>
              <h3>เลือกชื่อโครงงาน</h3>
                <Select 
                  value={selectedProject?.projectName || ''}
                  onChange={handleProjectChange}
                  placeholder="เลือกโครงงาน"
                  style={{ width: '100%' }}
                >
                  {filteredProjects.map((project) => (
                    <Select.Option key={project.projectName} value={project.projectName}>
                      {project.projectName}
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
                    <Input value={projectDetails.students[0]} disabled style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="ชื่อ-สกุลนักศึกษาคนที่ 2">
                    <Input value={projectDetails.students[1]} disabled style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item label="ชื่ออาจารย์ที่ปรึกษา">
                    <Input value={projectDetails.lecture} disabled style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16} style={{ marginTop: '16px' }}>
                <Col span={12} style={{ textAlign: 'right' }}>
                  <Button type="primary" onClick={handleApprove}>
                    อนุมัติการยื่นทดสอบโครงงาน
                  </Button>
                </Col>
                <Col span={12}>
                  <Button type="primary" danger onClick={handleReject}>
                    ปฏิเสธการยื่นทดสอบโครงงาน
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

