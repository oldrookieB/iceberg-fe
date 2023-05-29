import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/ui/Input";
import DuplicationInput from "../components/ui/DuplicationInput";
import { useAuthStore } from "../store/auth";
import { Navigate } from "react-router-dom";

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
      {/* 이메일로 로그인 */}
      <section className="flex justify-center w-full ">
        <form
          id="signupForm"
          className="flex flex-col items-center gap-2 w-80"
          onSubmit={handleSubmit(onSubmit)}
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
