import { Layout } from "antd";
import { useEffect, useState } from "react";
import { UserList } from "./UserList";
import { ViewProfile } from "./ViewProfile";
import { EditProfile } from "./EditProfile";

const { Sider } = Layout;

export function AppSider() {
  const [users, setUsers] = useState();
  const [mode, setMode] = useState(0);

  useEffect(() => {
    function getUsers() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }

    getUsers();
  }, []);

  const components = [
    <UserList data={{ users }} setMode={setMode} />,
    <ViewProfile setMode={setMode} />,
    <EditProfile setMode={setMode} />,
  ];

  return (
    <Sider breakpoint="md" collapsedWidth="0" className="app-sider">
      {components[mode]}
    </Sider>
  );
}
