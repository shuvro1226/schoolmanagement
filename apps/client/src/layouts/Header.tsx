import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Toggle } from "@/components/ui/toggle";
import { NavLink } from "react-router-dom";

type Props = {
  setDarkMode: (darkMode: boolean) => void;
  darkMode: boolean;
};

export default function Header(props: Props): JSX.Element {
  const { setDarkMode, darkMode } = props;
  const linkActiveClasses =
    " text-black dark:text-white hover:text-black dark:hover:text-white";
  const linkClasses =
    " text-neutral-950 dark:text-slate-400 hover:text-black dark:hover:text-white";

  return (
    <div className="fixed top-0 start-0 p-4 w-full m-0 bg-slate-200 dark:bg-neutral-900">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink
              className={({ isActive }) =>
                `me-4 ${isActive ? linkActiveClasses : linkClasses}`
              }
              to={"/"}
            >
              Lessons
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `me-4 ${isActive ? linkActiveClasses : linkClasses}`
              }
              to={"/students"}
            >
              Students
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <Toggle onClick={() => setDarkMode(!darkMode)} className="text-black hover:text-black hover:border-neutral-600">
          {darkMode ? "Turn on Light Mode" : "Turn on Dark Mode"}
        </Toggle>
      </NavigationMenu>
    </div>
  );
}
