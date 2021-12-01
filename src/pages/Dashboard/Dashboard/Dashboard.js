import React, { useEffect, useState } from 'react';
import img1 from '../../../images/pexels-photo-356079.jpeg';
import img2 from '../../../images/exam.jpg';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    const {user} = useAuth();
    const [questionSet, setQuestionSet] = useState([]);
    useEffect(() => {
        fetch(`https://agile-retreat-39153.herokuapp.com/myQuestionSet/${user.email}`)
            .then(res => res.json())
            .then(data => setQuestionSet(data))
    }, [user.email]);
    return (
        <div className="bg-indigo-100 md:px-12 py-8">
            <div className="flex justify-between">
                <div>
                    <p>Start A New Exam</p>
                </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                <Link to="/form" className="border border-transparent hover:border-purple-500 cursor-pointer">
                    <img src={img1} alt="" className="" />
                    <p className="font-bold">Create A Question</p>
                </Link>
                <Link to="/exam" className="border border-transparent hover:border-purple-500 cursor-pointer">
                    <img src={img2} alt="" className="" />
                    <p className="font-bold">Give A Exam</p>
                </Link>
                {
                    questionSet.map(ques => <Link to={`/questionSet/${ques._id}`} className="border border-transparent hover:border-purple-500 cursor-pointer">
                        <div className="text-center bg-white h-full py-3">
                            <p>{ques.examTitle}</p>
                            <p>{ques.examDescription}</p>
                            <p>{ques.date}</p>
                            <p>{ques.examTime}</p>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Dashboard;