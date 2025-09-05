import { useState, useEffect } from "react";

export default function useThemeSelector() {
    const [themeSelector, setThemeSelector] = useState(getCurrentThemeSelector);
    useEffect(() => {
        updateTheme(themeSelector);
    }, []);

    function updateTheme(newThemeSelector) {
        document.documentElement.classList.toggle(
            "dark",
            newThemeSelector === "dark" ||
                (newThemeSelector === "default" &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    }

    function getCurrentThemeSelector() {
        return localStorage.theme ?? "default";
    }

    function changeThemeSelector(newThemeSelector) {
        if (newThemeSelector === "default") {
            setThemeSelector("default");
            localStorage.removeItem("theme");
        } else {
            setThemeSelector(newThemeSelector);
            localStorage.theme = newThemeSelector;
        }

        updateTheme(newThemeSelector);
    }

    return {
        changeThemeSelector,
        themeSelector,
    };
}
