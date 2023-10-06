import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;

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
      <div className='text-bmBlue1 m-4'>
        <a href=''>
          <p className='font-bold'>Find out more</p>
          <FontAwesomeIcon className='text-2xl' icon={faChevronDown} />
        </a>
      </div>
    </div>
  );
};
