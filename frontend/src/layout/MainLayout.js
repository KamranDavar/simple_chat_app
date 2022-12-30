import { Layout } from "antd";
import { createContext } from "react";
import { AppContent, AppSider } from "../components";
import { useProfile } from "../hooks";
import { AppRouter } from "../router";

export const UserContext = createContext();
export function MainLayout() {
  const { profile } = useProfile();

  return (
    <div className="layout-container">
      <UserContext.Provider value={profile}>
        <Layout>
          <AppSider />
          <AppContent>
            <AppRouter />
          </AppContent>
        </Layout>
      </UserContext.Provider>
    </div>
  );
}
