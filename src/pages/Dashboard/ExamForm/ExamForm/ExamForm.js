import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Calculator from '../Calculator/Calculator';
import QuestionSection from '../QuestionSection/QuestionSection';

const ExamForm = () => {
    const { quesCode } = useParams();
    const { user } = useAuth();
    const [studentName, setStudentName] = useState(`${user.displayName}`);
    const [studentEmail, setStudentEmail] = useState(`${user.email}`);
    const [questionSet, setQuestionSet] = useState([]);
    const [multipleAnswer, setMultipleAnswer] = useState('');
    const [checkboxAnswer, setCheckboxAnswer] = useState([]);
    const [paragraphAnswer, setParagraphAnswer] = useState('');
    const [showCalculator, setShowCalculator] = useState(false);
    const today = moment().format('YYYY-MM-DD');
    const currentTime = moment().format('HH:mm');
    const [loading, setLoading] = useState(true)
    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        axios.get(`https://agile-retreat-39153.herokuapp.com/questionSet/${quesCode}`)
        .then(res => {
            setQuestionSet(res.data);
            setQuestions(res.data.questions)
          setLoading(false);
        })
        .catch(error => toast.error(error.message))
    }, [quesCode]);
    console.log("ques", questions);
    const handleCheckbox = (e) => {
        const newCheckboxAnswer = e.target.value;
        const ans = [...checkboxAnswer, newCheckboxAnswer]
        setCheckboxAnswer(ans);
    }

    const handleSubmit = e => {
        const newResponse = { studentName, studentEmail, questionSet: questionSet.questions, multipleAnswer, checkboxAnswer, paragraphAnswer };
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
                {
                    loading ?
                        <div>Loading.............</div>
                        :
                        <QuestionSection
                            loading={loading}
                            quesId={quesCode}
                            questions={questions}
                            questionSet={questionSet} />
                }
            </div>
            
            {
                questionSet?.date > today || questionSet?.date === today && currentTime >= questionSet.endingTime ?
                    <div>
                        <p className="text-4xl mt-6">The exam will held {questionSet.date} at {questionSet.startingTime}</p>
                    </div>
                    :
                    ''
            }
            {
                questionSet?.date < today || questionSet?.date === today && currentTime <= questionSet.startingTime ?
                    <div>
                        <p className="text-4xl mt-6">The exam was held {questionSet.date} at {questionSet.startingTime}</p>
                    </div>
                    :
                    ''
            }
        </div >
    );
};

export default ExamForm;