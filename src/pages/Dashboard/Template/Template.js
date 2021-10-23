import React from 'react';
import { MdUnfoldMore } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import img1 from '../../../images/plus-icon-vector-add-addition-260nw-1305881509 (1).jpg';
import img2 from '../../../images/google-forms-delete-field.jpg';
import img3 from '../../../images/invite2-1024x550.png';

const Template = () => {
    return (
        <div className="bg-indigo-100 md:px-12 py-8">
            <div className="flex justify-between">
                <div>
                    <p>Start A New Form</p>
                </div>
                <div className="flex items-center">
                    <p>Template Gallery</p>
                    <MdUnfoldMore />
                    <FiMoreVertical />
                </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                <div className="border border-transparent hover:border-purple-500 cursor-pointer">
                    <img src={img1} alt="" className="" />
                    <p className="font-bold">Blank</p>
                </div>
                <div className="border border-transparent hover:border-purple-500 cursor-pointer">
                    <img src={img2} alt="" />
                    <p className="font-bold">Contact information</p>
                </div>
                <div className="border border-transparent hover:border-purple-500 cursor-pointer">
                    <img src={img3} alt="" />
                    <p className="font-bold">Party Invite</p>
                </div>
            </div>
        </div>
    );
};

export default Template;