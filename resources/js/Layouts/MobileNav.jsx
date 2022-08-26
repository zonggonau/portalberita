import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function MobileNav() {
    return (
        <div className="side-area fixed w-full h-full inset-0 z-50">
            <div className="back-menu fixed bg-gray-900 bg-opacity-70 w-full h-full inset-x-0 top-0">
                <div className="cursor-pointer text-white absolute right-64 p-2">
                    <svg
                        className="bi bi-x"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                            clip-rule="evenodd"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </div>
            </div>

            <nav
                id="mobile-nav"
                className="side-menu flex flex-col right-0 w-64 fixed top-0 bg-white dark:bg-gray-800 h-full overflow-auto z-40"
            >
                <div className="mb-auto">
                    <nav className="relative flex flex-wrap">
                        <div className="text-center py-4 w-full font-bold border-b border-gray-100">
                            <Link href="/">TAILNEWS</Link>
                        </div>
                        <ul
                            id="side-menu"
                            className="w-full float-none flex flex-col"
                        >
                            <li className="relative">
                                <Link
                                    href="#"
                                    className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="dropdown relative">
                                <Link
                                    className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                    href="javascript:;"
                                >
                                    News
                                </Link>

                                <ul
                                    className="dropdown-menu block rounded rounded-t-none top-full z-50 ml-4 py-0.5 text-left bg-white dark:bg-gray-800 mb-4"
                                    style={{ minWidth: "12rem" }}
                                >
                                    <li className="subdropdown relative">
                                        <Link
                                            className="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                            href="javascript:;"
                                        >
                                            Dropdown item
                                        </Link>

                                        <ul
                                            className="dropdown-menu block rounded rounded-t-none top-full z-50 ml-4 py-0.5 text-left bg-white dark:bg-gray-800"
                                            style={{ minWidth: "12rem" }}
                                        >
                                            <li>
                                                <Link
                                                    className="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                                    href="#"
                                                >
                                                    Dropdown sub item
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                                    href="#"
                                                >
                                                    Dropdown sub item
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                                    href="#"
                                                >
                                                    Dropdown sub item
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                                    href="#"
                                                >
                                                    Dropdown sub item
                                                </Link>
                                            </li>
                                        </ul>
                                        <li className="relative">
                                            <Link
                                                className="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                                href="#"
                                            >
                                                Dropdown item
                                            </Link>
                                        </li>
                                        <li className="relative">
                                            <Link
                                                className="block w-full py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                                href="#"
                                            >
                                                Dropdown item
                                            </Link>
                                        </li>
                                    </li>
                                </ul>
                            </li>

                            <li className="relative">
                                <Link
                                    href="#"
                                    className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                >
                                    Sport
                                </Link>
                            </li>

                            <li className="relative">
                                <Link
                                    href="#"
                                    className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                >
                                    Travel
                                </Link>
                            </li>

                            <li className="relative">
                                <Link
                                    href="#"
                                    className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                >
                                    Techno
                                </Link>
                            </li>

                            <li className="relative">
                                <Link
                                    href="#"
                                    className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                >
                                    Worklife
                                </Link>
                            </li>

                            <li className="relative">
                                <Link
                                    href="#"
                                    className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                >
                                    Future
                                </Link>
                            </li>

                            <li className="relative">
                                <Link
                                    href="#"
                                    className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50"
                                >
                                    More
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="py-4 px-6 text-sm mt-6 text-center">
                    <p>
                        Copyright <Link href="#">Tailnews</Link> - All right
                        reserved
                    </p>
                </div>
            </nav>
        </div>
    );
}
