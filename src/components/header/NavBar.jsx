import { Link, useLocation } from "react-router";
import SearchInput from "../SearchInput";
import HeartIcon from "../../assets/icons/heart-icon";
import CartIcon from "../../assets/icons/cart-icon";
import OrderIcon from "../../assets/icons/order-icon.png";
import UserIcon from "../../assets/icons/user-icon";
import UserManageIcon from "../../assets/icons/user.png";
import CancelIcon from "../../assets/icons/cancel-icon.png";
import ReviewsIcon from "../../assets/icons/reviews-icon.png";
import LogoutIcon from "../../assets/icons/logout-icon.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "Sign Up", href: "/signup" },
];
const NavBar = ({ authorized = true }) => {
  const { pathname } = useLocation();
  return (
    <nav className="mt-8 text-colors-text-3 flex justify-between after:border-b after:top-[20%] after:content-[''] after:h-4 after:block  after:absolute after:left-0 after:right-0">
      <Link to="/" className="text-2xl font-bold font-inter">
        Exclusive{" "}
      </Link>
      <ul className="flex items-center gap-12">
        {NAV_LINKS.map((link) => {
          return (
            <li key={link.href} className="text-base capitalize font-poppins">
              <Link
                to={link.href}
                className={` ${
                  pathname === link.href ? "border-b border-colors-text-3" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <SearchInput />

      <div className="flex items-center gap-4">
        <Link to="wishlist">
          <HeartIcon />
        </Link>
        <Link to="cart" className="relative">
          <CartIcon />
          <p className="absolute bottom-[60%] left-[70%] bg-colors-secondary-3 text-colors-primary-1 size-6 rounded-full flex items-center justify-center">
            2
          </p>
        </Link>
        {authorized && (
          <button className="relative group">
            <UserIcon />
            <ul
              className={`hidden z-50 group-focus-within:flex absolute right-[15%] rounded-sm mt-1 text-colors-primary-1 pl-6 pr-4 py-6 flex flex-col gap-4 ${
                pathname === "/"
                  ? "bg-colors-text-3/[0.04] backdrop-blur-[75px]"
                  : "bg-colors-text-3 text-colors-primary-1"
              }`}
            >
              <li>
                <Link
                  to="account"
                  className="flex items-center gap-4 capitalize w-max"
                >
                  <img src={UserManageIcon} width={26} height={26} />
                  manage my account
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-4 capitalize w-max">
                  <img src={OrderIcon} />
                  my order
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-4 capitalize w-max">
                  <img src={CancelIcon} />
                  my cancellation
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-4 capitalize w-max">
                  <img src={ReviewsIcon} />
                  my reviews
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-4 capitalize w-max">
                  <img src={LogoutIcon} />
                  logout
                </Link>
              </li>
            </ul>
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
