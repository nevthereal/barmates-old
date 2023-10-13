import BarMatesLogo from "../assets/LOGO ROUNDED RASTER.png";
import { motion } from "framer-motion";

const Footer = () => {
  const style = {
    listHeading: `font-bold font-[Montserrat]`,
    listStyle: `font-semibold text-bmPink2`,
  };

  return (
    <footer>
      <div className='grid md:grid-flow-col grid-flow-row text-bmPink1 p-4 md:pt-10'>
        <div className='text-center md:text-left flex flex-col md:flex-row gap-2 md:gap-8 justify-center mb-2 md:mb-0'>
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true, margin: "0px 0px 10% 0px" }}
            whileHover={{ scale: 1.1, rotate: 6 }}
            src={BarMatesLogo}
            alt='barmates logo'
            className='md:h-24 aspect-square h-24 mx-auto md:mx-0 hidden md:block'
          />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true, margin: "0px 0px 10% 0px" }}
            className='my-auto'
          >
            <h2 className='font-[Montserrat] font-black italic text-xl md:text-4xl'>
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
            </h2>
            <p className='font-semibold'>Zurich, Switzerland</p>
          </motion.div>
        </div>
        <div className='grid md:grid-flow-col grid-flow-row text-lg text-center md:text-left'>
          <div className='my-2 md:my-0'>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true, margin: "0px 0px 10% 0px" }}
              className={style.listHeading}
            >
              Founders
            </motion.h1>
            <motion.ul
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true, margin: "0px 0px 10% 0px" }}
              className={style.listStyle}
            >
              <li>
                <a href='https://instagram.com/marking27'>Marko</a>
              </li>
              <li>
                <a href='https://instagram.com/nevillebrem'>Neville</a>
              </li>
            </motion.ul>
          </div>
          <div className='my-2 md:my-0'>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true, margin: "0px 0px 10% 0px" }}
              className={style.listHeading}
            >
              Social
            </motion.h1>
            <motion.ul
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true, margin: "0px 0px 10% 0px" }}
              className={style.listStyle}
            >
              <li>
                <a href='https://instagram.com/barmates_official'>Instagram</a>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
      <div className='text-center py-1 border-t border-bmPink4 font-bold font-[Montserrat] text-bmPink1'>
        <a href='https://github.com/nevthereal/barmates'>© Neville Brem 2023</a>
      </div>
    </footer>
  );
};

export default Footer;
