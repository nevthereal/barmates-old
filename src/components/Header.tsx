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
      <FontAwesomeIcon
        className='text-bmBlue1 hover:text-bmBlue2 text-3xl my-auto hover:scale-110 ease-in-out duration-300 cursor-pointer'
        icon={faUser}
      />
    </header>
  );
};

export default Header;
