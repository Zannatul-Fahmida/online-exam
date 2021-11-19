import React, { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';

const CheckBox = () => {
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [option5, setOption5] = useState('');
    const [answer, setAnswer] = useState([]);
    const handleChange = (e) =>{
        const newAnswer = e.target.value;
        const ans = [...answer, newAnswer]
        setAnswer(ans);
    }
    console.log(answer);
    return (
        <div className="flex flex-col w-full">
            <input
                type="text"
                name=""
                id=""
                className="w-full text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 mb-2 pl-2"
                placeholder="Question"
                onBlur={(e) => setQuestion(e.target.value)}
            />
            <div className="flex items-center">
                <input
                    type="checkbox"
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
                    type="checkbox"
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
                    type="checkbox"
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
                    type="checkbox"
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
                    type="checkbox"
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
            <div className="flex items-center mt-2">
                <label className="block">
                    <span className="text-gray-700">Correct Answer</span>
                    <select className="mx-2 text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2" onChange={handleChange}>
                        <option value={option1}>Option 1</option>
                        <option value={option2}>Option 2</option>
                        <option value={option3}>Option 3</option>
                        <option value={option4}>Option 4</option>
                        <option value={option5}>Option 5</option>
                    </select>
                </label>
                <button className="border border-gray-200 hover:bg-gray-100 p-2 rounded-full mr-4 md:mr-3">Question Done</button>
            </div>
        </div>
    );
};

export default CheckBox;