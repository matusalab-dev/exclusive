import Button from "./Button";
import SpeakerImage from "../assets/speaker.png";
const ImageWithText = () => {
  return (
    <section className="bg-colors-text-3 px-10 pt-14 pb-2 text-colors-primary-1 flex ">
      <div className="flex flex-col items-start gap-10">
        <p className="text-colors-green capitalize font-semibold text-colors-green-1">
          categories
        </p>
        <h4 className="text-5xl max-w-[15ch] capitalize font-semibold">
          Enhance your music experience
        </h4>
        <div className="flex gap-6 text-colors-text-3">
          <h5 className="font-semibold bg-colors-primary-1  size-20 rounded-full flex flex-col items-center justify-center">
            23 <span className="font-medium text-sm">Hours</span>
          </h5>
          <h5 className="font-semibold bg-colors-primary-1  size-20 rounded-full flex flex-col items-center justify-center">
            05 <span className="font-medium text-sm">days</span>
          </h5>
          <h5 className="font-semibold bg-colors-primary-1  size-20 rounded-full flex flex-col items-center justify-center">
            59 <span className="font-medium text-sm">minutes</span>
          </h5>
          <h5 className="font-semibold bg-colors-primary-1  size-20 rounded-full flex flex-col items-center justify-center">
            35 <span className=" font-medium text-sm">seconds</span>
          </h5>
        </div>
        <Button size="lg" color="green" children="buy now" />
      </div>
      <img src={SpeakerImage} alt="speaker" className="backdrop-blur" />
    </section>
  );
};

export default ImageWithText;
