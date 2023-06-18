import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: number;
  title: string;
  description: string;
}

const Card = (props: CardProps) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const LikeClickHandler = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div
      onClick={() => navigate(`/project/${props.id}`)}
      className=" h-64 shadow-xl cursor-pointer card card-compact w-96 bg-base-100 overflow-hidden"
    >
      <div className="flex item-center justify-center w-full h-16 bg-blue-600">
        <h2 className="card-title">{props.title}</h2>
      </div>
      <div className="flex h-24 card-body">
        <p>{props.description}</p>
      </div>
      <div
        onClick={LikeClickHandler}
        className="justify-end px-3 pb-1 card-actions "
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
