import SlideArrowIcon from "../assets/icons/slide-arrow";
import { cn } from "../utils/utils";

const CountDown = ({ className }) => {
  return (
    <div className={`${cn("flex justify-between items-center", className)}`}>
      <div className=" flex gap-8 items-center">
        <h3 className="font-semibold text-4xl">Flash Sales</h3>
        <div className="flex gap-3 items-center justify-start ">
          <div>
            <h4 className="font-poppins font-medium text-sm">Days</h4>
            <span className="text-5xl font-bold font-inter">03</span>
          </div>
          <span className="text-colors-secondary-3 text-2xl font-bold mt-4">
            :
          </span>
          <div>
            <h4 className="font-poppins font-medium text-sm">Hours</h4>
            <span className="text-5xl font-bold font-inter">23</span>
          </div>
          <span className="text-colors-secondary-3 text-2xl font-bold mt-4">
            :
          </span>

          <div>
            <h4 className="font-poppins font-medium text-sm">Minutes</h4>
            <span className="text-5xl font-bold font-inter">19</span>
          </div>
          <span className="text-colors-secondary-3 text-2xl font-bold mt-4">
            :
          </span>

          <div>
            <h4 className="font-poppins font-medium text-sm">Seconds</h4>
            <span className="text-5xl font-bold font-inter">56</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="rounded-full bg-colors-secondary-1 size-10 flex items-center justify-center">
          <SlideArrowIcon className="-rotate-180 size-6 h-4 " />
        </button>
        <button className="rounded-full bg-colors-secondary-1 size-10 flex items-center justify-center">
          <SlideArrowIcon className="size-6 h-4 " />
        </button>
      </div>
    </div>
  );
};

export default CountDown;
