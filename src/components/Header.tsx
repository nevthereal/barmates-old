import BarSVG from "../assets/BAR VECTOR.svg";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className='flex justify-between p-2 md:p-4 bg-white uppercase font-black font-[Montserrat]'>
      <a
        href='/'
        className='w-20 md:w-24 hover:rotate-12 hover:scale-110 ease-in-out duration-100'
      >
        <img src={BarSVG} alt='' />
      </a>
      <div className='md:text-2xl text-bmPink1 flex gap-2 md:gap-8'>
        <a
          className='hover:text-bmBlue1 hover:scale-110 ease-in-out duration-300 my-auto'
          href='/catalogue'
        >
          Catalogue
        </a>
        <a
          className='hover:text-bmBlue1 hover:scale-110 ease-in-out duration-300 my-auto'
          href='/mission'
        >
          Mission
        </a>
      </div>
      <FontAwesomeIcon
        className='text-bmBlue1 hover:text-bmPink1 text-3xl my-auto hover:scale-110 ease-in-out duration-300 cursor-pointer'
        icon={faUser}
      />
    </header>
  );
};

export default Header;
