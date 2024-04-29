import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

export default function Layout(): JSX.Element {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div id="content-wrapper" className={`${darkMode ? "dark " : "light "}size-full`}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <main className="size-full text-neutral-950 dark:text-white">
        <Outlet />
      </main>
    </div>
  );
}
