import React from 'react';

const SearchBar = () => {
    return (
        <div className='flex justify-center '>
            <input
            type="text"
            placeholder='Search ...'
            className='w-5/12 rounded-xl shadow-xl py-5 px-3 '
            />
        </div>
    );
};

export default SearchBar;