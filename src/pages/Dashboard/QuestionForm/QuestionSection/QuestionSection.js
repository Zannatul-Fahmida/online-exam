import React, { useCallback, useEffect, useReducer, useState } from 'react';
import _ from "lodash";
import ProgressBar from './ProgressBar';
import Answers from './Answers';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import axios from 'axios';
import swal from 'sweetalert';
import "./Answer.css";

const initialState = null;

const reducer = (state, action) => {
    switch (action.type) {
        case "questions":
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    option.checked = false;
                });
            });
            return action.value;
        case "answer":
            const questions = _.cloneDeep(state);
            questions[action.questionID].options[action.optionIndex].checked =
                action.value;

            return questions;
        default:
            return state;
    }
};
const QuestionSection = ({ questionSet, questions, loading, quesId }) => {
    console.log(questions)
    const {user} = useAuth();
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [qna, dispatch] = useReducer(reducer, initialState);
    const history = useHistory();


    console.log('qna', qna);
    const onReloadNeeded = useCallback(async () => {
        const questionCollection = await questions;
        dispatch({
            type: "questions",
            value: questionCollection,
        });
    }, [questions]);
    useEffect(() => {
        onReloadNeeded()
    }, [onReloadNeeded]);

    const handleAnswerChange = (e, index) => {
        dispatch({
            type: "answer",
            questionID: currentQuestion,
            optionIndex: index,
            value: e.target.checked,
        });
    }
    const nextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((prevCurrent) => prevCurrent + 1)
        } 
    }
    const prevQuestion = () => {
        if (currentQuestion >= 1 && currentQuestion <= questions.length) {
            setCurrentQuestion((prevCurrent) => prevCurrent - 1)
        }
    }
    const submit = async() => {
        const loading = toast.loading("Please wait...")
        const answerInfo = {
            studentEmail : user.email,
            studentAns: qna,
            examTitle: questionSet.examTitle,
            examDescription: questionSet.examDescription,
            quesId : quesId
        }

        await axios.post('http://localhost:5000/responses', answerInfo)
            .then(res => {
                toast.dismiss(loading);
                if (res.data) {
                    return swal("Successfully Uploaded", "Your new service has been successfully added.", "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            });
        history.push ({
            pathname: `/result/${quesId}`,
            state: {
                qna,
            }
        });
    }
    const submitQuiz = (currentQuestion + 1) === questions.length
    console.log('current question', currentQuestion + 1, "question length", questions.length);
    return (
        <>
            {!loading && qna && qna.length > 0 && (
                <>
                <div className="question-title">
                    <h1>Question Title : {qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                </div>
                    <Answers
                        input
                        options={qna[currentQuestion]?.options}
                        handleAnswerChange={handleAnswerChange}
                    />
                    <ProgressBar
                        next={nextQuestion}
                        prev={prevQuestion}
                        submit={submit}
                        submitQuiz={submitQuiz}
                    />
                </>
            )}
        </>
    );
};

export default QuestionSection;

/* 
{
    showScore ?
        <div>Score is {score} of {questions.length}</div>
        :
        <>
            <div className="question-section">
                <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/{questions?.length}
                </div>
                <div className="question-title">
                    {questions[currentQuestion]?.title}
                </div>
            </div>
        </>}
{qna.length < 0 &&
    <>
        <div className="answer-section">
            <Answers
                input
                toogleActive={toogleActive}
                selectAnswer={selectAnswer}
                options={qna[currentQuestion]?.options}
                handleAnswerChange={handleAnswerChange}
            />
        </div>
        <div className="progress-bar">
            <ProgressBar
                next={nextQuestion}
                prev={prevQuestion}
            />
        </div>
    </>
}
 */