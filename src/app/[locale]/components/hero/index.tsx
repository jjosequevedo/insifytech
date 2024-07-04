'use client';

import Image from "next/image";
import Link from "next/link";
import { LangSwitcher } from "../langswitcher";
import { useTranslations } from "next-intl";

export const Hero = () => {

    const t = useTranslations();

    return (
        <header className="bg-white dark:bg-gray-900">
            <nav className="relative bg-white dark:bg-gray-900">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <Link href="#">
                            <Image width={200} height={200} className="w-auto h-6 sm:h-7" src='https://merakiui.com/images/full-logo.svg' alt="" />
                        </Link>

                        {/* <!-- Mobile menu button --> */}
                        <div className="flex md:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg> */}
                            </button>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> :className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"*/}
                    <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">{t('Home')}</Link>
                            <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">{t('Shop')}</Link>
                            <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">{t('Contact')}</Link>
                            <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">{t('About us')}</Link>
                        </div>

                        <div className="flex justify-center md:block">
                            <LangSwitcher />
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{t('Best place to choose your clothes')}</h1>

                            <p className="mt-3 text-gray-600 dark:text-gray-400">{t('The old rocking chair creaked on the porch as Eliza peered out at the approaching storm')}</p>

                            <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">{t('Shop Now')}</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <Image width={200} height={200} className="w-full h-full lg:max-w-3xl" src='https://merakiui.com/images/components/Catalogue-pana.svg' alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>
        </header>
    );
}