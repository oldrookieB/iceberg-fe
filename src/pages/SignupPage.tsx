import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/UI/Input";
import DuplicationInput from "../components/UI/DuplicationInput";

interface loginInputsProps {
  email: string;
  password: string;
  test: string;
}
const SignupPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<loginInputsProps>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  const onError: SubmitHandler<any> = (data) => console.log(data);
  return (
    <div className="flex flex-col items-center w-screen min-h-screen justify-evenly">
      <header className="flex justify-center text-6xl font-bold">
        Iceberg
      </header>
      {/* 이메일로 로그인 */}
      <section className="flex justify-center w-full ">
        <form
          id="signupForm"
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
          <DuplicationInput
            label="비밀번호 확인"
            type="password"
            errors={errors}
            register={register}
            getValues={getValues}
            checkFor="비밀번호"
            required
          />

          <button type="submit" className="w-full btn btn-primary my-3 ">
            회원가입
          </button>
        </form>
      </section>
      {/* justify 정렬을 위한 빈 공간 */}
      <section className="h-10"></section>
    </div>
  );
};

export default SignupPage;
