import Typed from "typed.js";
import { useRef, useEffect } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Innovative", "Delicious", "Saturating", "Protein-Rich"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      loopCount: 20,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className='h-[70dvh] hero flex flex-col text-center'>
      <div className='mx-auto my-auto'>
        <h1 className='text-bmPink1 font-black text-6xl md:text-9xl font-[Montserrat]'>
          BarMates
        </h1>
        <p className='text-bmBlue1 font-bold text-base md:text-3xl'>
          <span className='font-extrabold' ref={el}></span> bars made in
          Switzerland
        </p>
      </div>
      <a
        href='#about'
        className='text-bmBlue1 hover:text-bmBlue2 mb-8 group mx-auto'
      >
        <p className='md:text-xl font-bold group-hover:text-bmBlue2 duration-200'>
          Find out more!
        </p>
        <FontAwesomeIcon
          className='text-2xl md:text-4xl group-hover:translate-y-2 duration-200 ease-in-out'
          icon={faChevronDown}
        />
      </a>
    </div>
  );
};

export default Home;
