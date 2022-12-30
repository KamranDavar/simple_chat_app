import { Layout } from "antd";
import { createContext, useEffect, useState } from "react";
import { AppContent, AppSider } from "../components";
import { AppRouter } from "../router";

export const UserContext = createContext();
export function MainLayout() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    function getProfile() {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${Math.floor(
          Math.random() * 10
        )}`
      )
        .then((response) => response.json())
        .then((json) => setProfile(json));
    }
    getProfile();
  }, []);

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
