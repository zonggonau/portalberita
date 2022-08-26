import React from "react";

export default function Category({ title, props, popularity }) {
    return (
        <div>
            <div className="bg-gray-50 py-6">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
                            <div className="w-full py-3">
                                <h2 className="text-gray-800 text-2xl font-bold">
                                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                                    {title}
                                </h2>
                            </div>
                            <div className="flex flex-row flex-wrap -mx-3">
                                <div className="flex-shrink max-w-full w-full px-3 pb-5">
                                    <div className="relative hover-img max-h-98 overflow-hidden">
                                        <a href="#">
                                            <img
                                                className="max-w-full w-full mx-auto h-auto"
                                                src={
                                                    props.articles[0].urlToImage
                                                }
                                                alt={props.articles[0].title}
                                            />
                                        </a>
                                        <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                            <a href="#">
                                                <h2 className="text-3xl font-bold capitalize text-white mb-3">
                                                    {props.articles[0].title}
                                                </h2>
                                            </a>
                                            <p className="text-gray-100 hidden sm:inline-block">
                                                {props.articles[0].description}
                                            </p>
                                            <div className="pt-2">
                                                <div className="text-gray-100">
                                                    <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                                                    {
                                                        props.articles[0].source
                                                            .name
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {props.articles.map((item, index) => {
                                    if (index <= 18 && index >= 1) {
                                        return (
                                            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                                <div className="flex flex-row sm:block hover-img">
                                                    <a href="">
                                                        <img
                                                            className="max-w-full w-full mx-auto"
                                                            src={
                                                                item.urlToImage
                                                            }
                                                            alt={item.title}
                                                        />
                                                    </a>
                                                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                                        <h3 className="text-sm font-bold leading-tight mb-2">
                                                            <a href="#">
                                                                {item.title}
                                                            </a>
                                                        </h3>
                                                        <p className="text-sm hidden md:block text-gray-600 leading-tight mb-1">
                                                            {item.description}
                                                        </p>
                                                        <a
                                                            className="text-gray-500 text-sm"
                                                            href="#"
                                                        >
                                                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
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
                        <div
                            className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last"
                            style={{ position: "relative" }}
                        >
                            <div className="w-full bg-white">
                                <div className="mb-6">
                                    <div className="p-4 bg-gray-100">
                                        <h2 className="text-lg font-bold">
                                            Most Popular
                                        </h2>
                                    </div>
                                    <ul className="post-number">
                                        {popularity.articles.map(
                                            (item, index) => {
                                                if (index <= 9) {
                                                    return (
                                                        <li className="border-b border-gray-100 hover:bg-gray-50">
                                                            <a
                                                                className="text-sm font-bold px-6 py-3 flex flex-row items-center"
                                                                href="#"
                                                            >
                                                                {item.title}
                                                            </a>
                                                        </li>
                                                    );
                                                }
                                            }
                                        )}
                                    </ul>
                                </div>
                            </div>

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
