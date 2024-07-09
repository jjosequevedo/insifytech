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
                        <div className="lg:max-w-xl">
                            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-6xl">{t('Simplified Website Development Solutions')}</h1>

                            <h3 className="mt-3 text-2xl text-gray-600 dark:text-gray-400">{t("Insify Tech combines insight with simplification to deliver professional website development services using PHP and NextJS. Our skilled developers create innovative and easy-to-manage websites that perfectly capture your brand's essence. Let us help you Insify your tech presence!")}</h3>

                            <button className="w-full px-5 py-2 mt-6 text-md tracking-wider text-white font-semibold transition-colors duration-300 transform bg-emerald-600 rounded-lg lg:w-auto hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500">{t("Let's talk")}</button>
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