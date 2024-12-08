import { Link } from "react-router";
import ArrowIcon from "../../assets/icons/arrow-icon";
import AppleLogo from "../../assets/apple-logo";
import HeroImage from "../../assets/hero_endframe.png";
import SlideArrowIcon from "../../assets/icons/slide-arrow";

const HeroSection = () => {
  return (
    <section className="mt-20 flex items-start ">
      <aside>
        <ul className="flex text-base flex-col gap-4 after:left-[20%] after:max-h-[405px] after:top-[22.3%] after:content-[''] after:h-full after:w-1 after:absolute after:border-r after:border-r-colors-text-3 pr-6">
          <li className="">
            <Link
              to="/"
              className="capitalize flex gap-2 items-center justify-between  w-52"
            >
              Women's Fashion
              <ArrowIcon strokeColor="#000000" className="size-6 -rotate-90 " />
            </Link>
          </li>
          <li className="">
            <Link
              to="/"
              className="capitalize flex gap-2 justify-between items-center w-52"
            >
              Men's Fashion
              <ArrowIcon strokeColor="#000000" className="size-6 -rotate-90" />
            </Link>
          </li>
          <li>
            <Link to="/" className="capitalize">
              Electronics
            </Link>
          </li>
          <li>
            <Link to="/" className="capitalize">
              Home & lifestyle
            </Link>
          </li>
          <li>
            <Link to="/" className="capitalize">
              medicine
            </Link>
          </li>
          <li>
            <Link to="/" className="capitalize">
              sports & outdoor
            </Link>
          </li>
          <li>
            <Link to="/" className="capitalize">
              baby's & toys
            </Link>
          </li>
          <li>
            <Link to="/" className="capitalize">
              groceries & pets
            </Link>
          </li>
          <li>
            <Link to="/" className="capitalize">
              Health & beauty
            </Link>
          </li>
        </ul>
      </aside>
      <div className="bg-colors-text-3 ml-12 mt-0 pt-10 px-16 pb-3 flex-1 flex flex-col items-center gap-4  text-colors-primary-1">
        <div className="flex w-full gap-1 items-stretch justify-between">
          <div className=" grid gap-y-0 gap-x-2 justify-start items-start grid-rows-[min] grid-cols-[48px,60px_repeat(2,_1fr)]">
            <AppleLogo className="row-start-1 col-start-1 col-span-1" />
            <p className=" col-start-2 col-span-3 justify-self-start">
              iPhone 14 Series
            </p>
            <h1 className=" font-semibold leading-[1.4] col-start-1 col-span-4 row-start-2 row-span-1  text-5xl font-inter">
              Up to 10% <br />
              Off Voucher
            </h1>
            <Link
              to="/"
              className="flex gap-2 self-start items-center row-start-3 col-start-1 col-span-2 after:content-[''] after:absolute after:top-full after:w-[70%] after:left-0 after:h-[1px] relative after:bg-colors-primary-1 font-semibold"
            >
              Shop Now
              <SlideArrowIcon strokeColor="white" className="mt-auto" />
            </Link>
          </div>
          <img
            src={HeroImage}
            alt="hero image"
            srcset=""
            // width={410}
            // height={352}
          />
        </div>
        <div className="flex gap-4 items-center">
          <button className="size-3 rounded-full bg-colors-secondary-3"></button>
          <button className="size-3 rounded-full bg-colors-primary-2"></button>
          <button className="size-3 rounded-full bg-colors-primary-2"></button>
          <button className="size-3 rounded-full bg-colors-primary-2"></button>
          <button className="size-3 rounded-full bg-colors-primary-2"></button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
