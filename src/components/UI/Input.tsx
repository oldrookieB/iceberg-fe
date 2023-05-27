import { UseFormRegister, FieldErrors } from "react-hook-form";

interface InputProps {
  label: string;
  type: string;
  register?: UseFormRegister<any>;
  errors?: FieldErrors<any>;
  defaultValue?: string;
  required: boolean;
}

const Input = (props: InputProps) => {
  if (props.register && props.errors) {
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
  } else {
    return (
      <div className="flex flex-col w-full">
        <label htmlFor={props.label} className="label">
          <span className="label-text">{props.label}</span>
        </label>
        <input
          disabled
          defaultValue={props.defaultValue}
          id={props.label}
          type={props.type}
          className="w-full  input input-bordered"
        />
      </div>
    );
  }
};

export default Input;
