import useThemeSelector from "../hooks/useThemeSelector";

export default function ThemeSelectorDropDown() {
    const { changeThemeSelector, themeSelector } = useThemeSelector();

    return (
        <select
            value={themeSelector}
            onChange={(e) => {
                changeThemeSelector(e.target.value);
            }}
            className="bg-color-bg2-light dark:bg-color-bg2-dark dark:hover:bg-color-bg3-dark hover:bg-color-bg3-light px-3 py-2 rounded-lg cursor-pointer"
        >
            <option value="default">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
    );
}
