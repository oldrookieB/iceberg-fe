import { Link, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

import Layout from "../components/ui/Layout";
import LoginForm from "../components/login/LoginForm";
import SocialLogin from "../components/login/SocialLogin";
import NotUser from "../components/login/NotUser";
import useTestLogin from "../hooks/useTestLogin";

const LoginPage = () => {
  const { isLogin } = useAuthStore();
  const testLogin = useTestLogin();

  return (
    <Layout evenly>
      <header className="flex justify-center w-60 ">
        <img src="/img/iceberg_logo.png" />
      </header>

      {/* 자체 로그인 */}
      <LoginForm />

      {/* 소셜 로그인 */}
      <SocialLogin />

      <NotUser />
      <button onClick={testLogin} className="btn">
        테스트 로그인
      </button>
    </Layout>
  );
};

export default LoginPage;
