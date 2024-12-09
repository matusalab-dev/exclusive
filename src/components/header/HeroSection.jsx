import { Link } from "react-router";
import ArrowIcon from "../../assets/icons/arrow-icon";
import AppleLogo from "../../assets/apple-logo";
import HeroImage from "../../assets/hero_endframe.png";
import SlideArrowIcon from "../../assets/icons/slide-arrow";

const HeroSection = () => {
  return (
    <section className="flex items-start mt-20 ">
      <aside>
        <ul className="flex text-base flex-col gap-4 after:left-[20%] after:max-h-[405px] after:top-[22.3%] after:content-[''] after:h-full after:w-1 after:absolute after:border-r after:border-r-colors-text-3 pr-6">
          <li className="">
            <Link
              to="/"
              className="flex items-center justify-between gap-2 capitalize w-52"
            >
              Women's Fashion
              <ArrowIcon strokeColor="#000000" className="-rotate-90 size-6 " />
            </Link>
          </li>
          <li className="">
            <Link
              to="/"
              className="flex items-center justify-between gap-2 capitalize w-52"
            >
              Men's Fashion
              <ArrowIcon strokeColor="#000000" className="-rotate-90 size-6" />
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
      <div className="flex flex-col items-center flex-1 gap-4 px-16 pt-10 pb-3 mt-0 ml-12 bg-colors-text-3 text-colors-primary-1">
        <div className="flex items-stretch justify-between w-full gap-1">
          <div className=" grid gap-y-0 gap-x-2 justify-start items-start grid-rows-[min] grid-cols-[48px,60px_repeat(2,_1fr)]">
            <AppleLogo className="self-center col-span-1 col-start-1 row-span-1 row-start-1" />
            <p className="self-center col-span-2 col-start-2 row-span-1 row-start-1 justify-self-start">
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
        <div className="flex items-center gap-4">
          <button className="rounded-full size-3 bg-colors-secondary-3"></button>
          <button className="rounded-full size-3 bg-colors-primary-2"></button>
          <button className="rounded-full size-3 bg-colors-primary-2"></button>
          <button className="rounded-full size-3 bg-colors-primary-2"></button>
          <button className="rounded-full size-3 bg-colors-primary-2"></button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
