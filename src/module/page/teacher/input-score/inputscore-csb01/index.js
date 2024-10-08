import React, { useState, useEffect } from "react";
import { Table, InputNumber, Form, Button, Card, Input } from "antd";

const { TextArea } = Input;

export default function InputScoreCSB01() {
    const studentInfo = {
        studentID: ["6304062636120", "6304062620061"],
        students: ["ทรงธรรม คงสมปราชญ์", "ณัชริกา กันทะสอน"],
        projectName: "AI-Powered Chatbot",
        TprojectName: "รองศาสตราจารย์ ดร.ธนภัทร์ อนุศาสน์อมรกุล",
    };

    const criteriaData = [
        { key: "1", criteria: "การแนะนำสมาชิกและการแนะนำระบบที่จะพัฒนา", maxScore: 3 },
        { key: "2", criteria: "พิจารณาถึงเนื้อหาในสไลด์และวิธีนำเสนองาน", maxScore: 3 },
        { key: "3", criteria: "ที่มาของปัญหา และหลักฐานสนับสนุน", maxScore: 3 },
        { key: "4", criteria: "แนวคิด / หลักการสามารถแก้ปัญหาได้", maxScore: 3 },
        { key: "5", criteria: "การนำเสนอต้นแบบของระบบ เช่น mockup / wirefreame / story board / system architecture", maxScore: 3 },
        { key: "6", criteria: "การกำหนดกลุ่มเป้าหมายของระบบ และผลกระทบที่คาดว่าจะได้รับ", maxScore: 3 },
        { key: "7", criteria: "การศึกษา เปรียบเทียบจุดเด่นและเจุดด้อยของระบบใกล้เคียง หรือระบบที่เกี่ยวข้อง", maxScore: 3 },
        { key: "8", criteria: "การต่อยอดงานในอนาคต", maxScore: 3 },
        { key: "9", criteria: "ศึกษาเทคนิค/วิธีการที่เกี่ยวข้องและข้อจำกัดของอุปกรณ์หรือระบบที่เกี่ยวข้อง", maxScore: 3 },
        { key: "10", criteria: "การเลือกใช้วิธี / เทคโนโลยีที่ถูกต้องและเหมาะสม ", maxScore: 3 },
        { key: "11", criteria: "ลักษณะงาน ขอบเขตที่เหมาะสมกับปริญญานิพนธ์ในสาขาวิชาวิทยาการคอมพิวเตอร์ รวมถึงปริมาณงานเหมาะสมตามกรอบเวลา", maxScore: 3 },

    ];

    const additionalData = [
        {
            detail1: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการแนะนำสมาชิก<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการเเนะนำระบบ / Application ถ้วน
                </div>
            ),
            detail2: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการแนะนำบางส่วนแต่ไม่ครบถ้วน

                </div>
            ),
            detail3: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    <u>ไม่</u>มีการแนะนำสมาชิกหรือแนะนำระบบเลย
                </div>
            ),
        },
        {
            detail1: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการสื่อกับผู้ฟัง สบตา น้ำเสียงน่าติดตาม พูดฉะฉาน ชัดถ้อยชัดคำ<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการนำเสนอน่าติดตามตลอดการบรรยาย<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    เนื้อหากระชับ ครบถ้วน
                </div>
            ),
            detail2: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการสื่อกับผู้ฟัง สบตาบ้าง<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    การนำเสนอน่าติดตามในบางช่วง<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    ความยาวเนื้อหาไม่เหมาะสม
                </div>
            ),
            detail3: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    <u>ไม่</u>มีการสื่อกับผู้ฟัง หรือ<u>ไม่</u>สบตา<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    การที่นำเสนอ<u>ไม่</u>น่าติดตาม<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    ความยาวเนื้อหา<u>ไม่</u>เหมาะสม
                </div>
            ),
        },
        {
            detail1: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    นำเสนอปัญหาตรงเป้า<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีข้อมูล หลักการ หรือผลทดสอบสนับสนุนการนำเสนอ<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    ใช้เเหล่งข้อมูลอ้างอิงที่มีความน่าเชื่อถือ
                </div>
            ),
            detail2: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    ปัญหาที่นำเสนอครอบคลุมบางส่วน<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีร่องรอยของหลักฐาน เช่น ข้อมูล หลักการ หรือผลทดสอบสนับสนุน
                </div>
            ),
            detail3: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    ระบุปัญหา<u>ไม่</u>ตรงเป้าหรือไม่ใช่ปัญหา<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    <u>ไม่</u>มีข้อมูล หลักการ หรือ ผลทดสอบ เพื่อสนับสนุนการนำเสนอปัญหา
                </div>
            ),
        },
        {
            detail1: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    แนวทางหรือหลักการ สามารถแก้ปัญหาได้อย่างสมบูรณ์<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    เป็นวิธีการที่มีประสิทธิภาพและมีความเหมาะสม
                </div>
            ),
            detail2: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    แนวทางการแก้ปัญหาได้บางส่วน แต่อาจยังไม่ครบถ้วน<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    แนวทางหรือหลักการยังไม่มีประสิทธิภาพเท่าที่ควร
                </div>
            ),
            detail3: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    แนวทางหรือหลักการที่นำเสนอแก้ปัญหา<u>ไม่</u>ตรงเป้า
                </div>
            ),
        },
        {
            detail1: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    ต้นแบบของระบบ มีความครบถ้วนและสมบูรณ์<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    System architecture ถูกต้องและครบถ้วน
                </div>
            ),
            detail2: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    นำเสนอต้นแบบของระบบ แต่ไม่ครบถ้วน<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการนำเสนอ system architecture แต่ไม่ครบถ้วน
                </div>
            ),
            detail3: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    <u>ไม่มี</u>ต้นแบบของระบบ<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    <u>ไม่มี</u>system architecture
                </div>
            ),
        },
        {
            detail1: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    ระบุกลุ่มเป้าหมายที่ชัดเจนและถูกต้อง<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการศึกษาผลกระทบต่อกลุ่มเป้าหมายที่คาดว่าจะได้รับ
                </div>
            ),
            detail2: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการระบุกลุ่มเป้าหมาย แต่ไม่ชัดเจนหรือไม่ถูกต้อง<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีร่องรอยการศึกษาผลกระทบต่อกลุ่มเป้าหมาย
                </div>
            ),
            detail3: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    <u>ไม่มี</u>การกำหนดกลุ่มเป้าหมายของระบบงานที่นำเสนอ
                </div>
            ),
        },
        {
            detail1: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการศึกษาระบบที่ใกล้เคียง/เกี่ยวข้องอย่างน้อย 2 ระบบ<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการนำเสนอจุดเด่นและจุดด้อยของงานที่พัฒนา<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการเปรียบเทียบระบบที่จะพัฒนาและระบบใกล้เคียง
                </div>
            ),
            detail2: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีร่องรอยการศึกษาระบบที่ใกล้เคียงหรือเกี่ยวข้อง<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการนำเสนอจุดเด่นและจุดด้อยของงานที่พัฒนา
                </div>
            ),
            detail3: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    <u>ไม่มี</u>ร่องรอยการศึกษาระบบที่ใกล้เคียงหรือเกี่ยวข้อง<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    ไม่มีการนำเสนอจุดเด่นและจุดด้อยของงานที่จะพัฒนา
                </div>
            ),
        },
        {
            detail1: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการนำเสนอแนวคิดต่อยอดไปข้างหน้าที่ชัดเจน
                </div>
            ),
            detail2: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการนำเสนอแต่ไม่ชัดเจน
                </div>
            ),
            detail3: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    <u>ไม่มี</u>การนำเสนอการต่อยอดงาน
                </div>
            ),
        },
        {
            detail1: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการศึกษาความเป็นไปได้ของวิธีการ รวมทั้งระบบงานที่เกี่ยวข้องงเป็นอย่างดี<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีการศึกษาถึงข้อจำกัดของอุปกรณ์/ระบบที่เกี่ยวข้อง
                </div>
            ),
            detail2: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    มีร่องรอยของการศึกษาความเป็นไปได้ของงานหรือระบบที่เกี่ยวข้อง
                </div>
            ),
            detail3: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    <u>ไม่มี</u>การศึกษาความเป็นไปได้ของวิธีการ หรือ<u>ไม่มี</u>การศึกษาถึงข้อจำกัดของอุปกรณ์/ระบบที่เกี่ยวข้อง
                </div>
            ),
        },
        {
            detail1: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    วิธีการหรือเทคโนโลยีมีความเหมาะสม<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    เป็นวิธีการหรือเทคโรโลยีที่ใช้ทันสมัย และเป็นปัจจุบัน
                </div>
            ),
            detail2: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    วิธีการหรือเทคโนโลยีมีความเหมาะสม แต่มีความยุ่งยากหรือซับซ้อนเกินไป<br />
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    วิธีการไม่มีความทันสมัยและเป็นปัจจุบัน
                </div>
            ),
            detail3: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    วิธีการหรือเทคโนโลยี<u>ไม่</u>เหมาะสมกับปัญหา
                </div>
            ),
        },
        {
            detail1: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    ขอบเขตและปริมาณงานมีความเหมาะสมสำหรับปริญญานิพนธ์ในสาขาวิชาวิทยาการคอมพิวเตอร์
                </div>
            ),
            detail2: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    ขอบเขตและปริมาณงานมีน้อย หรืออาจไม่เหมาะสมกับปริญญานิพนธ์ในสาขาวิทยาการคอมพิวเตอร์
                </div>
            ),
            detail3: (
                <div>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', marginRight: '5px', marginBottom: '3px' }}></span>
                    ขอบเขตและปริมาณงานมีน้อย และ<u>ไม่</u>เหมาะสมกับปริญญานิพนธ์ในสาขาวิชาวิทยาการคอมพิวเตอร์
                </div>
            ),
        },
    ];

    const [scores, setScores] = useState({});
    const [totalScore, setTotalScore] = useState(0);
    const [comment, setComment] = useState("");

    const handleScoreChange = (value, key) => {
        setScores((prevScores) => ({
            ...prevScores,
            [key]: value,
        }));
    };

    useEffect(() => {
        const total = criteriaData.reduce((sum, item) => {
            return sum + (scores[item.key] || 0);
        }, 0);
        setTotalScore(total);
    }, [scores]);


    const onSubmit = () => {
        const result = {
            totalScore,
            comment,
        };
        console.log("Result submitted: ", result);
        setScores({});
        setComment("");
    };


    const columns = [
        {
            title: "เกณฑ์พิจารณา",
            dataIndex: "criteria",
            key: "criteria",
        },
        {
            title: "คะแนนเต็ม",
            dataIndex: "maxScore",
            key: "maxScore",
        },
        {
            title: "คะแนนที่ได้",
            key: "score",
            render: (text, record) => (
                record.key === "total" ? (
                    <strong>{totalScore}</strong>
                ) : (
                    <InputNumber
                        min={0}
                        max={record.maxScore}
                        value={scores[record.key] || 0}
                        onChange={(value) => handleScoreChange(value, record.key)}
                    />
                )
            ),
        },
        {
            title: "เกณฑ์คะแนน",
            children: [
                {
                    title: "3",
                    dataIndex: "detail1",
                    key: "detail1",
                    render: (text, record) => <span>{additionalData[parseInt(record.key) - 1]?.detail1}</span>,
                },
                {
                    title: "2",
                    dataIndex: "detail2",
                    key: "detail2",
                    render: (text, record) => <span>{additionalData[parseInt(record.key) - 1]?.detail2}</span>,
                },
                {
                    title: "1",
                    dataIndex: "detail3",
                    key: "detail3",
                    render: (text, record) => <span>{additionalData[parseInt(record.key) - 1]?.detail3}</span>,
                },
            ],
        },
    ];

    const totalScoreRow = {
        key: "total",
        criteria: <strong>คะแนนรวม</strong>,
        maxScore: criteriaData.reduce((total, item) => total + item.maxScore, 0),
        score: totalScore,
    };

    const tableData = [...criteriaData, totalScoreRow];

    return (
        <div style={{ padding: "20px" }}>
            <Card title="ข้อมูลนักศึกษาและโครงงาน" style={{ marginBottom: "20px" }}>
                <p><strong>ชื่อโครงงาน : </strong> {studentInfo.projectName}</p>
                {studentInfo.students.map((student, index) => (
                    <p key={index}><strong>นักศึกษาคนที่ {index + 1} </strong>: {student}</p>
                ))}
                <p><strong>อาจารย์ที่ปรึกษา : </strong> {studentInfo.TprojectName}</p>
            </Card>

            <Card title="ฟอร์มกรอกคะแนน">
                <Form onFinish={onSubmit}>
                    <Table
                        dataSource={tableData}
                        columns={columns}
                        pagination={false}
                        bordered
                    />

                    <Form.Item label="ความคิดเห็นจากอาจารย์" style={{ marginTop: "20px" }}>
                        <TextArea
                            rows={4}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="กรุณากรอกความคิดเห็น"
                        />
                    </Form.Item>

                    <Form.Item style={{ marginTop: "20px" }}>
                        <Button type="primary" htmlType="submit">
                            ส่งคะแนน
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

