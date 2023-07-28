import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./../pages/HomePage";
import { ProfilePage } from "./../pages/ProfilePage";
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/account" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
