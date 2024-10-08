import React, { useState, useEffect } from 'react';
import { Select, Input, Button, Form, Row, Col, message } from 'antd';

function ProjectApproval() {
  const [projects, setProjects] = useState([]);
  const [approvedProjects, setApprovedProjects] = useState(new Set());
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectDetails, setProjectDetails] = useState(null);

  // Mocked projects data
  const mockProjects = [
    { Er_Pname: 'Project A', students: ['Student 1A', 'Student 2A'], advisor: 'Advisor A' },
    { Er_Pname: 'Project B', students: ['Student 1B', 'Student 2B'], advisor: 'Advisor B' },
    { Er_Pname: 'Project C', students: ['Student 1C', 'Student 2C'], advisor: 'Advisor C' },
  ];

  // Fetching mocked project data
  useEffect(() => {
    setProjects(mockProjects);
  }, []);

  // Function to handle project selection
  const handleProjectChange = (value) => {
    const selected = projects.find((p) => p.Er_Pname === value);
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

    message.success(`อนุมัติโครงงาน ${selectedProject.Er_Pname} สำเร็จ`);

    // Add project to approved projects
    setApprovedProjects((prev) => new Set(prev).add(selectedProject.Er_Pname));

    // Clear the form after submission
    resetForm();
  };

  const handleReject = () => {
    if (!selectedProject) {
      message.warning('กรุณาเลือกชื่อโครงงานก่อน');
      return;
    }

    message.warning(`ปฏิเสธการยื่นทดสอบโครงงาน ${selectedProject.Er_Pname}`);
    resetForm();
  };

  // Filter out approved projects from the project list
  const filteredProjects = projects.filter((project) => !approvedProjects.has(project.Er_Pname));

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <h1>อนุมัติการยื่นทดสอบโครงงาน</h1>

      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="เลือกชื่อโครงงาน">
              <Select
                value={selectedProject?.Er_Pname || ''}
                onChange={handleProjectChange}
                placeholder="เลือกโครงงาน"
                style={{
                  width: '100%',
                  border: '1px solid #d9d9d9',
                  borderRadius: '4px',
                }}
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
                  <Input value={projectDetails.students[0]} disabled style={{ width: '100%', borderRadius: '4px' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="ชื่อ-สกุลนักศึกษาคนที่ 2">
                  <Input value={projectDetails.students[1]} disabled style={{ width: '100%', borderRadius: '4px' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="ชื่ออาจารย์ที่ปรึกษา">
                  <Input value={projectDetails.advisor} disabled style={{ width: '100%', borderRadius: '4px' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: '16px' }}>
              <Col>
                <Button
                  type="primary"
                  onClick={handleApprove}
                  style={{ backgroundColor: '#1890ff', border: 'none', borderRadius: '4px', padding: '6px 16px' }}
                >
                  อนุมัติการยื่นทดสอบโครงงาน
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={handleReject}
                  style={{
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #d9d9d9',
                    borderRadius: '4px',
                    padding: '6px 16px',
                  }}
                >
                  ปฏิเสธการยื่นทดสอบโครงงาน
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Form>
    </div>
  );
}

export default ProjectApproval;
