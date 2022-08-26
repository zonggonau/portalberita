import React from "react";

export default function BlockNews({ title, props }) {
    return (
        <div className="bg-white">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                        <div className="w-full py-3">
                            <h2 className="text-gray-800 text-2xl font-bold">
                                <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                                {title}
                            </h2>
                        </div>
                        <div className="flex flex-row flex-wrap -mx-3">
                            {props.articles.map((item, index) => {
                                if (index <= 5) {
                                    return (
                                        <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                            <div
                                                className="flex flex-row sm:block hover-img"
                                                key={index}
                                            >
                                                <a href="">
                                                    <img
                                                        className="max-w-full w-full mx-auto"
                                                        src={item.urlToImage}
                                                        alt={item.title}
                                                    />
                                                </a>
                                                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                                    <h3 className="text-sm font-bold leading-tight mb-2">
                                                        <a href="#">
                                                            {item.title}
                                                        </a>
                                                    </h3>
                                                    <p className="hidden md:block text-gray-600 leading-tight mb-1 text-sm">
                                                        {item.description}
                                                    </p>
                                                    <a
                                                        className="text-gray-500"
                                                        href="#"
                                                    >
                                                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2 text-sm"></span>
                                                        {item.source.name}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
                        <div
                            className="w-full bg-gray-50 h-full"
                            style={{ position: "relative" }}
                        >
                            <div
                                className="text-sm py-6"
                                style={{
                                    position: "static",
                                    left: "auto",
                                    width: "389px",
                                }}
                            >
                                <div className="w-full text-center">
                                    <a className="uppercase" href="#">
                                        Advertisement
                                    </a>
                                    <a href="#">
                                        <img
                                            className="mx-auto"
                                            src="https://tailnews.tailwindtemplate.net/src/img/ads/250.jpg"
                                            alt="advertisement area"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
