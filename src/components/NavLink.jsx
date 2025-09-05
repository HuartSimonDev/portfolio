import { Link, useLocation } from "react-router-dom";

export default function NavLink({ children, to }) {
    const location = useLocation();
    const path = location.pathname;

    return (
        <Link
            to={to}
            className={`px-3 py-2 rounded-lg cursor-pointer${
                path === to
                    ? " bg-color-bg2-light dark:bg-color-bg2-dark"
                    : " dark:hover:bg-color-bg2-dark hover:bg-color-bg2-light"
            }`}
        >
            {children}
        </Link>
    );
}
