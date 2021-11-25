import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';

const QuestionShow = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch('https://agile-retreat-39153.herokuapp.com/questions')
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, []);
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
    <div className="my-7 w-full md:w-2/3">
        {
            questions.map(ques => <div className="mx-4 md:mx-0 flex items-center justify-between" key={questions._id}>
                <div className="w-full">
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
                                    id="option1"
                                    value={ques.option1}
                                />
                                <label for="option1">{ques.option1}</label><br />
                            </>
                        }
                        {
                            ques.option2 && <>
                                <input
                                    type={ques.question === "check-box" ? "checkbox" : "radio"}
                                    name=""
                                    id="option2"
                                    value={ques.option2}
                                />
                                <label for="option2">{ques.option2}</label><br />
                            </>
                        }
                        {
                            ques.option3 &&
                            <>
                                <input
                                    type={ques.question === "check-box" ? "checkbox" : "radio"}
                                    name=""
                                    id="option3"
                                    value={ques.option3}
                                />
                                <label for="option3">{ques.option3}</label><br />
                            </>
                        }
                        {
                            ques.option4 &&
                            <>
                                <input
                                    type={ques.question === "check-box" ? "checkbox" : "radio"}
                                    name=""
                                    id="option4"
                                    value={ques.option4}
                                />
                                <label for="option4">{ques.option4}</label><br />
                            </>
                        }
                        {
                            ques.option5 &&
                            <>
                                <input
                                    type={ques.question === "check-box" ? "checkbox" : "radio"}
                                    name=""
                                    id="option5"
                                    value={ques.option5}
                                />
                                <label for="option5">{ques.option5}</label><br />
                            </>
                        }
                    </form>
                    {
                        ques.answer &&
                        <>
                            <p>Answer: {ques.answer}</p>
                        </>
                    }
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
                </div>
                <div className="ml-3">
                    <button onClick={() => handleDelete(ques._id)}>{<ImCross className="text-red-700" />}</button>
                </div>
            </div>
            )
        }
    </div>
);
};

export default QuestionShow;