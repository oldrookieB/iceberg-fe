import React, { useState } from 'react';
import cardData from '../../pages/MainPage';
import MainPage from '../../pages/MainPage';

interface CardDataProps {
  id: number;
  title: string;
  description: string;
}

const Card = (props: CardDataProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const LikeClickHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card card-compact w-80 h-64 bg-base-100 shadow-xl mx-4 mb-12">
      <figure>
        <img src="src/assets/img/daom.jpg" alt="Img" className='object-cover' />
      </figure>
      <div className="card-body flex h-24">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="card-actions justify-end mx-3 mb-1">
        <button className="" onClick={LikeClickHandler}>
          <img src={isLiked ? "src/assets/img/redheart.png" : "src/assets/img/heart.png"} alt="Like" />
        </button>
      </div>
    </div>
  );
};

export default Card;
