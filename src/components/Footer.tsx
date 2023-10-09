const Footer = () => {
  return (
    <footer className='text-bmBlue1 text-center pt-4'>
      <a
        href='https://instagram.com/barmates_official'
        target='_blank'
        className='text-lg font-black'
      >
        Instagram
      </a>
      <div className='flex gap-2 justify-center text-lg font-bold'>
        <p>
          Founded by{" "}
          <a
            href='https://instagram.com/marking207'
            className='text-bmPink1 hover:text-bmPink2 duration-300'
          >
            Marko
          </a>{" "}
          and{" "}
          <a
            href='https://instagram.com/nevillebrem'
            className='text-bmPink1 hover:text-bmPink2 duration-300'
          >
            Neville
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
