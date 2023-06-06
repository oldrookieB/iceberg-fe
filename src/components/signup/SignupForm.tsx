import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../ui/Input";
import DuplicationInput from "../ui/DuplicationInput";

interface SignupInputs {
  [inputLable: string]: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignupInputs>();
  const onSubmit: SubmitHandler<SignupInputs> = (data) => console.log(data);
  const onError: SubmitHandler<SignupInputs> = (data) => console.log(data);

  return (
    <section className="flex justify-center w-full ">
      <form
        id="signupForm"
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
  );
};

export default SignupForm;
