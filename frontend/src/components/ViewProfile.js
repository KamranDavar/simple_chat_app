import { Button, Divider, Image } from "antd";
import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons";
import { UserContext } from "../layout/MainLayout";
import { useContext } from "react";

export function ViewProfile({ setMode }) {
  const user = useContext(UserContext);

  return (
    <div className="view-profile">
      <Button
        onClick={() => setMode(0)}
        shape="circle"
        icon={<ArrowLeftOutlined />}
        className="header"
      />
      <Divider />

      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <p>
        name: {user.name} <br /> username: {user.username}
      </p>
      <Button
        onClick={() => setMode(2)}
        shape="circle"
        icon={<EditOutlined />}
        className="header"
      />
    </div>
  );
}
