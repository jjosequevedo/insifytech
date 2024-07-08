'use client';

import { locales } from "@/i18n";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

export const LangSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentLocale = useLocale();
    const [selectedLang, setSelectedLang] = useState(currentLocale.toUpperCase());
    const router = useRouter();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLangChange = (lang: string) => {
        setSelectedLang(lang);
        setIsOpen(false);
        router.push('/' + lang.toLocaleLowerCase())
    };

    return (
        <div className="relative">
            <button
                type="button"
                className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none flex flex-row gap-1"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-labelledby="listbox-label"
                onClick={toggleDropdown}
            >
                <span className="mx-1">{selectedLang}</span>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </button>
            {isOpen && (
                <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabIndex={-1} role="listbox" aria-labelledby="listbox-label">
                    {
                        locales.map((lang, i) => {
                            let upper = lang.toUpperCase();
                            return (
                                <li
                                    key={i}
                                    className={`hover:bg-blue-400 cursor-pointer relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 flex flex-row gap-1`}
                                    onClick={() => handleLangChange(lang)}
                                >
                                    <div className="flex items-center">
                                        <span className="h-5 w-5 flex-shrink-0 rounded-full">
                                            {upper}
                                        </span>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            )}
        </div>
    );
};
