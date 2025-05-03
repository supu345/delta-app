import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "./Button";
const Hero = ({
  colorDeep,
  mainText,
  shadow,
  mobileShadow,
  subText,
  img,
  onNextSlide,
  onPrevSlide,
}) => {
  return (
    <main className="relative w-full h-screen">
      {/* Background image filling the full section */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      {/* Text and Button Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white gap-4 px-4">
        <h1 className="md:text-5xl text-4xl font-bold leading-tight">
          We're about <span style={{ color: `${colorDeep}` }}>{mainText}!</span>
        </h1>
        <p className="leading-normal md:text-2xl text-lg">{subText}</p>
        <Button
          type="button"
          text="Get Started"
          className="mt-8 text-xl font-bold py-4 px-9 focus:outline-none"
          style={{
            backgroundColor: `${colorDeep}`,
            boxShadow: `${window.innerWidth > 767 ? shadow : mobileShadow}`,
          }}
        />
      </div>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </main>
  );
};

export default Hero;
