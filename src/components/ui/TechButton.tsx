import React from "react";

interface TechButtonProps {
  title: string;
  selected?: boolean;
  onClick?: (select: string) => void;
}

const TechStyles = [
  { title: "react", bgColor: "#61dafb", txtColor: "black" },
  { title: "python", bgColor: "#3676AB", txtColor: "white" },
  { title: "js", bgColor: "#f7df1e", txtColor: "black" },
  { title: "html", bgColor: "#e34f26", txtColor: "white" },
  { title: "css", bgColor: "#264de4", txtColor: "white" },
  { title: "node.js", bgColor: "#339933", txtColor: "white" },
  { title: "java", bgColor: "#007396", txtColor: "white" },
  { title: "ruby", bgColor: "#cc342d", txtColor: "white" },
  { title: "angular", bgColor: "#dd0031", txtColor: "white" },
  { title: "vue", bgColor: "#4fc08d", txtColor: "white" },
  { title: "c#", bgColor: "#68217a", txtColor: "white" },
];

const TechButton = (props: TechButtonProps) => {
  const tech = TechStyles.filter(
    (techStyle) => techStyle.title === props.title
  )[0];

  let btnClass =
    "btn btn-outline border-gray-300 hover:bg-white hover:text-black";
  let btnStyle = {};

  if (props.selected) {
    btnClass = `btn `;
    btnStyle = {
      background: tech.bgColor,
      color: tech.txtColor,
      borderColor: tech.bgColor,
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
