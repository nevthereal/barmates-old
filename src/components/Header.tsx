import BarSVG from "../assets/BAR VECTOR.svg";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className='flex justify-between p-4 bg-bmOrange'>
      <a
        href='/'
        className='w-24 hover:rotate-12 hover:scale-110 ease-in-out duration-100'
      >
        <img src={BarSVG} alt='' />
      </a>
      <div className='font-bold text-2xl my-auto text-bmPink1'>
        <a href=''>About us</a>
      </div>
      <FontAwesomeIcon
        className='text-bmBlue1 text-3xl my-auto'
        icon={faUser}
      />
    </header>
  );
};

export default Header;
