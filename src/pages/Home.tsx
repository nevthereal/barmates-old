import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

const Hero = () => {
  return (
    <div className='h-[70dvh] hero flex flex-col text-center'>
      <motion.div
        initial={{ translateY: 200, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          duration: 750,
        }}
        className='mx-auto my-auto'
      >
        <h1 className='text-bmPink1 font-black text-6xl md:text-9xl font-[Montserrat]'>
          BarMates
        </h1>
        <p className='text-bmBlue1 font-bold text-base md:text-3xl'>
          Innovative bars made in Switzerland
        </p>
      </motion.div>
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

const About = () => {
  return <></>;
};

export default Home;
