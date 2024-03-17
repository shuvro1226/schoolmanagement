import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lessons from "./pages/Lessons";
import Layout from "./layouts";
import LessonDetails from "./pages/LessonDetails";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Lessons /> },
        {
          path: "/lesson/:lessonId",
          element: <LessonDetails />,
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
