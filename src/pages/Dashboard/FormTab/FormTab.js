import React, { useState } from 'react';
import QuestionSet from '../QuestionForm/QuestionSet/QuestionSet';
import Responses from '../Responses/Responses';

const FormTab = () => {
    const [active, setActive] = useState("questions");
    return (
        <div>
            <div className="flex justify-center my-3">
                <button onClick={() => setActive("questions")}><span className={active === "questions" ? "mr-3 font-bold text-lg text-purple-900" : "mr-3 font-bold  text-black text-lg"}>Questions</span></button>
                <button onClick={() => setActive("responses")}><span className={active === "responses" ? "font-bold text-lg text-purple-900" : "font-bold  text-black text-lg"}>Responses</span></button>
            </div>
            {
                active === "questions"?
                <QuestionSet />
                :
                <Responses />
            }
        </div>

    );
};

export default FormTab;