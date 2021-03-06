import React from 'react'
import { FeaturesIMG } from '../../assets'
import { FaCheckCircle } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Features() {
    return (
        <div className="py-5 bg-white font-rubik" id="features">
            <div className="container mx-auto px-5 lg:px-20 my-10 lg:my-20">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
                    <div className="w-full lg:w-1/2 p-5">
                        <LazyLoadImage src={FeaturesIMG} alt="Features Images" />
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2 mt-10 lg:mt-0">
                        <span className="xl:text-5xl text-3xl">We Provide Many Features You Can Use</span>
                        <span className="mt-10 xl:text-xl text-md">You can explore the features that we provide with fun and have their own functions each feature.</span>
                        <div className="mt-10 space-y-5">
                            <span className="flex items-center">
                                <FaCheckCircle className="text-green-500 text-xl lg:text-2xl mr-3" />
                                <span className="xl:text-xl text-md">Powerfull online protection.</span>
                            </span>
                            <span className="flex items-center">
                                <FaCheckCircle className="text-green-500 text-xl lg:text-2xl mr-3" />
                                <span className="xl:text-xl text-md">Internet without borders.</span>
                            </span>
                            <span className="flex items-center">
                                <FaCheckCircle className="text-green-500 text-xl lg:text-2xl mr-3" />
                                <span className="xl:text-xl text-md">Supercharged VPN.</span>
                            </span>
                            <span className="flex items-center">
                                <FaCheckCircle className="text-green-500 text-xl lg:text-2xl mr-3" />
                                <span className="xl:text-xl text-md">No specific time limits.</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
