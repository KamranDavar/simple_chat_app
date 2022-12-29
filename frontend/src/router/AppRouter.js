import { Route, Routes } from "react-router-dom";
import { Messages, Error404, Home } from "../pages";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Messages />} />
      <Route element={<Error404 />} />
    </Routes>
  );
}
