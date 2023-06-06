import SignupForm from "../components/signup/SignupForm";
import { useAuthStore } from "../store/auth";
import { Navigate } from "react-router-dom";

const SignupPage = () => {
  const { isLogin } = useAuthStore();

  // 로그인 상태일시 메인 페이지로 이동 (메인페이지 작업중이므로 임시로 프로필로 이동)
  // TODO: 메인 페이지로 이동하게끔 변경
  if (isLogin) {
    return <Navigate to="/profile"></Navigate>;
  }

  return (
    <div className="flex flex-col items-center w-screen min-h-screen justify-evenly p-10">
      <header className="flex justify-center text-6xl font-bold">
        Iceberg
      </header>

      {/* 회원가입 */}
      <SignupForm />

      {/* justify 정렬을 위한 빈 공간 */}
      <div className="h-10" />
    </div>
  );
};

export default SignupPage;
