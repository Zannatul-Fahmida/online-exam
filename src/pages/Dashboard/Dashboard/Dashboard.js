import React from 'react';
import img1 from '../../../images/plus-icon-vector-add-addition-260nw-1305881509 (1).jpg';
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
            </div>
        </div>
    );
};

export default Dashboard;