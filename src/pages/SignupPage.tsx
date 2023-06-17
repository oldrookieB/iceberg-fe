import SignupForm from "../components/signup/SignupForm";
import Layout from "../components/ui/Layout";
import { useAuthStore } from "../store/auth";
import { Navigate } from "react-router-dom";

const SignupPage = () => {
  const { isLogin } = useAuthStore();

  return (
    <Layout evenly>
      <header className="flex justify-center text-6xl font-bold">
        Iceberg
      </header>

      {/* 회원가입 */}
      <SignupForm />

      {/* justify 정렬을 위한 빈 공간 */}
      <div className="h-10" />
    </Layout>
  );
};

export default SignupPage;
