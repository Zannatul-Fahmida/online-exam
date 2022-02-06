import React from 'react';

const ProgressBar = ({ next, prev,submit, submitQuiz }) => {
    return (
        <div class="flex justify-between pt-8 pb-8">
            <button
                onClick={prev}
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                <span>Prev Question</span>
            </button>
            <button
                onClick={submitQuiz ? submit : next}
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                <span>{submitQuiz ? "Submit Quiz" : "Next Question"}</span>
            </button>
        </div>
    );
};

export default ProgressBar;