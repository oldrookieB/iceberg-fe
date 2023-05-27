import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/UI/Input";
import { Link, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_REDIRECT_URI } = import.meta.env;

const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${VITE_GOOGLE_CLIENT_ID}&
response_type=token&
redirect_uri=${VITE_GOOGLE_REDIRECT_URI}&
scope=https://www.googleapis.com/auth/userinfo.email`;

interface loginInputsProps {
  email: string;
  password: string;
}
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginInputsProps>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  const onError: SubmitHandler<any> = (data) => console.log(data);

  const googleOAuthHandler = () => {
    window.location.assign(oAuthURL);
  };

  const { isLogin } = useAuthStore();

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
      {/* 이메일로 로그인 */}
      <section className="flex justify-center w-full ">
        <form
          id="loginForm"
          className="flex flex-col items-center gap-2 w-80"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <Input
            label="이메일"
            type="text"
            errors={errors}
            register={register}
            required
          />
          <Input
            label="비밀번호"
            type="password"
            errors={errors}
            register={register}
            required
          />

          <button type="submit" className="w-full btn btn-primary my-3 ">
            로그인
          </button>
        </form>
      </section>

      <section className="flex flex-col w-80 gap-4">
        <label className="label">
          <span>소셜 계정으로 로그인</span>
        </label>
        <div className="flex justify-between">
          <button className="bg-white border-gray-200 btn btn-lg btn-circle hover:border-gray-200 hover:bg-white ">
            <img className="w-10 h-10 " src="/img/github_icon.png" />
          </button>
          <button
            onClick={googleOAuthHandler}
            className="bg-white border-gray-200 btn btn-lg btn-circle hover:border-gray-200 hover:bg-white"
          >
            <img src="/img/google_icon.png" />
          </button>
          <button className="bg-white border-0 btn btn-lg btn-circle hover:bg-white">
            <img src="/img/naver_icon.png" />
          </button>
        </div>
      </section>

      <section className="flex justify-between w-80 items-center">
        <p>아직 회원이 아니신가요?</p>
        <Link to="/signup" className="btn btn-ghost text-blue-500">
          회원가입
        </Link>
      </section>
    </div>
  );
};

export default LoginPage;
