import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="container fixed top-0 start-0 py-4 w-full m-0 bg-slate-200">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-black"
              }
              to={"/"}
            >
              Lessons
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
