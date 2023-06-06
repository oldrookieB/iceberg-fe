import { UseFormRegister, FieldErrors } from "react-hook-form";

interface Input {
  [inputLabel: string]: string;
}

interface InputProps {
  label: string; // 해당 input의 이름입니다.
  type: string;
  register: UseFormRegister<Input>;
  errors: FieldErrors<Input>;
  required: boolean;
}

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={props.label} className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <input
        id={props.label}
        type={props.type}
        className={
          props.errors[props.label]
            ? "w-full  input input-bordered input-error"
            : "w-full  input input-bordered "
        }
        {...props.register(props.label, {
          required: {
            value: true,
            message: `${props.label}를 입력하세요.`,
          },
        })}
      />
      {props.errors[props.label] && (
        <label className="label">
          <span className="text-red-500 label-text">
            {props.errors[props.label]?.message?.toString()}
          </span>
        </label>
      )}
    </div>
  );
};

export default Input;
