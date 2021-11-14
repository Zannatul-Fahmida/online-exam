import React from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';

const Options = ({handleDelete}) => {
    return (
        <div className="flex items-center w-full">
            <input type="radio" name="" id="" />
            <input type="text" name="" id="" className="w-5/6 ml-2 text-lg border-b-2 border-gray-300 focus:outline-none" placeholder="Option" />
            <button className="hover:bg-gray-100 p-2 rounded-full mx-4 md:mx-3">{<BiImageAdd className="text-2xl" />}</button>
            <button onClick={handleDelete} className="hover:bg-gray-100 p-2 rounded-full mx-4 md:mx-0">{<ImCross className="text-lg" />}</button>
        </div>
    );
};

export default Options;