import React, { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { GrAddCircle } from 'react-icons/gr';
import { AiFillCarryOut } from 'react-icons/ai';
import Options from '../Options/Options';

const QuestionForm = () => {
    let [option, setOption] = useState([]);
    const handleDelete = e => {
        console.log('clicked');
    }
    const handleCreateOption = () => {
        setOption(option.concat(<Options key={option.length} handleDelete={handleDelete} />));
    }
    return (
        <div className="bg-purple-100 py-4 flex flex-col items-center justify-center">
            {/* Form Title */}
            <div className="bg-white flex flex-col text-left w-full md:w-2/3 rounded border-t-8 border-blue-800 p-7 filter drop-shadow-lg">
                <input type="text" className="w-100 mb-2 text-3xl md:text-5xl border rounded border-transparent focus:outline-none focus:border-transparent" placeholder="Untitled document" />
                <input type="text" className="w-100 text-base md:text-xl border rounded border-transparent focus:outline-none focus:border-transparent" placeholder="Form description" />
            </div>
            {/* Form body */}
            <div className="bg-white flex flex-col w-full md:w-2/3 rounded border-l-8 border-blue-500 p-7 filter drop-shadow-lg">
                <div className="flex items-center justify-between">
                    <div className="w-4/6 md:w-3/5">
                        <input type="text" className="w-full mb-2 text-lg md:text-xl border rounded border-transparent focus:outline-none focus:border-transparent" placeholder="Untitled Question" />
                    </div>
                    <div className="flex items-center">
                        <button className="hover:bg-gray-100 p-2 rounded-full mx-4 md:mx-0">{<BiImageAdd className="text-2xl" />}</button>
                        <select className="md:ml-4 text-lg px-0 md:px-3 border-2 border-gray-300 focus:outline-none ">
                            <option>Multiple Choice</option>
                            <option>Checkboxes</option>
                            <option>Dropdown</option>
                            <option>File upload</option>
                            <option>Short answer</option>
                            <option>Paragraph</option>
                        </select>
                    </div>
                </div>
                <Options handleDelete={handleDelete}></Options>
                {option}
                <div className="flex items-center w-full">
                    <input type="radio" name="" id="" />
                    <span onClick={handleCreateOption} className="w-5/6 ml-2 text-lg cursor-pointer focus:outline-none">Add option</span>
                </div>
                <hr className="my-4" />
                <div className="flex items-center">
                    <button title="Answer key and points" className="hover:bg-gray-100 p-2 rounded flex items-center text-gray-500">{<AiFillCarryOut className="text-lg" />} Answer Key (<span>0</span> points)</button>
                    <button title="Delete" className="hover:bg-gray-100 p-2 rounded-full">{<FaTrashAlt className="text-lg" />}</button>
                    <button title="Add question" className="hover:bg-gray-100 p-2 rounded-full">{<GrAddCircle className="text-lg" />}</button>
                    <button title="Add image" className="hover:bg-gray-100 p-2 rounded-full">{<BiImageAdd className="text-lg" />}</button>
                </div>
            </div>
        </div>
    );
};

export default QuestionForm;