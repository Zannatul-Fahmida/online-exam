import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const Exam = () => {
    const { user } = useAuth();
    const [questionCode, setQuestionCode] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <div className="py-4 flex flex-col items-center justify-center">
            <div className="w-full md:w-1/2 my-7 px-6 md:px-0">
                <p className="text-center text-4xl pb-4">Exam Form</p>
                <input
                    type="text"
                    name=""
                    id=""
                    className="w-full text-lg border mb-3 py-2 rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2"
                    placeholder="Name"
                    defaultValue={user.displayName}
                    onBlur={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    name=""
                    id=""
                    className="w-full text-lg border mb-3 py-2 rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2"
                    placeholder="Email"
                    value={user.email}
                    onBlur={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    name=""
                    id=""
                    className="w-full text-lg border mb-3 py-2 rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2"
                    placeholder="Question Code"
                    onBlur={(e) => setQuestionCode(e.target.value)}
                />
                <div className="text-center">
                    <button className="text-xl my-5 bg-purple-700 text-white rounded-md px-5 py-2">Give Exam</button>
                </div>
            </div>
        </div>
    );
};

export default Exam;