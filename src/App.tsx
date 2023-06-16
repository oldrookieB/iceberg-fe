import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import AuthRedirect from "./pages/AuthRedirect";
import AddProjectPage from "./pages/AddProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import MyProjectPage from "./pages/MyProjectPage";
import AuthRoute from "./pages/AuthRoute";

function App() {
  return (
    <Routes>
      {/* 권한이 필요하지 않은 페이지 */}
      <Route element={<AuthRoute auth />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
      {/* 권한이 필요한 페이지 */}
      <Route element={<AuthRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/myproject" element={<MyProjectPage />} />
        <Route path="/addproject" element={<AddProjectPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Route>
      {/* OAuth 리디렉션 페이지 */}
      <Route path="/authredirect/:provider" element={<AuthRedirect />} />
    </Routes>
  );
}

export default App;
