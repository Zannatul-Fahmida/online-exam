import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';

const QuestionShow = (props) => {
    const {questionTitle, mark, option1, option2, option3, option4, option5, _id, answer, question} = props.ques;
    const [questions, setQuestions] = useState([]);

    const handleDelete = id => {
        fetch(`https://agile-retreat-39153.herokuapp.com/question/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    window.location.reload();
                    const remaining = questions.filter(ques => ques._id !== id);
                    setQuestions(remaining);
                }
            })
    }
    return (
        <div className="mt-5 w-full md:w-2/3">
            <div className="mx-4 md:mx-0 flex items-center justify-between">
                <div className="w-full">
                    <div className="flex justify-between">
                        <p>{questionTitle}</p>
                        <p>{mark}</p>
                    </div>
                    <form>
                        {
                            option1 && <>
                                <input
                                    type={question === "check-box" ? "checkbox" : "radio"}
                                    name=""
                                    id="option1"
                                    className="mr-2"
                                    value={option1}
                                />
                                <label htmlFor="option1">{option1}</label><br />
                            </>
                        }
                        {
                            option2 && <>
                                <input
                                    type={question === "check-box" ? "checkbox" : "radio"}
                                    name=""
                                    id="option2"
                                    className="mr-2"
                                    value={option2}
                                />
                                <label htmlFor="option2">{option2}</label><br />
                            </>
                        }
                        {
                            option3 &&
                            <>
                                <input
                                    type={question === "check-box" ? "checkbox" : "radio"}
                                    name=""
                                    id="option3"
                                    className="mr-2"
                                    value={option3}
                                />
                                <label htmlFor="option3">{option3}</label><br />
                            </>
                        }
                        {
                            option4 &&
                            <>
                                <input
                                    type={question === "check-box" ? "checkbox" : "radio"}
                                    name=""
                                    id="option4"
                                    className="mr-2"
                                    value={option4}
                                />
                                <label htmlFor="option4">{option4}</label><br />
                            </>
                        }
                        {
                            option5 &&
                            <>
                                <input
                                    type={question === "check-box" ? "checkbox" : "radio"}
                                    name=""
                                    id="option5"
                                    className="mr-2"
                                    value={option5}
                                />
                                <label htmlFor="option5">{option5}</label><br />
                            </>
                        }
                    </form>
                    {
                        answer &&
                        <>
                            <p>Answer: {answer}</p>
                        </>
                    }
                    {
                        question === "paragraph" && <>
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
                        question === "file-upload" && <>
                            <input
                                type="file"
                                name=""
                                id=""
                                className="w-full text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 mb-2"
                            />
                        </>
                    }
                </div>
                <div className="ml-3">
                    <button onClick={() => handleDelete(_id)}>{<ImCross className="text-red-700" />}</button>
                </div>
            </div>
        </div>
    );
};

export default QuestionShow;