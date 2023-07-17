import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profile from "../assets/yashXD.jpg";
import {useState} from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const currentUser = {
    id: 1,
    username: "Yash Harale",
    isSeller: true,
  };

  return (
    <div className="navbar h-24 w-full bg-[#0c0c0c] text-white flex">
      <div className="navbarContainer mx-10 flex justify-between items-center w-full mt-8 mb-2">
        <div className="left">
          <Link to="/">
            <img src={logo} alt="" className="h-20 w-20 cursor-pointer" />
          </Link>
        </div>
        <div className="center">
          <div className="links flex gap-14 uppercase text-lg font-medium">
            <Link to="/">
              <span className="cursor-pointer">Home</span>
            </Link>
            <Link to="/">
              <span className="cursor-pointer">Top Colleges</span>
            </Link>
            <Link to="/">
              <span className="cursor-pointer">Top Universities</span>
            </Link>
            <Link to="/">
              <span className="cursor-pointer">Admission</span>
            </Link>
            <Link to="/">
              <span className="cursor-pointer">About</span>
            </Link>
            <Link to="/">
              <span className="cursor-pointer">Contact</span>
            </Link>
          </div>
        </div>
        <div className="right">
          <img
            src={profile}
            alt=""
            className="h-12 w-12 rounded-full cursor-pointer"
            onClick={() => setOpen(!open)}
          />
           {open && (
                <div className="options absolute top-24 right-10 p-5 bg-transparent rounded-lg border text-gray-300 flex flex-col gap-2 font-light w-44">
                  {currentUser && (
                    <>
                      <div className="">
                        <h1>Signed in as</h1>
                        <span className="font-bold text-lg cursor-pointer">
                          {currentUser?.username}
                        </span>
                      </div>
                     
                    </>
                  )}
                  <Link to="/">
                    <span className="cursor-pointer">Orders</span>
                  </Link>
                  <Link to="/">
                    <span className="cursor-pointer">Messages</span>
                  </Link>
                  <Link to="/">
                    <span className="cursor-pointer">Logout</span>
                  </Link>
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
