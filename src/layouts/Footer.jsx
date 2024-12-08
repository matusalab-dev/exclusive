import { Link } from "react-router";
import SubmitIcon from "../assets/icons/submit-icon";
import QRCode from "../assets/icons/qr-code.png";
import GooglePlayStore from "../assets/icons/google-play-store-logo.png";
import AppStore from "../assets/icons/app-store.png";
import FacebookIcon from "../assets/icons/facebook-icon.png";
import TwitterIcon from "../assets/icons/twitter-icon.png";
import InstagramIcon from "../assets/icons/instagram-icon.png";
import LinkedinIcon from "../assets/icons/linkedin-icon.png";
import CopyrightIcon from "../assets/icons/copy-right-icon.png";

const Footer = () => {
  return (
    <footer className=" py-14 mt-14 bg-colors-text-3 text-colors-bg inverse full-bleed flex flex-col justify-between gap-6">
      <div className="flex gap-4 justify-between">
        <div className="flex flex-col gap-4">
          <Link to="/" className="tracking-wide font-bold text-2xl font-inter">
            Exclusive
          </Link>
          <h4 className="font-medium text-xl">Subscribe</h4>
          <p className="text-base">Get 10% off your first order</p>
          <div className="relative flex items-center justify-start">
            <input
              type="email"
              className=" bg-colors-text-3 text-colors-secondary-2 outline-none text-lg px-3 py-3 rounded-md border-2 border-colors-primary-1"
              placeholder="Enter your email"
            />
            <button>
              <SubmitIcon className="-ml-10" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl">Support</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-base max-w-[20ch]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </li>
            <li className="text-base">exclusive@gmail.com</li>
            <li className="text-base">+88015-88888-9999</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl">Account</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-base capitalize text-base">
              <Link>My Account</Link>
            </li>
            <li className="text-base capitalize text-base">
              <Link>Login / Register</Link>
            </li>
            <li className="text-base capitalize text-base">
              <Link>Cart</Link>
            </li>
            <li className="text-base capitalize text-base">
              <Link>Wishlist</Link>
            </li>
            <li className="text-base capitalize text-base">
              <Link>Shop</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl">Quick Link</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-base capitalize text-base">
              <Link>Privacy Policy</Link>
            </li>
            <li className="text-base capitalize text-base">
              <Link>terms of use</Link>
            </li>
            <li className="text-base uppercase text-base">
              <Link>FAQ</Link>
            </li>
            <li className="text-base capitalize text-base">
              <Link>contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium capitalize text-xl">Download App</h3>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium capitalize text-base text-colors-text-2">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-3">
              <img src={QRCode} />
              <div className="flex flex-col gap-2">
                <img src={GooglePlayStore} />
                <img src={AppStore} />
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <img src={FacebookIcon} alt="" />
            <img src={TwitterIcon} alt="" />
            <img src={InstagramIcon} alt="" />
            <img src={LinkedinIcon} alt="" />
          </div>
        </div>
      </div>
      <p className="self-center text-colors-text-2 flex items-center gap-3">
        <img src={CopyrightIcon} alt="" /> Copyright Rimel 2022. All right
        reserved
      </p>
    </footer>
  );
};

export default Footer;
