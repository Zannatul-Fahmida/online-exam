import React from 'react';
import CommonBtn from '../../Shared/CommonBtn/CommonBtn';
import bannerImg from "../../../images/banner.png";

const Banner = () => {
    return (
		<div className="bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-500 mb-12">
			<div className="container mx-auto py-8 md:flex md:items-center px-2">
				<div className="mx-auto w-2/3 py-24 text-center md:text-left">
					<h2 className="text-3xl md:text-5xl font-bold text-purple-800">
						Online Examination Application
					</h2>
					<p className="text-xl pt-4 pb-8">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius
						praesentium debitis facilis enim asperiores et laboriosam earum id
						laborum. sapiente vitae dolore doloremque sint eos?
					</p>
					<CommonBtn destination="/features" title="Features" />
				</div>
				<div className="px-2 md:w-3/5 w-full">
					<img src={bannerImg} alt="banner" />
				</div>
			</div>
		</div>
    );
};

export default Banner;