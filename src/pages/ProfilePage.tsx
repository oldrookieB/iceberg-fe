import { useAuthStore } from "../store/auth";
import { Navigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const ProfilePage = () => {
  const { userEmail, isLogin } = useAuthStore();
  const logout = useLogout();

  // 로그인 상태가 아닐 시 로그인 페이지로 이동
  if (!isLogin) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div>
      <header>헤더</header>
      <button onClick={logout} className="btn">
        로그아웃
      </button>
      <div>{userEmail}</div>
    </div>
  );
};

export default ProfilePage;
