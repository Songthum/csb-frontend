import React, { useState } from "react";
import { Typography, Upload, Button, message, Modal } from "antd";
import cis from "../../../../public/image/cis.png";

const { Title, Paragraph } = Typography;

export default function ProjectEvaluation() {
  const [file, setFile] = useState(null); // State to hold the uploaded file
  const [previewVisible, setPreviewVisible] = useState(false); // State to control the preview modal
  const [fileUrl, setFileUrl] = useState(""); // State to hold the file URL for preview

  const handleUpload = (uploadedFile) => {
    setFile(uploadedFile); // Set the uploaded file to state
    setFileUrl(URL.createObjectURL(uploadedFile)); // Create a URL for the file
    return false; // Prevent automatic upload
  };

  const handleSubmit = () => {
    if (!file) {
      message.error("กรุณาอัปโหลดไฟล์ก่อนที่จะส่ง"); // Show an error message if no file is uploaded
      return;
    }

    // Here you would handle the file upload logic, e.g., send it to the server
    console.log("Submitting file: ", file);
    message.success("ส่งไฟล์สำเร็จ!"); // Show success message
  };

  const handlePreview = () => {
    setPreviewVisible(true); // Show the preview modal
  };

  const handleClosePreview = () => {
    setPreviewVisible(false); // Close the preview modal
  };

  return (
    <div style={{ margin: "auto", padding: 40, backgroundColor: "#fff", borderRadius: 10, maxWidth: 820 }}>
      <img src={cis} alt="logo" style={{ display: "block", margin: "0 auto", width: "150px" }} />
      <center><Title level={3}>ตรวจสอบคุณสมบัติยื่นโครงงานพิเศษ 1</Title></center>
      
      <Title level={5}>เกณฑ์การประเมิน</Title>
      <Paragraph>
        1. นักศึกษาโครงการพิเศษสองภาษาต้องลงทะเบียนเรียนวิชา 040613141 Special Project I<br/>
        2. นักศึกษาโครงการพิเศษสองภาษาได้ผลการเรียนรวม ≥ 102 หน่วยกิต และได้ผลการเรียนรายวิชาภาคฯ 0406xxxxx ≥ 57 หน่วยกิต<br/>
        3. โดยใช้ เอกสารใบรับรองผลการศึกษา (Transcript) หรือ บันทึกไฟล์ ผลการศึกษา จาก Reg Kmutnb<br/>
        <div style={{ marginLeft: "20px" }}> {/* Indentation for 3.1 and 3.2 */}
          3.1 เอกสารใบรับรองผลการศึกษา (Transcript) สามารถยื่นคำร้องได้ในระบบ Reg Kmutnb<br/>
          3.2 ผลการศึกษา สามารถ Ctrl + p  และเลือก Printer เป็น Microsoft Print to PDF และบันทึกไฟล์ได้
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
          {/* <Paragraph>
            <strong>ขนาดไฟล์: </strong> {(file.size / 1024).toFixed(2)} KB
          </Paragraph> */}
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