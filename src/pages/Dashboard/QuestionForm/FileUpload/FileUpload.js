import React from 'react';

const FileUpload = () => {
    return (
        <div className="flex flex-col w-full">
            <input type="file" name="" id="" className="w-full text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 mb-2" placeholder="Question" />
            <div className="flex mt-2">
                <button className="border border-gray-200 hover:bg-gray-100 p-2 rounded-full mr-4 md:mr-3">Question Done</button>
            </div>
        </div>
    );
};

export default FileUpload;