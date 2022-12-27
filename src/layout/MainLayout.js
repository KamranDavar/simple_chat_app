import { Layout } from "antd";
import { AppContent, AppSider } from "../components";
import { AppRouter } from "../router";

export function MainLayout() {
  return (
    <div className="layout-container">

    <Layout >
      <AppSider />
      <AppContent>
        <AppRouter />
      </AppContent>
    </Layout>
    </div>
  );
}
