import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AllResponses = () => {
    const { quesId } = useParams();
    const [responses, setResponses] = useState([]);
    useEffect(() => {
        fetch(`https://agile-retreat-39153.herokuapp.com/responses`)
            .then(res => res.json())
            .then(data => setResponses(data))
    }, [quesId]);
    return (
        <div className="py-4 flex flex-col items-center justify-center">
            <div className="flex flex-col w-full md:w-2/3">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="border-b bg-blue-100">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Email
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Marks
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        responses.map(res => 
                                            res.quesId === quesId && <tr 
                                            key={res._id}
                                            className="border-b">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {res.studentEmail}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Cell
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Cell
                                                    </td>
                                                </tr>                                     
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllResponses;