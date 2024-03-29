import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useToken } from "@/utils/context/token";

const Navbar = () => {
  const { token } = useToken();
  return (
    <div className="bg-gray-800 flex flex-row justify-center items-center py-4 px-5 sticky top-0 z-50">
      <div className="flex flex-row gap-8 items-center">
        <Link to={"/"} className="text-white">
          <img src={logo} alt="logo" className=" h-10 object-cover" />
        </Link>
        <Link
          to={"/"}
          className="text-base text-white cursor-pointer hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          to={"/profil"}
          className="text-base text-white cursor-pointer hover:text-gray-300"
        >
          Profil
        </Link>
        <Link
          to={"/peraturan"}
          className="text-base text-white cursor-pointer hover:text-gray-300"
        >
          Peraturan
        </Link>
        <Link
          to={"/article"}
          className="text-base text-white cursor-pointer hover:text-gray-300"
        >
          Article
        </Link>
        {token ? (
          <Link
            to={"/admin"}
            className="text-base text-white cursor-pointer hover:text-gray-300"
          >
            Admin
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="text-base text-white cursor-pointer hover:text-gray-300">
                Admin
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-2">
              <DropdownMenuItem>
                <Link to={"/login"}>Masuk</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default Navbar;
