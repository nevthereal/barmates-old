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
  return (
    <div className='h-[70dvh] hero flex flex-col text-center'>
      <div className='mx-auto my-auto'>
        <h1 className='text-bmPink1 font-black text-6xl md:text-9xl font-[Montserrat]'>
          BarMates
        </h1>
        <p className='text-bmBlue1 font-bold text-base md:text-3xl'>
          Innovative bars made in Switzerland
        </p>
      </div>
      <a href='#about' className='text-bmBlue1 mb-8 group mx-auto'>
        <p className='md:text-xl font-bold group-hover:text-bmBlue2 duration-200'>
          Find out more!
        </p>
        <FontAwesomeIcon
          className='text-2xl md:text-4xl group-hover:translate-y-2 group-hover:text-bmBlue2 duration-200 ease-in-out'
          icon={faChevronDown}
        />
      </a>
    </div>
  );
};

export default Home;
