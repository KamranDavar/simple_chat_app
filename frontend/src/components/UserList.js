import { Button, Divider, List, Typography } from "antd";
import { useContext } from "react";
import { UserContext } from "../layout/MainLayout";

export function UserList({ setMode, data }) {
  const user = useContext(UserContext);

  return (
    <>
      <Button
        onClick={() => setMode(1)}
        shape="circle"
        icon={user?.username}
        className="header"
      />
      <Divider />
      <List
        className="user-list"
        dataSource={data.users}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>{item.username}</Typography.Text>
          </List.Item>
        )}
      />
    </>
  );
}
