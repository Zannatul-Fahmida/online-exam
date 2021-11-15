import React, { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import FileUpload from '../FileUpload/FileUpload';
import MultiChoice from '../MultiChoice/MultiChoice';
import Options from '../Options/Options';
import Paragraph from '../Paragraph/Paragraph';

const QuestionForm = () => {
    const [show, setShow] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState("multi-choice");
    console.log(question);
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
                questions
                :
                ''
            }
            <button onClick={() => setShow(true)} className="text-xl my-5 bg-purple-700 text-white rounded-md px-5 py-3">Add Question</button>
            <div id="questionTypes" className={show ? "text-xl grid grid-cols-2 md:grid-cols-4 gap-4 block" : "text-xl grid grid-cols-2 md:grid-cols-4 gap-4 hidden"}>
                <button onClick={() => setQuestion("multi-choice")} className="text-xl bg-pink-200 text-purple-900 rounded-md px-5 py-3">Multiple Choice</button>
                <button onClick={() => setQuestion("check-box")} className="text-xl bg-pink-200 text-purple-900 rounded-md px-5 py-3">Check Box</button>
                <button onClick={() => setQuestion("paragraph")} className="text-xl bg-pink-200 text-purple-900 rounded-md px-5 py-3">Paragraph</button>
                <button onClick={() => setQuestion("file-upload")} className="text-xl bg-pink-200 text-purple-900 rounded-md px-5 py-3">File Upload</button>
            </div>
            {
                show ?
                    <div>
                        {
                            question === "multi-choice" && <MultiChoice></MultiChoice>
                        }
                        {
                            question === "check-box" && <CheckBox></CheckBox>
                        }
                        {
                            question === "paragraph" && <Paragraph></Paragraph>
                        }
                        {
                            question === "file-upload" && <FileUpload></FileUpload>
                        }
                    </div>
                    :
                    ''
            }
        </div >
    );
};

export default QuestionForm;