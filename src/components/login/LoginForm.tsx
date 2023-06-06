import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../ui/Input";

interface LoginInputs {
  [inputLable: string]: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);
  const onError: SubmitHandler<LoginInputs> = (data) => console.log(data);
  return (
    <section className="flex justify-center w-full ">
      <form
        id="loginForm"
        className="flex flex-col items-center gap-2 w-80"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="아이디"
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
  );
};

export default LoginForm;
