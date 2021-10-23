import React from 'react';
import {IoMdArrowDropdown} from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import {MdStorage} from "react-icons/md";
import {AiOutlineFolderOpen} from "react-icons/ai";
import img from '../../../images/ESXGaXHWoAAk9eP.png';
import { Link } from 'react-router-dom';

const DashboardBody = () => {
    return (
        <div className="md:px-12 py-8">
            <div className="flex justify-between">
                <div>
                    <p>Recent Forms</p>
                </div>
                <div className="flex items-center">
                    <p className="flex items-center mr-10">Owned by anyone<IoMdArrowDropdown /></p>
                    <MdStorage className="ml-3 cursor-pointer" />
                    <AiOutlineFolderOpen className="ml-3 cursor-pointer" />
                </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6">
                <Link to="/form" className="border border-transparent hover:border-purple-500 cursor-pointer">
                    <img src={img} alt="" />
                    <p className="flex items-center"><MdStorage />opened on october</p>
                    <FiMoreVertical />
                </Link>
            </div>
        </div>
    );
};

export default DashboardBody;