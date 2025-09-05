import { Link, useLocation } from "react-router-dom";

export default function NavLink({ children, to }) {
    const location = useLocation();
    const path = location.pathname;

    return (
        <Link
            to={to}
            className={`font-normal text-xl font-mono text-gray-950 dark:text-amber-50 px-3 py-2 rounded-lg cursor-pointer${
                path === to
                    ? " bg-stone-200 dark:bg-stone-700"
                    : "dark:hover:text-stone-50 dark:hover:bg-stone-700 hover:bg-stone-200"
            }`}
        >
            {children}
        </Link>
    );
}
