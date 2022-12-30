import { Route, Routes } from "react-router-dom";
import { Chat, Error404 } from "../pages";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route element={<Error404 />} />
    </Routes>
  );
}
