import moment from 'moment';
import React from 'react';

const AlertTimer = (props) => {
    const { startingTime, endingTime } = props;
    const difference = moment(startingTime).from(endingTime);
    console.log(moment(startingTime).from(endingTime))

    return (
        <div className="bg-purple-900 h-20 w-20 fixed -left-32">
            <div className="">
                {difference}
            </div>
        </div>
    );
};

export default AlertTimer;