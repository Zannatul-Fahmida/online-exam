import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const QuestionSet = () => {
    const { quesId } = useParams();
    const [questionSet, setQuestionSet] = useState([]);
    useEffect(() => {
        fetch(`https://agile-retreat-39153.herokuapp.com/questionSet/${quesId}`)
            .then(res => res.json())
            .then(data => setQuestionSet(data))
    }, [quesId]);
    console.log(questionSet)
    return (
        <div className="py-4 flex flex-col items-center justify-center">
            <div className="bg-white text-left w-full md:w-2/3 rounded border-t-8 border-b-8 border-blue-800 p-7 filter drop-shadow-lg">
                <div className="flex flex-col w-full md:w-1/2 items-center mx-auto">
                    <p>{questionSet?.instituteName}</p>
                    <p>{questionSet?.examTitle}</p>
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
                </div>
            </div>
        </div >
    );
};

export default QuestionSet;