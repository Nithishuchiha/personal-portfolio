import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
const Navbar = () => {
  return (
    <div>
      <nav className=" flex justify-between items-center bg-black w-full">
        <div className="logo text-white italic align-right-500 ml-8  border-4  p-2 ">
          Np
        </div>
        <ul className="flex space-x-12  m-4 p-3 ">
          <Link to="/">
            <li className="hover:text-yellow-500  text-white flex font-semibold">
              <span className="mr-2 mt-1">
                <IoHomeOutline />{" "}
              </span>{" "}
              About me
            </li>
          </Link>
          {/* <Link> */}
          <li className="hover:text-red-500 text-white flex font-semibold">
            <span className="mt-1 mr-2">
              <IoIosContact />
            </span>
            <Link to="/contact">Contact us</Link>
          </li>
          {/* </Link> */}
          {/* <Link> */}
          {/* <li className="hover:text-green-500 text-white font-semibold">
            projects
          </li> */}
          {/* </Link> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
