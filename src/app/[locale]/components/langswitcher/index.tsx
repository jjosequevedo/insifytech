'use client';

import { locales } from "@/i18n";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
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
                className="cursor-pointer relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 flex flex-row gap-1"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-labelledby="listbox-label"
                onClick={toggleDropdown}
            >
                <span className="flex items-center">
                    <span className="h-5 w-5 flex-shrink-0 rounded-full">{selectedLang}</span>
                </span>
            </button>
            {isOpen && (
                <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabIndex={-1} role="listbox" aria-labelledby="listbox-label">
                    {
                        locales.map((lang, i) => (
                            <li
                                key={i}
                                className="cursor-pointer relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 flex flex-row gap-1"
                                onClick={() => handleLangChange(lang)}
                            >
                                <div className="flex items-center">
                                    <span className="h-5 w-5 flex-shrink-0 rounded-full">
                                        {lang.toUpperCase()}
                                    </span>
                                    {selectedLang == lang.toUpperCase() && <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-blue-400" />}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
};
