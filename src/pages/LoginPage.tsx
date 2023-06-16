import { Link, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

import LoginForm from "../components/login/LoginForm";
import SocialLogin from "../components/login/SocialLogin";
import NotUser from "../components/login/NotUser";
import useTestLogin from "../hooks/useTestLogin";

const LoginPage = () => {
  const { isLogin } = useAuthStore();
  const testLogin = useTestLogin();

  // 로그인 상태일시 메인 페이지로 이동 (메인페이지 작업중이므로 임시로 프로필로 이동)
  // TODO: 메인 페이지로 이동하게끔 변경
  if (isLogin) {
    return <Navigate to="/profile"></Navigate>;
  }

  return (
    <div className="flex flex-col items-center w-screen min-h-screen justify-evenly">
      <header className="flex justify-center text-6xl font-bold">
        Iceberg
      </header>

      {/* 자체 로그인 */}
      <LoginForm />

      {/* 소셜 로그인 */}
      <SocialLogin />

      <NotUser />
      <button onClick={testLogin} className="btn">
        테스트 로그인
      </button>
    </div>
  );
};

export default LoginPage;
