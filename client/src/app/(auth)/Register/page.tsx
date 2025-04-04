"use client";
import { MailOutlined, MobileOutlined } from "@ant-design/icons";
import {  Button,  Col,  Divider,  Flex,  Input,  Row,  Space,  Typography,} from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import googleicon from "../../../../public/google.png";
import fbicon from "../../../../public/fb.png";
import axios from 'axios';

export default function RegisterPage() {
  const [mobileNo, setMobileNo] = useState("");
  const [mail, setMail] = useState("");

  return (
    <>
  <Flex  className="bg-lp" vertical>

      <div className="LoginlayoutStyle">
        <Row>
          <Col lg={10} xs={24} sm={12} className="bg-lp-div">
            <Flex justify="space-between"  style={{ margin: 20}}            >
            <Link href={"/"}>
            <img src="goodseva-logo.png" alt=" Goodseva logo" height={50}/>
            </Link>
            </Flex>
            <div style={{ margin: 20 }}>
              <Typography.Title id="login-text">Register</Typography.Title>
              <Typography.Title level={3} id="login-para">
                Very good works are waiting for you
              </Typography.Title>
              </div>      
            <Flex className="input-details" vertical gap={30} align="flex-end">
                <Input size="large" placeholder=" Mobile Number" prefix={<MobileOutlined />} id="mobile-input" type="number" value={mobileNo}
                onChange={(e) => { setMobileNo(e.target.value); }}
              />
              <Input size="large" placeholder=" Email" prefix={<MailOutlined />} id="email-input" value={mail}
                onChange={(e) => { setMail(e.target.value); }}
              />
              <Link href={`/Register/${mobileNo}/step1`}>
                <Button id="otp-button">Get OTP</Button>
              </Link>
            </Flex>
            <div className="providers">
              <Divider style={{ borderColor: "lightgray" }}>
                <span>
                  <b>Login</b>
                </span>{" "}
                <span style={{ color: "#525252" }}>With Others</span>
              </Divider>
              <Flex justify="center" gap={30}>
                <Image
                  width="48"
                  height="48"
                  src={googleicon}
                  alt="google-logo"
                  loading="lazy"
                />
                <Image
                  width="48"
                  height="48"
                  src={fbicon}
                  alt="facebook"
                  loading="lazy"
                />
              </Flex>
            </div>
          </Col>
          <Col lg={14} xs={24} sm={12}></Col>
        </Row>
      </div>

    </Flex>
  </>
    
  );
}
