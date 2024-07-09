'use client';

import { useState } from "react";
import { IconMoon, IconSun } from "../extraicons";

export const ToggleTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button onClick={toggleTheme}>
            {isDarkMode ? <IconSun /> : <IconMoon />}
        </button>
    );
};
