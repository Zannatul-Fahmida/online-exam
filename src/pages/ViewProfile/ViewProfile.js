import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import CommonBtn from '../Shared/CommonBtn/CommonBtn';

const ViewProfile = () => {
    const {user} = useAuth();
    return (
        <div className="flex flex-col items-center justify-center my-10">
            <img className="h-36 w-36" src={user.photoURL || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} alt="" />
            <h2 className="text-3xl mt-1 font-bold">{user.displayName}</h2>
            <p className="mt-1">{user.email}</p>
            <CommonBtn destination="/dashboard" title="Back To Dashboard" />
        </div>
    );
};

export default ViewProfile;