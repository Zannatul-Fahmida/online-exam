import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <h1 className="text-4xl font-bold title-font text-purple-900 mb-12 text-center">Testimonials</h1>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-100 shadow-inner hover:shadow-lg p-8 rounded">
                            <p className="text-gray-400 text-xl pb-3">
                                {<FaQuoteRight />}
                            </p>
                            <p className="leading-relaxed mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima autem illo pariatur illum animi iusto excepturi, saepe iste facilis architecto velit accusantium eaque fuga.</p>
                            <div className="inline-flex items-center">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 text-4xl">
                                    {<AiOutlineUser />}
                                </div>
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Humayan Kabir Rana</span>
                                    <span className="text-gray-500 text-sm">Teacher</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-100 shadow-inner hover:shadow-lg p-8 rounded">
                            <p className="text-gray-400 text-xl pb-3">
                                {<FaQuoteRight />}
                            </p>
                            <p className="leading-relaxed mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sit? Iste ad eum vitae amet laboriosam. Ipsum a alias aliquam aspernatur molestias neque cupiditate quo.</p>
                            <div className="inline-flex items-center">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 text-4xl">
                                    {<AiOutlineUser />}
                                </div>
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Zannatul Fahmida</span>
                                    <span className="text-gray-500 text-sm">Student</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;