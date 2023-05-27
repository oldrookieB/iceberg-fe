import React from 'react';

interface TechButtonProps {
    title: string;
    bgColor: string;
    txtColor: string;
}

const TechButton = (props:TechButtonProps) => {
    const btnStyle = {
        background:props.bgColor,
        color: props.txtColor,
    };
    return (
        <div className='mx-1 mb-2'>
            <button style={btnStyle} className='btn border-none'>
                #{props.title}
                </button>
        </div>
    );
};


export default TechButton;