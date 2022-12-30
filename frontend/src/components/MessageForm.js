import { Button, Col, Form, Input, Row } from "antd";
import { useContext } from "react";
import { UserContext } from "../layout/MainLayout";

export function MessageForm({ socket }) {
  const [form] = Form.useForm();
  const user = useContext(UserContext);
  const onFinish = (values) => {
    socket.emit("chatMessage", {
      message: values.message,
      username: user.username,
    });
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row className="message-form" justify="center">
          <Col xs={18} md={20} lg={22}>
            <Form.Item name="message">
              <Input placeholder="type message" />
            </Form.Item>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
