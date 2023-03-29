import { Link } from "gatsby";
import React, { useState } from "react";

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="border-b border-gray-400 m-auto">
            <div className="flex items-center justify-between py-1 max-w-screen-xl mx-auto  ">
                <img
                    className="ml-5 w-32"
                    src="data:image/jpeg;base64,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"
                    alt="logo"
                />

                <nav>
                    <section className="MOBILE-MENU flex lg:hidden">
                        <div
                            className="HAMBURGER-ICON space-y-2 mr-5"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        <div
                            className={
                                isNavOpen ? "showMenuNav" : "hideMenuNav"
                            }
                        >
                            <div
                                className="absolute top-0 right-0 px-8 py-8 "
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600 "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="flex flex-col items-center justify-between min-h-[250px] ">
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <Link to="/about"> About</Link>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <Link to="/portfolio"> Portfolio</Link>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <Link to="/contact"> Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-5">
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
            </div>
        </div>
    );
}
