import BarSVG from "../assets/BAR VECTOR.svg";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className='flex justify-between p-2 md:p-4 bg-white uppercase font-black font-[Montserrat]'>
      <a href='/' className='w-20 md:w-24'>
        <motion.img
          src={BarSVG}
          alt='bar'
          whileHover={{ scale: 1.1, rotate: 12 }}
          whileTap={{ scale: 0.9 }}
        />
      </a>
      <div className='md:text-2xl text-bmPink1 flex gap-2 md:gap-8'>
        <a
          className='hover:text-bmPink2 hover:scale-110 ease-in-out duration-300 my-auto'
          href='/catalogue'
        >
          Catalogue
        </a>
        <a
          className='hover:text-bmPink2 hover:scale-110 ease-in-out duration-300 my-auto'
          href='/mission'
        >
          Mission
        </a>
      </div>
      <motion.div
        className='text-bmBlue1 text-3xl my-auto cursor-pointer'
        whileHover={{ scale: 1.1, rotate: 12 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faUser} />
      </motion.div>
    </header>
  );
};

export default Header;
