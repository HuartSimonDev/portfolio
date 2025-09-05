import ThemeSelectorDropDown from "./ThemeSelectorDropDown";
import NavLink from "./NavLink";

function NavBar() {
    return (
        <div className="flex justify-between mt-5 ml-10 mr-10">
            <div className="flex justify-start gap-3">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/projects"}>Projects</NavLink>
            </div>
            <div>
                <ThemeSelectorDropDown />
            </div>
        </div>
    );
}

export default NavBar;
