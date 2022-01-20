import { useState } from "react";
import Link from 'next/link';
import siteMetaData from "../data/siteMetaData"

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                        <Link href='/'>
                            <a className='inline-flex items-center p-2 mr-4 '>
                                <span className='text-xl text-white font-bold uppercase tracking-wide'>
                                    Home
                                </span>
                            </a>
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {siteMetaData.documentation.map((item) => {
                                if (item.landingPage == true) {

                                    const ref = "/" + item.name;
                                    return (
                                        <li className="nav-item" key={item.name}>
                                            <Link href={ref} key={item.name}>
                                                <a className='inline-flex items-center p-2 mr-4 '>
                                                    <span className='text-xl text-white font-bold uppercase tracking-wide'>
                                                        {item.name}
                                                    </span>
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
