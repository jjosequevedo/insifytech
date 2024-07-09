'use client';

import Image from "next/image";
import Link from "next/link";
import { LangSwitcher } from "../../common/langswitcher";
import { useTranslations } from "next-intl";

export const Hero = () => {

    const t = useTranslations();

    return (
        <header className="bg-white dark:bg-gray-900">
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
                        <Image width={200} height={200} className="w-full h-full lg:max-w-3xl" src='/images/hero.svg' alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>
        </header>
    );
}