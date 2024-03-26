import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout(): JSX.Element {
  return <div className="size-full">
    <Header />
    <main>
        <Outlet />
    </main>
  </div>;
}
