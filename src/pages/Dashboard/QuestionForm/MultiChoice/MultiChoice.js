import React from 'react';
import { BiImageAdd } from 'react-icons/bi';

const MultiChoice = ({ setOption1, setOption2, setOption3, setOption4, setOption5, setQuestionTitle }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center">
                <input
                    type="text"
                    name=""
                    id=""
                    className="w-full text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 mb-2 pl-2"
                    placeholder="Question"
                    onBlur={(e) => setQuestionTitle(e.target.value)}
                />
                <button className="hover:bg-gray-100 p-2 rounded-full ml-4 md:ml-3">{<BiImageAdd className="text-2xl" />}</button>
            </div>
            <div className="flex items-center">
                <input
                    type="radio"
                    name=""
                    id="option1"
                />
                <input
                    type="text"
                    name=""
                    htmlFor="option1"
                    className="w-full ml-2 text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2"
                    placeholder="Option 1"
                    onBlur={(e) => setOption1(e.target.value)}
                />
                <button className="hover:bg-gray-100 p-2 rounded-full ml-4 md:ml-3">{<BiImageAdd className="text-2xl" />}</button>
            </div>
            <div className="flex items-center">
                <input
                    type="radio"
                    name=""
                    id="option2"
                />
                <input
                    type="text"
                    name=""
                    htmlFor="option2"
                    className="w-full ml-2 text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2"
                    placeholder="Option 2"
                    onBlur={(e) => setOption2(e.target.value)}
                />
                <button className="hover:bg-gray-100 p-2 rounded-full ml-4 md:ml-3">{<BiImageAdd className="text-2xl" />}</button>
            </div>
            <div className="flex items-center">
                <input
                    type="radio"
                    name=""
                    id="option3"
                />
                <input
                    type="text"
                    name=""
                    htmlFor="option3"
                    className="w-full ml-2 text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2"
                    placeholder="Option 3"
                    onBlur={(e) => setOption3(e.target.value)}
                />
                <button className="hover:bg-gray-100 p-2 rounded-full ml-4 md:ml-3">{<BiImageAdd className="text-2xl" />}</button>
            </div>
            <div className="flex items-center">
                <input
                    type="radio"
                    name=""
                    id="option4"
                />
                <input
                    type="text"
                    name=""
                    htmlFor="option4"
                    className="w-full ml-2 text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2"
                    placeholder="Option 4"
                    onBlur={(e) => setOption4(e.target.value)}
                />
                <button className="hover:bg-gray-100 p-2 rounded-full ml-4 md:ml-3">{<BiImageAdd className="text-2xl" />}</button>
            </div>
            <div className="flex items-center">
                <input
                    type="radio"
                    name=""
                    id="option5"
                />
                <input
                    type="text"
                    name=""
                    htmlFor="option5"
                    className="w-full ml-2 text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2"
                    placeholder="Option 5"
                    onBlur={(e) => setOption5(e.target.value)}
                />
                <button className="hover:bg-gray-100 p-2 rounded-full ml-4 md:ml-3">{<BiImageAdd className="text-2xl" />}</button>
            </div>
        </div>
    );
};

export default MultiChoice;