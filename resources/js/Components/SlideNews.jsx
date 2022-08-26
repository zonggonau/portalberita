import React from "react";

export default function SlideNews({ title, props }) {
    return (
        <div className="relative bg-gray-50">
            <div className="bg-black bg-opacity-70">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
                            <div className="w-full py-3">
                                <h2 className="text-white text-2xl font-bold text-shadow-black">
                                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                                    {title}
                                </h2>
                            </div>
                            <div
                                id="post-carousel"
                                className="splide post-carousel splide--loop splide--ltr splide--draggable is-active is-initialized"
                                role="region"
                                aria-roledescription="carousel"
                            >
                                <div className="splide__arrows splide__arrows--ltr">
                                    <button
                                        className="splide__arrow splide__arrow--prev"
                                        type="button"
                                        aria-label="Go to last slide"
                                        aria-controls="post-carousel-track"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 40 40"
                                            width="40"
                                            height="40"
                                            focusable="false"
                                        >
                                            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                                        </svg>
                                    </button>
                                    <button
                                        className="splide__arrow splide__arrow--next"
                                        type="button"
                                        aria-label="Next slide"
                                        aria-controls="post-carousel-track"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 40 40"
                                            width="40"
                                            height="40"
                                            focusable="false"
                                        >
                                            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
                                    id="post-carousel-track"
                                    style={{
                                        paddingLeft: "0px",
                                        paddingRight: "0px",
                                    }}
                                    aria-live="polite"
                                    aria-relevant="additions"
                                >
                                    <ul
                                        className="splide__list"
                                        id="post-carousel-list"
                                        role="presentation"
                                        style={{
                                            transform: "translateX(-2576px);",
                                        }}
                                    >
                                        {props.articles.map((item, index) => {
                                            if (index >= 4) {
                                                return (
                                                    <li
                                                        className="splide__slide splide__slide--clone is-active"
                                                        id="post-carousel-clone01"
                                                        role="tabpanel"
                                                        aria-roledescription="slide"
                                                        aria-label="1 of 6"
                                                        style={{
                                                            marginRight: "24px",
                                                            width: "calc(33.3333% - 16px)",
                                                        }}
                                                        aria-hidden="true"
                                                    >
                                                        <div className="w-full pb-3">
                                                            <div className="hover-img bg-white ">
                                                                <a
                                                                    href=""
                                                                    tabindex="-1"
                                                                >
                                                                    <img
                                                                        className="max-w-full w-full mx-auto"
                                                                        src={
                                                                            item.urlToImage
                                                                        }
                                                                        alt={
                                                                            item.title
                                                                        }
                                                                    />
                                                                </a>
                                                                <div className="py-3 px-6">
                                                                    <h3 className="text-lg font-bold leading-tight mb-2">
                                                                        <a
                                                                            href="#"
                                                                            tabindex="-1"
                                                                        >
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </a>
                                                                    </h3>
                                                                    <a
                                                                        className="text-gray-500 text-sm"
                                                                        href="#"
                                                                        tabindex="-1"
                                                                    >
                                                                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                                                                        {
                                                                            item
                                                                                .source
                                                                                .name
                                                                        }{" "}
                                                                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                                                                        {item.publishedAt.slice(
                                                                            0,
                                                                            10
                                                                        )}
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            }
                                        })}
                                    </ul>
                                </div>
                                <ul
                                    className="splide__pagination splide__pagination--ltr"
                                    role="tablist"
                                    aria-label="Select a slide to show"
                                >
                                    <li role="presentation">
                                        <button
                                            className="splide__pagination__page is-active"
                                            type="button"
                                            role="tab"
                                            aria-controls="post-carousel-slide01 post-carousel-slide02 post-carousel-slide03"
                                            aria-label="Go to page 1"
                                            aria-selected="true"
                                        ></button>
                                    </li>
                                    <li role="presentation">
                                        <button
                                            className="splide__pagination__page"
                                            type="button"
                                            role="tab"
                                            aria-controls="post-carousel-slide04 post-carousel-slide05 post-carousel-slide06"
                                            aria-label="Go to page 2"
                                            tabindex="-1"
                                        ></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
