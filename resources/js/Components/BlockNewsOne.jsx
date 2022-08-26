import React from "react";

export default function BlockNewsOne({ title, props }) {
    return (
        <div>
            <div className="bg-white py-6">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex-shrink max-w-full w-full overflow-hidden">
                            <div className="w-full py-3">
                                <h2 className="text-gray-800 text-2xl font-bold">
                                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                                    {title}
                                </h2>
                            </div>
                            <div className="flex flex-row flex-wrap -mx-3">
                                {props.articles.map((item, index) => {
                                    if (index <= 7) {
                                        return (
                                            <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
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
                    </div>
                </div>
            </div>
        </div>
    );
}
