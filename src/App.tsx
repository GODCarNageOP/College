import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Colleges from "./pages/Colleges";
import Universities from "./pages/Universities";
import Admission from "./pages/Admission";
import About from "./pages/About";
import Contact from "./pages/Contact";
import React from "react"

function App() {
  const Layout: React.FC = () => {
    return (
      <div className=" app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/colleges",
          element: <Colleges/>,
        },
        {
          path: "/universities",
          element: <Universities/>,
        },
        {
          path: "/admission",
          element: <Admission/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        }]
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
