import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectType } from "../../types/project.type";
import TechButton from "../ui/TechButton";
import { TECHSTACKS } from "../../constants/techStacks";

const Card = (props: ProjectType) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const LikeClickHandler = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const cardColor = TECHSTACKS.filter(
    (techstack) => techstack.title === props.techStacks[0]
  )[0];

  return (
    <div
      onClick={() => navigate(`/project/${props.id}`)}
      className=" h-64 shadow-xl cursor-pointer card card-compact w-96 bg-base-100 overflow-hidden"
    >
      <div
        className="flex item-center justify-center w-full h-16"
        style={{ backgroundColor: cardColor.bgColor }}
      >
        <h2 className="card-title" style={{ color: cardColor.txtColor }}>
          {props.title}
        </h2>
      </div>
      <div className="flex flex-col card-body justify-between">
        <div>
          <p>{props.description}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="avatar online">
            <div className="w-8 rounded-full">
              <img src="/img/user.png" />
            </div>
          </div>
          <p>{props.userName}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {props.techStacks.map((techStack) => (
            <TechButton key={techStack} title={techStack} isSelected />
          ))}
        </div>
      </div>
      <div
        onClick={LikeClickHandler}
        className="justify-end px-3 py-2 card-actions "
      >
        <img
          src={
            isLiked ? "src/assets/img/redheart.png" : "src/assets/img/heart.png"
          }
          alt="Like"
        />
      </div>
    </div>
  );
};

export default Card;
