import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams, useHistory } from 'react-router-dom';
import _ from "lodash";
import { AiOutlineUser } from 'react-icons/ai';

const Responses = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [questionSet, setQuestionSet] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [userQnaSet, setUserQnaSet] = useState([]);
    // const [qna, setUserqna] = useState([]); // user Answer data from database 
    const { location } = useHistory();
    const { state } = location;
    const { qna } = state; // user answer data from direct state
    useEffect(() => {
        axios.get(`https://agile-retreat-39153.herokuapp.com/questionSet/${id}`)
            .then(res => {
                setQuestionSet(res.data);
                setQuestions(res.data.questions)
                setLoading(false);
            })
            .catch(error => toast.error(error.message))
    }, [id]);
    useEffect(() => {
        axios.get(`http://localhost:5000/responses/${id}`)
            .then(res => {
                setUserQnaSet(res.data);
                // setUserqna(res.data.studentAns) // user Answer data from database 
                setLoading(false);
            })
            .catch(error => toast.error(error.message))
    }, [id]);

    console.log("qna from result", userQnaSet);
    function calculate() {
        let score = 0;
        questions.forEach((question, index1) => {
            let correctIndexes = [],
                checkedIndexes = [];

            question.options.forEach((option, index2) => {
                if (option.correct) correctIndexes.push(index2)
                if (qna[index1].options[index2].checked) {
                    checkedIndexes.push(index2);
                    option.checked = true;
                }
            });
            if (_.isEqual(correctIndexes, checkedIndexes)) {
                score = score + 5;
            }
        })
        return score
    }
    const userScore = calculate();
    return (
        <div className="container px-5 py-8 mx-auto">
            {loading && <div>Loading.....</div>}
            {questions && questions.length && (
                <div className="flex flex-wrap m-4">
                    <div className="p-4 lg:w-1/2 md:w-full">
                        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-gradient-to-t from-blue-50 via-blue-300 to-blue-500">
                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 text-4xl">
                                {<AiOutlineUser />}
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Examination Result</h2>
                                <p className="leading-relaxed text-base mb-4">Your score {userScore} out of {questions.length * 5}</p>
                                {/* <CommonBtn destination="/signup" title="Sign up" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Responses;