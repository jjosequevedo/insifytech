import { faDribbble, faFacebookF, faFacebookSquare, faGithub, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faI, faT } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="relative bg-[#f1f5f9] text-gray-800 pt-12 pb-4">
            <div className="w-full flex items-center justify-center bg-[#f1f5f9]">
                <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
                    <div className="w-full text-7xl font-bold">
                        <h1 className="w-full md:w-2/3 text-gray-900">How can we help you. get in touch</h1>
                    </div>
                    <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                        <p className="w-full md:w-2/3 text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
                        <div className="w-44 pt-6 md:pt-0">
                            <Link href='#' className="bg-blue-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact US</Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex mt-24 mb-12 flex-row justify-between">
                            <Link href="#" className="flex gap-2 items-center">
                                <div className="border flex items-center justify-center border-lime-600 rounded-full p-2 w-10 h-10">
                                    <FontAwesomeIcon className="transform-none position-absolute text-emerald-600" icon={faI} />
                                    <FontAwesomeIcon className="text-sky-600" icon={faT} />
                                </div>
                                <span className="w-auto h-6 sm:h-7 text-gray-700 text-lg">Insify<span className="font-semibold">Tech</span></span>
                            </Link>
                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">About</a>
                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Services</a>
                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Why us</a>
                            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Contact</a>
                            <div className="flex flex-row space-x-8 items-center justify-between">
                                <Link href='#'>
                                    <FontAwesomeIcon className="text-blue-400" icon={faFacebookF} />
                                </Link>
                                <Link href='#'>
                                    <FontAwesomeIcon className="text-[#c13584]" icon={faInstagram} />
                                </Link>
                                <Link href='#'>
                                    <FontAwesomeIcon className="text-red-400" icon={faYoutube} />
                                </Link>
                            </div>
                        </div>
                        <hr className="border-gray-600" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                <div className="text-sm text-gray-500 font-semibold pt-4">
                                    Copyright © <span id="get-current-year">2021</span><a href="https:www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Notus JS</a> by
                                    <a href="https:www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
