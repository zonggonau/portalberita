import React, { useEffect } from "react";

import { Link, Head } from "@inertiajs/inertia-react";
import Footer from "./Footer";
import Header from "./Header";
import MobileNav from "./MobileNav";

export default function Layout({ title, children }) {
    return (
        <div>
            <Header />
            <MobileNav />
            <main id="content">
                <Head title={title} />
                <div>{children}</div>
            </main>
            <Footer />
            <Link
                href="#"
                className="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 block opacity-90"
                aria-label="Scroll To Top"
            >
                <svg
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z"
                        clipRule="evenodd"
                    ></path>
                    <path
                        fillRule="evenodd"
                        d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </Link>
        </div>
    );
}
