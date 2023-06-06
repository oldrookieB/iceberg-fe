import React from "react";
import { TECHSTACKS } from "../../constants/techStacks";

interface TechButtonProps {
  title: string;
  isSelected?: boolean;
  onClick?: (select: string) => void;
}

const TechButton = (props: TechButtonProps) => {
  const techstack = TECHSTACKS.filter(
    (techstack) => techstack.title === props.title
  )[0];

  let btnClass =
    "btn btn-outline border-gray-300 hover:bg-white hover:text-black";
  let btnStyle = {};

  if (props.isSelected) {
    btnClass = "btn";
    btnStyle = {
      background: techstack.bgColor,
      color: techstack.txtColor,
      borderColor: techstack.bgColor,
    };
  }

  const onClickHandler = () => {
    props.onClick?.(props.title);
  };
  return (
    <div onClick={onClickHandler} style={btnStyle} className={btnClass}>
      {props.title}
    </div>
  );
};

export default TechButton;
