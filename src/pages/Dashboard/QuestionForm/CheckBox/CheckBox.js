import React from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import { GrAddCircle } from 'react-icons/gr';
import { MdOutlineDone } from 'react-icons/md';

const CheckBox = () => {
    return (
        <div className="flex flex-col w-full">
            <input type="text" name="" id="" className="w-full text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 mb-2 pl-2" placeholder="Question" />
            <div className="flex items-center">
                <input type="checkbox" name="" id="" />
                <input type="text" name="" id="" className="w-5/6 ml-2 text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2" placeholder="Option" />
                <button className="hover:bg-gray-100 p-2 rounded-full mx-4 md:mx-3">{<BiImageAdd className="text-2xl" />}</button>
                <button className="hover:bg-gray-100 p-2 rounded-full mx-4 md:mx-0">{<ImCross className="text-lg" />}</button>
            </div>
            <div className="flex mt-2">
                <button title="Add new option" className="hover:bg-gray-100 p-2 rounded-full mr-4 md:mr-3">{<GrAddCircle className="text-2xl" />}</button>
                <button title="Correct answer" className="hover:bg-gray-100 p-2 rounded-full mr-4 md:mr-3">{<MdOutlineDone className="text-2xl" />}</button>
                <button className="border border-gray-200 hover:bg-gray-100 p-2 rounded-full mr-4 md:mr-3">Question Done</button>
            </div>
        </div>
    );
};

export default CheckBox;