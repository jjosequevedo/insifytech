import Link from "next/link";
import { LangSwitcher } from "../langswitcher";
import { ToggleTheme } from "../toggletheme";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Navbar = () => {

    const t = useTranslations();

    return (
        <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <Link href="#">
                        <Image width={200} height={200} className="w-auto h-6 sm:h-7" src='https://merakiui.com/images/full-logo.svg' alt="" />
                    </Link>

                    {/* <!-- Mobile menu button --> */}
                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        </button>
                    </div>
                </div>

                <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">{t('Home')}</Link>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">{t('Shop')}</Link>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">{t('Contact')}</Link>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">{t('About us')}</Link>
                    </div>

                    <div className="flex flex-row gap-2 justify-center">
                        <ToggleTheme />
                        <LangSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
};
