import React, { Fragment } from 'react';
import classes from "../../../../styles/Answers.module.css";
import "./Answer.css";
import AnswerCheckbox from './AnswerCheckbox';

const Answers = ({ options = [], input, handleAnswerChange, toogleActive, selectedAnswer }) => {

    return (
        <>
        <div className="text-base capitalize w-full my-2 py-1 rounded">

            <h4 >Question can have multiple answers</h4>
        </div>
        <div className={classes.answers}>
            {options?.map((option, index) => (
                <Fragment key={index}>
                    {input ? (
                        <AnswerCheckbox
                            key={index}
                            className={classes.answer}
                            selectBox={classes.correct}
                            text={option.title}
                            value={index}
                            checked={option.checked}
                            onChange={(e) => handleAnswerChange(e, index)}
                        />
                    ) : (
                        <AnswerCheckbox
                            key={index}
                            className={`${classes.answer} ${option.correct
                                    ? classes.correct
                                    : option.checked
                                        ? classes.wrong
                                        : null
                                } `}
                            text={option.title}
                            defaultChecked={option.checked}
                            disabled
                        />
                    )}
                </Fragment>
            ))}
        </div>
        </>
    );
};

export default Answers;