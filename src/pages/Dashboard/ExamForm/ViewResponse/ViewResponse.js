import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FileShow from '../FileShow/FileShow';
import Answers from '../QuestionSection/Answers';

const ViewResponse = () => {
    const { resId } = useParams();
    const [response, setResponse] = useState({});
    useEffect(() => {
        fetch(`https://agile-retreat-39153.herokuapp.com/responses/${resId}`)
            .then(res => res.json())
            .then(data => setResponse(data))
    }, [resId]);
    return (
        <div className="py-4 flex flex-col items-center justify-center">
            <div className="bg-white text-left w-full md:w-2/3 rounded border-t-8 border-b-8 border-blue-800 p-7 filter drop-shadow-lg">
                <div className="flex flex-col w-full md:w-1/2 items-center mx-auto">
                    <h2 className="text-2xl font-medium">{response.examTitle}</h2>
                    <p>{response.examDescription}</p>
                    <p>Marks: {response.examMarks}</p>
                    <p>Student Name: {response.studentName}</p>
                    <p>Student Email: {response.studentEmail}</p>
                </div>
            </div>
            <div className="mt-5 w-full md:w-2/3">
                <div className="mx-4 md:mx-0">
                    {
                        response?.studentAns?.map(res =>
                            <div className="w-full">
                                <div className="flex justify-between">
                                    <p>{res.title}</p>
                                    <p>{res.mark}</p>
                                </div>
                                <form>
                                    {
                                        res?.options && <Answers options={res.options} />
                                    }

                                </form>
                                {
                                    res.question === "paragraph" && <>
                                        <textarea
                                            name=""
                                            id=""
                                            rows="4"
                                            className="w-full text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 mb-2 pl-2"
                                            placeholder="Answer"
                                            defaultValue={res.stdParagraphAns}
                                            readOnly
                                        ></textarea>
                                    </>
                                }
                                {
                                    res.question === "file-upload" && <>
                                        <FileShow fileId={res.stdFileAns} />
                                    </>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ViewResponse;