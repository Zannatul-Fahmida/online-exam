import React from 'react';
import { BiImageAdd } from 'react-icons/bi';

const Paragraph = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center">
                <input type="text" name="" id="" className="w-full text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 mb-2 pl-2" placeholder="Question" />
                <button className="hover:bg-gray-100 p-2 rounded-full ml-4 md:ml-3">{<BiImageAdd className="text-2xl" />}</button>
            </div>
            <div className="flex mt-2">
                <button className="border border-gray-200 hover:bg-gray-100 p-2 rounded-full mr-4 md:mr-3">Question Done</button>
            </div>
        </div>
    );
};

export default Paragraph;