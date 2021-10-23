import React, { useState } from 'react';
import QuestionForm from '../QuestionForm/QuestionForm';
import Responses from '../Responses/Responses';
import './FormTab.css';

const FormTab = () => {
    const [active, setActive] = useState("questions");
    return (
        <div>
            <div className="flex justify-center my-3">
                <button onClick={() => setActive("questions")}><span className={active === "questions" ? "mr-3 font-bold text-lg text-black active" : "mr-3 font-bold  text-black text-lg"}>Questions</span></button>
                <button onClick={() => setActive("responses")}><span className={active === "responses" ? "font-bold text-lg text-black active" : "font-bold  text-black text-lg"}>Responses</span></button>
            </div>
            {
                active === "questions"?
                <QuestionForm />
                :
                <Responses />
            }
        </div>

    );
};

export default FormTab;