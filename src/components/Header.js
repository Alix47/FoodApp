import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Error from "./Error";

const Logo = () => {
  return (
    <a href="/" className="p-2 font-bold text-sm md:text-xl text-orange-500">
      FOODSTORE
    </a>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const cartTotalCount = useSelector((store) => store.cart.totalItemCount);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login")
    }).catch((error) => {
      // An error happened.
      <Error/>
    });
  }

  return (
    <div className="flex justify-between items-center  shadow-lg z-10 w-full bg-slate-50 ">
      <div className="hidden md:flex md:items-center">
        <Logo />
      </div>
      <div>
        <ul className="flex list-none md:pr-14 font-semibold text-gray-700 ">
          <li className="p-3 md:mr-10 hover:text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 md:mr-10 hover:text-black">
            <Link to="/about">About</Link>
          </li>
          <li className="p-3 md:mr-10 hover:text-black">
            <Link to="/help">Help</Link>
          </li>
          <li className="pt-3 px-3 md:mr-10">
            <Link
              to="/cart"
              className="flex gap-1 items-center"
              aria-label="link to cart page"
            >
              <BsCart4 className="inline text-2xl text-orange-400" />(Cart)
              <span className=" font-bold text-orange-400 p-[1px]">
                {cartTotalCount ? (
                  <div data-testid="cart">{cartTotalCount}</div>
                ) : (
                  ""
                )}
              </span>
            </Link>
          </li>
          <li className="p-3 mr-10 hover:text-black">
            <button className="font-bold " onClick={handleSignOut}>Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
