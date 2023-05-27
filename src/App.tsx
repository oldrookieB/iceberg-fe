import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import AuthRedirect from "./pages/AuthRedirect";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/authredirect/:provider" element={<AuthRedirect />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
