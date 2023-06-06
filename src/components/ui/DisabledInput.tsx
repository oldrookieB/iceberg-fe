import React from "react";

interface DisabledInputProps {
  label: string;
  defaultValue: string;
}

// Disabled 처리 된 Input
const DisabledInput = (props: DisabledInputProps) => {
  return (
    <div className="flex flex-col w-full">
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <input
        disabled
        defaultValue={props.defaultValue}
        id={props.label}
        type="text"
        className="w-full input input-bordered"
      />
    </div>
  );
};

export default DisabledInput;
