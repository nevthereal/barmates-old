import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import FoundersImage from "../assets/FOUNDERS.jpeg";
import BarPNG from "../assets/BAR RASTER.png";

const Home = () => {
  return (
    <>
      <Hero />
      <Founders />
      <Company />
    </>
  );
};

const Hero = () => {
  return (
    <div className='h-[90dvh] hero flex flex-col text-center'>
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 500,
        }}
        className='mx-auto my-auto'
      >
        <h1 className='text-bmPink1 font-black text-6xl md:text-9xl font-[Montserrat]'>
          {["B", "a", "r", "M", "a", "t", "e", "s"].map((letter, index) => {
            return (
              <span
                className='hover:text-bmBlue1 duration-300 ease-in-out'
                key={index}
              >
                {letter}
              </span>
            );
          })}
        </h1>
        <p className='text-bmBlue1 font-bold text-base md:text-3xl'>
          Innovative bars made in Switzerland
        </p>
      </motion.div>
      <motion.a
        whileTap={{ scale: 0.8 }}
        href='#about'
        className='text-bmBlue1 mb-8 group mx-auto'
      >
        <p className='md:text-xl font-bold duration-200'>Find out more!</p>
        <FontAwesomeIcon
          className='text-2xl md:text-4xl group-hover:translate-y-2 duration-200 ease-in-out'
          icon={faChevronDown}
        />
      </motion.a>
    </div>
  );
};

const Founders = () => {
  return (
    <div
      className='grid grid-rows-2 md:grid-rows-none md:grid-cols-2 text-bmBlue1'
      id='about'
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className='flex flex-col justify-center p-2 md:p-8'
      >
        <h1 className='mx-auto my-2 md:my-4 text-4xl font-black font-[Montserrat]'>
          The Founders
        </h1>
        <motion.img
          whileHover={{ scale: 1.05, rotate: 2 }}
          src={FoundersImage}
          alt='founders'
          className='rounded-3xl w-[75%] md:w-[50%] mx-auto'
        />
      </motion.div>
      <div className='p-8 flex'>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
          className='my-auto text-lg md:text-xl'
        >
          We (Marko and Neville) are two 16 year old students from Zurich,
          Switzerland. We are rowing athletes at the Belvoir Rowing Club Zurich.
          We love protein and energy bars. <br />
          While Marko is busy building our reach and community, Neville is doing
          all the design work and logistics for the business, like package
          designing, manufacture of the bars or web designing.
        </motion.p>
      </div>
    </div>
  );
};

const Company = () => {
  return (
    <div
      className='grid grid-rows-2 md:grid-rows-none md:grid-cols-2 text-bmPink1'
      id='about'
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
        className='flex flex-col justify-center p-2 md:p-8'
      >
        <h1 className='mx-auto my-2 md:my-4 text-4xl font-black font-[Montserrat]'>
          The Company
        </h1>
        <motion.img
          whileHover={{ scale: 1.1, rotate: 4 }}
          src={BarPNG}
          alt='founders'
          className='rounded-3xl w-[75%] md:w-[50%] mx-auto'
        />
      </motion.div>
      <div className='p-8 flex'>
        <motion.p
          className='my-auto text-lg md:text-xl'
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true }}
        >
          <span className='font-[Montserrat] font-bold hover:text-bmBlue1 duration-300'>
            BarMates
          </span>{" "}
          was founded 2023 in Zurich, Switzerland. We figured, that there were
          no 'perfect' bars, so we went ahead and created our own. Originally we
          only wanted to resell known brands. <br />
          We soon then decided to switch to our own bars since we wanted to try
          something completely new.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
