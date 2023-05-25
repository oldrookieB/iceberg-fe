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
    <div className="flex flex-col items-center w-screen">
      <header className="flex justify-center text-6xl font-bold">
        Iceberg
      </header>
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

          <button type="submit" className="w-full btn btn-primary ">
            로그인
          </button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
