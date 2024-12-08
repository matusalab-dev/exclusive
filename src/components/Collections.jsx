import HeadingLabel from "./HeadingLabel";
import SectionHeader from "./SectionHeader";
import PlayStation from "../assets/play-station-4.png";
import AttractiveWomen from "../assets/attractive-women.png";
import Speaker from "../assets/amazing-echo-speaker.png";
import GucciPerfume from "../assets/gucci-perfume.png";
import { Link } from "react-router";
export const Collections = () => {
  return (
    <section>
      <HeadingLabel Children="Featured" />
      <SectionHeader HeadingLabel="New Arrival" />
      <div className="mt-12 grid grid-cols-4 gap-8 grid-rows-[repeat(4,_8rem)]  text-colors-text-1 ">
        <div className="relative row-start-1 row-span-4 bg-colors-text-3 pl-6 col-start-1 col-span-2">
          <img
            src={PlayStation}
            alt=""
            srcset=""
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3/4 flex flex-col gap-3 ">
            <h5 className="text-2xl capitalize font-semibold">
              Play station 5
            </h5>
            <p className="text-sm font-light">
              Black and White version of PS5 coming out on sale
            </p>
            <Link
              to="/"
              className="w-max flex gap-2 items-center after:content-[''] after:absolute after:top-full after:w-full after:left-0 after:h-[1px] relative after:bg-colors-primary-1 font-semibold"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative pl-6 col-start-3 row-start-1 row-start-1 row-span-2 col-span-full bg-colors-text-3 text-colors-secondary-1">
          <img
            src={AttractiveWomen}
            alt=""
            srcset=""
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[55%] flex flex-col gap-3 ">
            <h5 className="text-2xl capitalize font-semibold">
              Women's Collection
            </h5>
            <p className="text-sm font-light">
              Featured woman collections that give you another vibe.
            </p>
            <Link
              to="/"
              className="w-max flex gap-2 items-center after:content-[''] after:absolute after:top-full after:w-full after:left-0 after:h-[1px] relative after:bg-colors-primary-1 font-semibold"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="relative pl-6 row-start-3 row-span-2 col-start-3 col-span-1 bg-colors-text-3 text-colors-secondary-1">
          <img
            src={Speaker}
            alt=""
            srcset=""
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2/4 flex flex-col gap-3 ">
            <h5 className="text-2xl capitalize font-semibold">Speakers</h5>
            <p className="text-sm font-light">
              Black and White version of PS5 coming out on sale
            </p>
            <Link
              to="/"
              className="w-max flex gap-2 items-center after:content-[''] after:absolute after:top-full after:w-full after:left-0 after:h-[1px] relative after:bg-colors-primary-1 font-semibold"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative pl-6 row-start-3 row-span-2 col-start-4 col-span-1 bg-colors-text-3 text-colors-secondary-1">
          <img
            src={GucciPerfume}
            alt=""
            srcset=""
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2/4 flex flex-col gap-3 ">
            <h5 className="text-2xl capitalize font-semibold">Perfume</h5>
            <p className="text-sm font-light">Gucci Intense OUD EDP</p>
            <Link
              to="/"
              className="w-max flex gap-2 items-center after:content-[''] after:absolute after:top-full after:w-full after:left-0 after:h-[1px] relative after:bg-colors-primary-1 font-semibold"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
