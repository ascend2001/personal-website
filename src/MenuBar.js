import React from 'react';

function HandleClick(event) {
  if (event.target.id === 'ToExperience') {
    const anchor = document.querySelector('#Experience');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (event.target.id === 'ToExtracurriculars') {
    const anchor = document.querySelector('#Extracurriculars');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (event.target.id === 'ToProjects') {
    const anchor = document.querySelector('#Projects');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function MenuBar() {
  return (
    <header className="h-16 bg-black flex flex-row place-items-center place-content-center space-around text-white text-2xl">
      <div className="basis-1/3 hover:text-orange-300" onClick={HandleClick} onKeyPress={HandleClick} role="button" tabIndex={0} id="ToExperience">Experience</div>
      <div className="basis-1/3 hover:text-orange-300" onClick={HandleClick} onKeyPress={HandleClick} role="button" tabIndex={0} id="ToExtracurriculars">Extracurriculars</div>
      <div className="hover:text-orange-300" onClick={HandleClick} onKeyPress={HandleClick} role="button" tabIndex={0} id="ToProjects">Projects</div>
    </header>
  );
}

export default MenuBar;
