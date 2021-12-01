import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const ExamForm = () => {
    const { quesCode } = useParams();
    const { user } = useAuth();
    const [studentName, setStudentName] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [questionSet, setQuestionSet] = useState([]);
    useEffect(() => {
        fetch(`https://agile-retreat-39153.herokuapp.com/questionSet/${quesCode}`)
            .then(res => res.json())
            .then(data => setQuestionSet(data))
    }, [quesCode]);
    const handleSubmit = e => {
        const newResponse = { studentName, studentEmail, quesSet: [...questionSet] };
        fetch('https://agile-retreat-39153.herokuapp.com/responses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newResponse)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    window.location.reload();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="py-4 flex flex-col items-center justify-center">
            <div className="bg-white text-left w-full md:w-2/3 rounded border-t-8 border-b-8 border-blue-800 p-7 filter drop-shadow-lg">
                <div className="flex flex-col w-full md:w-1/2 items-center mx-auto">
                    <p className="text-3xl">{questionSet?.instituteName}</p>
                    <p className="text-lg">{questionSet?.examTitle}</p>
                    <p>{questionSet?.examDescription}</p>
                    <div className="flex justify-between w-full">
                        <p>Marks: {questionSet?.examMarks}</p>
                        <p>Time: {questionSet?.examTime}</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 w-full md:w-2/3">
                <div className="mx-4 md:mx-0">
                    {
                        questionSet?.questions?.map(ques => <div className="w-full">
                            <div className="flex justify-between">
                                <p>{ques.questionTitle}</p>
                                <p>{ques.mark}</p>
                            </div>
                            <form>
                                {
                                    ques.option1 && <>
                                        <input
                                            type={ques.question === "check-box" ? "checkbox" : "radio"}
                                            name=""
                                            className="mr-2"
                                            id="option1"
                                            value={ques.option1}
                                        />
                                        <label htmlFor="option1">{ques.option1}</label><br />
                                    </>
                                }
                                {
                                    ques.option2 && <>
                                        <input
                                            type={ques.question === "check-box" ? "checkbox" : "radio"}
                                            name=""
                                            className="mr-2"
                                            id="option2"
                                            value={ques.option2}
                                        />
                                        <label htmlFor="option2">{ques.option2}</label><br />
                                    </>
                                }
                                {
                                    ques.option3 &&
                                    <>
                                        <input
                                            type={ques.question === "check-box" ? "checkbox" : "radio"}
                                            name=""
                                            className="mr-2"
                                            id="option3"
                                            value={ques.option3}
                                        />
                                        <label htmlFor="option3">{ques.option3}</label><br />
                                    </>
                                }
                                {
                                    ques.option4 &&
                                    <>
                                        <input
                                            type={ques.question === "check-box" ? "checkbox" : "radio"}
                                            name=""
                                            className="mr-2"
                                            id="option4"
                                            value={ques.option4}
                                        />
                                        <label htmlFor="option4">{ques.option4}</label><br />
                                    </>
                                }
                                {
                                    ques.option5 &&
                                    <>
                                        <input
                                            type={ques.question === "check-box" ? "checkbox" : "radio"}
                                            name=""
                                            className="mr-2"
                                            id="option5"
                                            value={ques.option5}
                                        />
                                        <label htmlFor="option5">{ques.option5}</label><br />
                                    </>
                                }
                            </form>
                            {
                                ques.question === "paragraph" && <>
                                    <textarea
                                        name=""
                                        id=""
                                        rows="4"
                                        className="w-full text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 mb-2 pl-2"
                                        placeholder="Answer"
                                    ></textarea>
                                </>
                            }
                            {
                                ques.question === "file-upload" && <>
                                    <input
                                        type="file"
                                        name=""
                                        id=""
                                        className="w-full text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 mb-2"
                                    />
                                </>
                            }
                        </div>)
                    }
                    <input
                    type="text"
                    name=""
                    id=""
                    className="w-full text-lg border mb-3 py-2 rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2"
                    placeholder="Name"
                    defaultValue={user.displayName}
                    onBlur={(e) => setStudentName(e.target.value)}
                    required="required"
                />
                    <input
                    type="email"
                    name=""
                    id=""
                    className="w-full text-lg border mb-3 py-2 rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2"
                    placeholder="Email Address"
                    defaultValue={user.email}
                    onBlur={(e) => setStudentEmail(e.target.value)}
                    required="required"
                />
                </div>
            </div>
            <button onClick={handleSubmit} className="text-xl bg-pink-200 text-purple-900 rounded-md px-5 py-2 my-4">Submit</button>
        </div >
    );
};

export default ExamForm;