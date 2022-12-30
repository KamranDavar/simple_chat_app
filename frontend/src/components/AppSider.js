import { Layout } from "antd";
import { useState } from "react";
import { UserList } from "./UserList";
import { ViewProfile } from "./ViewProfile";
import { EditProfile } from "./EditProfile";
import { useUsers } from "../hooks";

const { Sider } = Layout;

export function AppSider() {
  const [mode, setMode] = useState(0);
  const { users } = useUsers();

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
