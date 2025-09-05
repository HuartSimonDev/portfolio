import Button from "./Button";
import ThemeSelectorDropDown from "./ThemeSelectorDropDown";

function NavBar() {
    return (
        <div className="flex justify-between mt-5 ml-10 mr-10">
            <div className="flex justify-start gap-3">
                <Button>Home</Button>
                <Button>Projects</Button>
            </div>
            <div>
                <ThemeSelectorDropDown />
            </div>
        </div>
    );
}

export default NavBar;
