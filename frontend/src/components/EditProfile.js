import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Upload } from "antd";
import { useContext } from "react";
import { UserContext } from "../layout/MainLayout";


export function EditProfile({ setMode }) {
  const user = useContext(UserContext);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  return (
    <>
        <Button
          onClick={() => setMode(1)}
          shape="circle"
          icon={<ArrowLeftOutlined />}
          className="header"
        />
        <Divider/>
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={user}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="edit-profile"
      >
        <Form.Item label="picture" name="picture">
          <Upload>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="username" name="username">
          <Input placeholder="john" />
        </Form.Item>

        <Form.Item label="name" name="name">
          <Input placeholder="John Dou" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
