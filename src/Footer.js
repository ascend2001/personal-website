import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import ContactBar from './Contact';
import bullet from './assets/bullet-grey.svg';

function HandleClick() {
  const anchor = document.querySelector('#Landing');
  anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function Footer() {
  return (
    <footer className="flex flex-col bg-black py-9">
      <BsFillArrowUpCircleFill color="grey" className="mx-auto" size="2.5em" onClick={HandleClick} />
      <ContactBar color="grey" gapLength="2.5rem" />
      <div className="flex flex-row justify-center gap-x-2 my-9 items-center grow">
        <FaRegCopyright size="1.0em" color="grey" />
        <div className="text-slate-400 text-lg">Copyright 2020 Avnish Sengupta</div>
        <img src={bullet} alt="" height="10" width="10" className="" />
        <div className="text-slate-400 text-lg">Designed on Figma</div>
        <img src={bullet} alt="" height="10" width="10" className="" />
        <div className="text-slate-400 text-lg">
          Icons from
          {' '}
          <a href="https://react-icons.github.io/react-icons" className="underline">React Icons</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
