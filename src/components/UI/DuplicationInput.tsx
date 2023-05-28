import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
} from "react-hook-form";

interface InputProps {
  label: string;
  type: string;
  register: UseFormRegister<any>;
  getValues: UseFormGetValues<any>;
  checkFor: string; // 중복을 확인 할 대상의 label
  errors: FieldErrors<any>;
  required: boolean;
}

// checkFor에서 입력받은 label 과 같은 값을 가졌는지 확인하는 커스텀 Input
const DuplicationInput = (props: InputProps) => {
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
          required: { value: true, message: `${props.label}을 입력하세요.` },
          validate: (value) =>
            value === props.getValues(props.checkFor) ||
            `${props.checkFor}와 같지 않습니다.`,
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

export default DuplicationInput;
