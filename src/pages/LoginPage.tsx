import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/UI/Input";
import { Link } from "react-router-dom";

const client_id =
  "169949490168-u6gmk3q3opvpjs6ap58cqd3bcq1t64p7.apps.googleusercontent.com";
const redirect_uri = "http://127.0.0.1:5173/main";

const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&
response_type=token&
redirect_uri=${redirect_uri}&
scope=https://www.googleapis.com/auth/userinfo.email`;

interface loginInputsProps {
  email: string;
  password: string;
  test: string;
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
  return (
    <div className="flex flex-col items-center w-screen h-screen justify-evenly">
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
