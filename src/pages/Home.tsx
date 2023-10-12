import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import FoundersImage from "../assets/FOUNDERS.jpeg";

const Home = () => {
  return (
    <>
      <Hero />
      <Founders />
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

const Founders = () => {
  return (
    <div
      className='grid grid-flow-row md:grid-flow-col text-bmBlue1'
      id='about'
    >
      <div className='flex flex-col justify-center p-2 md:p-8'>
        <h1 className='mx-auto my-2 md:my-4 text-4xl font-black font-[Montserrat]'>
          The Founders
        </h1>
        <motion.img
          whileHover={{ scale: 1.05, rotate: 2 }}
          src={FoundersImage}
          alt='founders'
          className='rounded-3xl w-[75%] md:w-[50%] mx-auto'
        />
      </div>
      <div className='p-8 flex'>
        <p className='my-auto text-lg md:text-xl'>
          We (Marko and Neville) are two 16 year old students from Zurich,
          Switzerland. We are rowing athletes at the Belvoir Rowing Club Zurich.
          We love protein and energy bars, but we figured, there is no perfect
          one. In 2023 we came up with the idea to create our own bars.
          <br />
          While Marko is busy building our reach and community, Neville is doing
          all the design work and logistics for the business, like package
          designing, manufacture of the bars or web designing.
        </p>
      </div>
    </div>
  );
};

export default Home;
