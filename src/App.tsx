import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const Layout = () => {
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
