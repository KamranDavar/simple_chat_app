import * as React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

const users = [
  { name: "Saam", id: 10000 },
  { name: "Leyla", id: 10001 },
  { name: "Kami", id: 10002 },
];

const items = users.map((user) => {
  return {
    label: user.name,
    key: user.id,
  };
});

export function AppSider(props) {
  let navigate = useNavigate();
  return (
    <Sider>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={items}
        onClick={(item) => navigate(`${item.key}`)}
      />
    </Sider>
  );
}
