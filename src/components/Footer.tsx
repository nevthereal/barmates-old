import BarMatesLogo from "../assets/LOGO ROUNDED RASTER.png";

const Footer = () => {
  const style = {
    listHeading: `font-bold font-[Montserrat]`,
    listStyle: `font-semibold text-bmPink2`,
  };

  return (
    <footer className='grid md:grid-flow-col grid-flow-row text-bmPink1 pt-2 md:pt-10'>
      <div className='flex flex-col md:flex-row gap-2 md:gap-8 justify-center'>
        <img
          src={BarMatesLogo}
          alt='barmates logo'
          className='md:h-32 aspect-square'
        />
        <div className='my-auto'>
          <p className='font-[Montserrat] font-black italic text-xl md:text-4xl'>
            BarMates
          </p>
          <p className='font-semibold'>Zurich, Switzerland</p>
        </div>
      </div>
      <div className='grid md:grid-flow-col grid-flow-row text-lg'>
        <div>
          <h1 className={style.listHeading}>Founders</h1>
          <ul className={style.listStyle}>
            <li>
              <a href='https://instagram.com/nevillebrem'>Neville</a>
            </li>
            <li>
              <a href='https://instagram.com/marking27'>Marko</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className={style.listHeading}>Social</h1>
          <ul className={style.listStyle}>
            <li>
              <a href='https://instagram.com/barmates_official'>Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
