import React from 'react';
import style from "./Login.module.css";
import logo from "../../assert/logo.png";
import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    if (values.email === "Robiya" && values.password === "aliga") {
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.top_header}>
        <img src={logo} alt="Logo" />
      </div>
      <Form
        name="login_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
        className={style.form}
      >
          <Button className={style.button_sign_in} block="true" type="primary" htmlType="submit">
          Tizimga kirish
        </Button>
        {/* Username Field */}
        <label htmlFor="">Username</label>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Iltimos username qatorini to`ldiring!",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Username" autoComplete="email" />
        </Form.Item>

        {/* Password Field */}
        <label htmlFor="">Parol</label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Iltimos parol qatorini to`ldiring!",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Parol" autoComplete="current-password" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item style={{ marginBottom: "0px" }} className={style.box}>
          <Button className={style.button} block="true" type="primary" htmlType="submit">
            Kirish
          </Button>

        </Form.Item>
        <a className={style.password} href="./">
          Forgot password?
        </a>
      </Form>
    </div>
  );
};

export default Login;
