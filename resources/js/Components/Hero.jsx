import React from "react";

export default function Hero({ props }) {
    return (
        <div className="bg-white py-6">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                        <div className="relative hover-img max-h-98 overflow-hidden">
                            <a href="#">
                                <img
                                    className="max-w-full w-full mx-auto h-auto"
                                    src={props.articles[0].urlToImage}
                                    alt={props.articles[0].title}
                                />
                            </a>
                            <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                <a href="#">
                                    <h2 className="text-xl font-bold capitalize text-white mb-3">
                                        {props.articles[0].title}
                                    </h2>
                                </a>
                                <p className="text-gray-100 hidden sm:inline-block text-sm">
                                    {props.articles[0].description}
                                </p>
                                <div className="pt-2">
                                    <div className="text-gray-100 text-sm">
                                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                                        {props.articles[0].source.name} |{" "}
                                        {props.articles[0].publishedAt.slice(
                                            0,
                                            10
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink max-w-full w-full lg:w-1/2">
                        <div className="box-one flex flex-row flex-wrap">
                            {props.articles.map((item, index) => {
                                if (index <= 4 && index > 0) {
                                    return (
                                        <article className="flex-shrink max-w-full w-full sm:w-1/2">
                                            <div className="relative hover-img max-h-48 overflow-hidden">
                                                <a href="#">
                                                    <img
                                                        className="max-w-full w-full mx-auto h-auto"
                                                        src={item.urlToImage}
                                                        alt={item.title}
                                                    />
                                                </a>
                                                <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                                    <a href="#">
                                                        <h2 className="text-sm font-bold capitalize leading-tight text-white mb-1">
                                                            {item.title}
                                                        </h2>
                                                    </a>
                                                    <div className="pt-1">
                                                        <div className="text-gray-100 text-sm">
                                                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                                                            {item.source.name} |{" "}
                                                            {item.publishedAt.slice(
                                                                0,
                                                                10
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
