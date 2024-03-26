import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lessons from "./pages/Lessons";
import Layout from "./layouts/Layout";
import LessonDetails from "./pages/LessonDetails";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import Students from "./pages/Students";

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Lessons /> },
        {
          path: "/lesson/:lessonId",
          element: <LessonDetails />,
        },
        {
          path: "/students",
          element: <Students />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
