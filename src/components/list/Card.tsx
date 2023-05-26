import React from 'react';

const Card = () => {
  return (
      <div className="card card-compact w-80 h-60 bg-base-100 shadow-xl mx-3 mb-5">
      <figure>
        <img src="src/assets/img/daom.jpg" alt="Shoes" className='object-cover w-full h-full' /></figure>
      <div className="card-body h-2/3 flex flex-col justify-between">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="">
            <img src="src/assets/img/heart.png"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;