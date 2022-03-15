import React from 'react';
import { Link } from 'react-router-dom';

const CommonBtn = ({ title, destination }) => {
    return (
        <Link to={destination} className="text-xl my-2 bg-purple-700 hover:bg-purple-800 text-white rounded-md px-7 py-2">{title}
        </Link>
    );
};

export default CommonBtn;