import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <div className='h-[75dvh] w-screen flex'>
      <div className='m-auto text-center'>
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='font-black font-[Montserrat] text-4xl text-bmBlue1 group'
        >
          This page is currently under{" "}
          <span className='text-bmPink1 italic'>
            construction{" "}
            <FontAwesomeIcon
              className='group-hover:rotate-[25deg] duration-150 ease-in-out'
              icon={faHammer}
            />
          </span>
        </motion.h1>
      </div>
    </div>
  );
};

export default Mission;
