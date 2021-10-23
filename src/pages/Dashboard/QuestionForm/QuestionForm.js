import React from 'react';

const QuestionForm = () => {
    return (
        <div className="bg-purple-100 py-4 flex justify-center">
            <div className="bg-white flex flex-col w-full md:w-2/3 rounded border-t-8 border-blue-800 p-7 filter drop-shadow-lg">
                <input type="text" className="w-100 mb-2 text-3xl md:text-5xl border rounded border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Untitled document" />
                <input type="text" className="w-100 text-base md:text-xl border rounded border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Form description" />
            </div>
        </div>
    );
};

export default QuestionForm;