import BarMatesLogo from "../assets/LOGO ROUNDED RASTER.png";

const Footer = () => {
  const style = {
    listHeading: `font-bold font-[Montserrat]`,
    listStyle: `font-semibold text-bmPink2`,
  };

  return (
    <footer>
      <div className='grid md:grid-flow-col grid-flow-row text-bmPink1 p-4 md:pt-10'>
        <div className='text-center md:text-left flex flex-col md:flex-row gap-2 md:gap-8 justify-center mb-2 md:mb-0'>
          <img
            src={BarMatesLogo}
            alt='barmates logo'
            className='md:h-24 aspect-square h-24 mx-auto md:mx-0 hidden md:block'
          />
          <div className='my-auto'>
            <p className='font-[Montserrat] font-black italic text-xl md:text-4xl'>
              BarMates
            </p>
            <p className='font-semibold'>Zurich, Switzerland</p>
          </div>
        </div>
        <div className='grid md:grid-flow-col grid-flow-row text-lg text-center md:text-left'>
          <div className='my-2 md:my-0'>
            <h1 className={style.listHeading}>Founders</h1>
            <ul className={style.listStyle}>
              <li>
                <a href='https://instagram.com/marking27'>Marko</a>
              </li>
              <li>
                <a href='https://instagram.com/nevillebrem'>Neville</a>
              </li>
            </ul>
          </div>
          <div className='my-2 md:my-0'>
            <h1 className={style.listHeading}>Social</h1>
            <ul className={style.listStyle}>
              <li>
                <a href='https://instagram.com/barmates_official'>Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-center py-1 border-t border-bmPink4 font-bold font-[Montserrat] text-bmPink1'>
        <a href='https://github.com/nevthereal/'>© Neville Brem 2023</a>
      </div>
    </footer>
  );
};

export default Footer;
