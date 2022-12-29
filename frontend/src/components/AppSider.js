import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
const { Sider } = Layout;

export function AppSider(props) {
  const [users, setUsers] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    function getUsers() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }
    getUsers();
  }, []);
  const items = users.map((user) => {
    return {
      label: user.name,
      key: user.id,
    };
  });

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
