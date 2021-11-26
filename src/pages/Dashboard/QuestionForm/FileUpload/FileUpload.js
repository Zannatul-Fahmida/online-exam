import React from 'react';
import { BiImageAdd } from 'react-icons/bi';

const FileUpload = ({ setQuestionTitle }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center">
                <input
                    type="text"
                    name=""
                    id=""
                    className="w-full text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2"
                    placeholder="Question"
                    onBlur={(e) => setQuestionTitle(e.target.value)}
                />
                <button className="hover:bg-gray-100 p-2 rounded-full ml-4 md:ml-3">{<BiImageAdd className="text-2xl" />}</button>
            </div>
        </div>
    );
};

export default FileUpload;