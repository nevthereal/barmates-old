import BarSVG from "../assets/BAR VECTOR.svg";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className='flex justify-between p-4 bg-white uppercase font-black font-[Montserrat]'>
      <a
        href='/'
        className='w-24 hover:rotate-12 hover:scale-110 ease-in-out duration-100'
      >
        <img src={BarSVG} alt='' />
      </a>
      <div className='text-2xl my-auto text-bmPink1 flex gap-8'>
        <a
          className='hover:text-bmBlue1 hover:scale-110 ease-in-out duration-300'
          href='/catalogue'
        >
          Catalogue
        </a>
        <a
          className='hover:text-bmBlue1 hover:scale-110 ease-in-out duration-300'
          href='/mission'
        >
          Our Mission
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
