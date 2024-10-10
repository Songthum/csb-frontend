import React, { useState } from "react"; 
import { Typography, Upload, Button, message, Modal } from "antd";
import cis from "../../../../public/image/cis.png";
import axios from "axios";

const { Title, Paragraph } = Typography;

export default function ProjectEvaluation() {
  const [file, setFile] = useState(null); 
  const [previewVisible, setPreviewVisible] = useState(false); 
  const [fileUrl, setFileUrl] = useState(""); 

  const handleUpload = (uploadedFile) => {
    setFile(uploadedFile); 
    setFileUrl(URL.createObjectURL(uploadedFile)); 
    return false; 
  };

  const handleSubmit = async () => {
    if (!file) {
      message.error("กรุณาอัปโหลดไฟล์ก่อนที่จะส่ง");
      return;
    }

    const formData = new FormData();
    formData.append("files[]", file);
    formData.append("std", "6304062636121"); // เพิ่ม studentId ที่ต้องการ
    formData.append("stdName", "ทerdgjyhk"); // เพิ่ม studentName ที่ต้องการ

    try {
      const response = await fetch("http://localhost:9999/files", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        message.success("ส่งไฟล์สำเร็จ!");
      } else {
        message.error("การส่งไฟล์ล้มเหลว");
      }
      await handleFileUpload(6304062636121)

    } catch (error) {
      console.error("Error uploading file:", error);
      message.error("เกิดข้อผิดพลาดในการอัปโหลดไฟล์");
    }
  };

  const handleFileUpload = async (fi_id) => {
    try {
      await axios.patch(`http://localhost:9999/files/${fi_id}`);
    } catch (error) {
      console.error("Error updating file status:", error);
    }
  };

  const handlePreview = () => {
    setPreviewVisible(true); 
  };

  const handleClosePreview = () => {
    setPreviewVisible(false); 
  };

  return (
    <div style={{ margin: "auto", padding: 40, backgroundColor: "#fff", borderRadius: 10, maxWidth: 820 }}>
      <img src={cis} alt="logo" style={{ display: "block", margin: "0 auto", width: "150px" }} />
      <center><Title level={3}>ตรวจสอบคุณสมบัติยื่นโครงงานพิเศษ 1</Title></center>
      
      <Title level={5}>เกณฑ์การประเมิน</Title>
      <Paragraph>
        1. นักศึกษาโครงการพิเศษสองภาษาต้องลงทะเบียนเรียนวิชา 040613141 Special Project I<br/>
        2. นักศึกษาโครงการพิเศษสองภาษาได้ผลการเรียนรวม ≥ 102 หน่วยกิต และได้ผลการเรียนรายวิชาภาคฯ 0406xxxxx ≥ 57 หน่วยกิต<br/>
        3. โดยใช้ ผลการศึกษา จาก Reg Kmutnb<br/>
        <div style={{ marginLeft: "20px" }}>
          3.1 ผลการศึกษา สามารถ Ctrl + p  และเลือก Printer เป็น Microsoft Print to PDF และบันทึกไฟล์ได้
        </div>
      </Paragraph>

      <Upload beforeUpload={handleUpload} showUploadList={false}>
        <Button type="primary">อัปโหลดไฟล์</Button>
      </Upload>

      {file && (
        <div style={{ marginTop: 16 }}>
          <Paragraph>
            <strong>ชื่อไฟล์ที่อัปโหลด: </strong> {file.name}
          </Paragraph>
          <Button type="default" onClick={handlePreview} style={{ marginTop: 10 }}>
            ดูไฟล์
          </Button>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Button type="primary" onClick={handleSubmit}>
          ส่งไฟล์
        </Button>
      </div>

      <Modal
        title="ดูไฟล์"
        visible={previewVisible}
        footer={null}
        onCancel={handleClosePreview}
        width={1000} 
        style={{ top: 20 }} 
      >
        <iframe
          src={fileUrl}
          style={{ width: "100%", height: "600px" }}
          title="File Preview"
        />
      </Modal>
    </div>
  );
}
