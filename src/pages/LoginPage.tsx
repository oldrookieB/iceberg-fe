import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/UI/Input";

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
  return (
    <div className="flex flex-col items-center w-screen gap-10">
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
            message="이메일을 입력하세요"
            required
          />
          <Input
            label="비밀번호"
            type="password"
            errors={errors}
            register={register}
            message="비밀번호를 입력하세요"
            required
          />

          <button type="submit" className="w-full btn btn-primary my-4 ">
            로그인
          </button>
        </form>
      </section>

      <section className="flex justify-between w-80 ">
        <button className="bg-white border-gray-200 btn btn-lg btn-circle hover:border-gray-200 hover:bg-white ">
          <img className="w-10 h-10 " src="/img/github_icon.png" />
        </button>
        <button className="bg-white border-gray-200 btn btn-lg btn-circle hover:border-gray-200 hover:bg-white">
          <img src="/img/google_icon.png" />
        </button>
        <button className="bg-white border-0 btn btn-lg btn-circle hover:bg-white">
          <img src="/img/naver_icon.png" />
        </button>
      </section>

      <section className="flex justify-between w-80 items-center">
        <p>아직 회원이 아니신가요?</p>
        <button className="btn btn-ghost text-blue-500">회원가입</button>
      </section>
    </div>
  );
};

export default LoginPage;
