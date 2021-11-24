import React, { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import FileUpload from '../FileUpload/FileUpload';
import MultiChoice from '../MultiChoice/MultiChoice';
import Paragraph from '../Paragraph/Paragraph';
import QuestionShow from '../QuestionShow/QuestionShow';

const QuestionForm = () => {
    const [show, setShow] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState("multi-choice");
    const [questionTitle, setQuestionTitle] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [option5, setOption5] = useState('');
    const [answer, setAnswer] = useState('');
    const [mark, setMark] = useState(0);
    const handleMultipleChange = (e) => {
        setAnswer(e.target.value);
    }
    const handleCheckboxChange = (e) => {
        const newAnswer = e.target.value;
        const ans = [...answer, newAnswer]
        setAnswer(ans);
    }
    const handleAddQuestion = e => {
        const newQuestion = { questionTitle, option1, option2, option3, option4, option5, mark, answer, question };
        fetch('https://agile-retreat-39153.herokuapp.com/addQuestions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newQuestion)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setQuestions(newQuestion);
                    window.location.reload();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="py-4 flex flex-col items-center justify-center">
            {/* Form Title */}
            <div className="bg-white text-left w-full md:w-2/3 rounded border-t-8 border-b-8 border-blue-800 p-7 filter drop-shadow-lg">
                <div className="flex flex-col w-full md:w-1/2 items-center mx-auto">
                    <input type="text" className="w-full mb-2 text-3xl md:text-4xl border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2 py-2" placeholder="Subject/Exam name" />
                </div>
                <div className="flex flex-col w-full md:w-1/2 items-center mx-auto">
                    <input type="text" className="w-full mb-2 text-xl md:text-2xl border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2 py-2" placeholder="Subject description" />
                </div>
                <div className="flex justify-between w-full md:w-1/2 mx-auto">
                    <input type="text" className="w-1/2 text-base md:text-xl border rounded border-gray-200 focus:outline-none focus:border-gray-200 mr-2 pl-2 py-2" placeholder="Marks" />
                    <input type="text" className="w-1/2 text-base md:text-xl border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2 py-2" placeholder="Time" />
                </div>
            </div>
            {/* Form body */}
            {questions.length > 0
                ?
                ''
                :
                <>
                    <QuestionShow></QuestionShow>
                    <button className="text-xl my-5 bg-purple-700 text-white rounded-md px-5 py-2">Upload Question</button>
                </>
            }
            <button onClick={() => setShow(true)} className={show ? "text-xl my-5 bg-purple-700 text-white rounded-md px-5 py-3 hidden" : "text-xl my-5 bg-purple-700 text-white rounded-md px-5 py-3 block"}>Add Question</button>
            <div id="questionTypes" className={show ? "text-xl grid grid-cols-2 md:grid-cols-4 gap-4 block" : "text-xl grid grid-cols-2 md:grid-cols-4 gap-4 hidden"}>
                <button onClick={() => setQuestion("multi-choice")} className="text-xl bg-pink-200 text-purple-900 rounded-md px-5 py-3">Multiple Choice</button>
                <button onClick={() => setQuestion("check-box")} className="text-xl bg-pink-200 text-purple-900 rounded-md px-5 py-3">Check Box</button>
                <button onClick={() => setQuestion("paragraph")} className="text-xl bg-pink-200 text-purple-900 rounded-md px-5 py-3">Paragraph</button>
                <button onClick={() => setQuestion("file-upload")} className="text-xl bg-pink-200 text-purple-900 rounded-md px-5 py-3">File Upload</button>
            </div>
            {
                show ?
                    <div className="w-full md:w-1/2 my-7 px-6 md:px-0">
                        {
                            question === "multi-choice" && <>
                                <MultiChoice
                                    setQuestionTitle={setQuestionTitle}
                                    setOption1={setOption1}
                                    setOption2={setOption2}
                                    setOption3={setOption3}
                                    setOption4={setOption4}
                                    setOption5={setOption5}
                                ></MultiChoice>
                                <div className="flex flex-wrap md:flex-row items-center mt-2">
                                    <label className="block pb-3 md:pb-0">
                                        <span className="text-gray-700">Correct Answer</span>
                                        <select className="mx-2 text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2" onChange={handleMultipleChange}>
                                            <option value={option1}>Option 1</option>
                                            <option value={option2}>Option 2</option>
                                            <option value={option3}>Option 3</option>
                                            <option value={option4}>Option 4</option>
                                            <option value={option5}>Option 5</option>
                                        </select>
                                    </label>
                                    <input
                                        className="border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2 mr-2"
                                        type="text"
                                        placeholder="Mark"
                                        onBlur={(e) => setMark(e.target.value)}
                                    />
                                    <button onClick={handleAddQuestion} className="border border-gray-200 hover:bg-gray-100 p-2 rounded-full ">Question Done</button>
                                </div>
                            </>
                        }
                        {
                            question === "check-box" && <>
                                <CheckBox
                                    setQuestionTitle={setQuestionTitle}
                                    setOption1={setOption1}
                                    setOption2={setOption2}
                                    setOption3={setOption3}
                                    setOption4={setOption4}
                                    setOption5={setOption5}
                                ></CheckBox>
                                <div className="flex flex-wrap md:flex-row items-center mt-2">
                                    <label className="block pb-3 md:pb-0">
                                        <span className="text-gray-700">Correct Answer</span>
                                        <select className="mx-2 text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2" onChange={handleCheckboxChange}>
                                            <option value={option1}>Option 1</option>
                                            <option value={option2}>Option 2</option>
                                            <option value={option3}>Option 3</option>
                                            <option value={option4}>Option 4</option>
                                            <option value={option5}>Option 5</option>
                                        </select>
                                    </label>
                                    <input
                                        className="border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2 mr-2"
                                        type="text"
                                        placeholder="Mark"
                                        onBlur={(e) => setMark(e.target.value)}
                                    />
                                    <button onClick={handleAddQuestion} className="border border-gray-200 hover:bg-gray-100 p-2 rounded-full mr-4 md:mr-3">Question Done</button>
                                </div>
                            </>
                        }
                        {
                            question === "paragraph" && <>
                                <Paragraph
                                    setQuestionTitle={setQuestionTitle}
                                ></Paragraph>
                                <div className="flex mt-2">
                                    <input
                                        className="border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2 mr-2"
                                        type="text"
                                        placeholder="Mark"
                                        onBlur={(e) => setMark(e.target.value)}
                                    />
                                    <button onClick={handleAddQuestion} className="border border-gray-200 hover:bg-gray-100 p-2 rounded-full mr-4 md:mr-3">Question Done</button>
                                </div>
                            </>
                        }
                        {
                            question === "file-upload" && <>
                                <FileUpload
                                    setQuestionTitle={setQuestionTitle}
                                ></FileUpload>
                                <div className="flex mt-2">
                                    <input
                                        className="border rounded border-gray-200 focus:outline-none focus:border-gray-200 pl-2 mr-2"
                                        type="text"
                                        placeholder="Mark"
                                        onBlur={(e) => setMark(e.target.value)}
                                    />
                                    <button onClick={handleAddQuestion} className="border border-gray-200 hover:bg-gray-100 p-2 rounded-full ">Question Done</button>
                                </div>
                            </>
                        }
                    </div>
                    :
                    ''
            }
        </div >
    );
};

export default QuestionForm;