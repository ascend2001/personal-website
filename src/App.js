import React from 'react';
import AvnishMoon from './assets/avnish-on-moon.svg';
import stars from './assets/stars.svg';
import leaningMan from './assets/leaning-man.svg';
import SkillsChest from './assets/Skills-chest.svg';
import laptop from './assets/laptop.svg';
import askerSpeech from './assets/asker-speech-bubble.svg';
import responderSpeech from './assets/responder-speech-bubble.svg';

function App() {
  return (
    <div>
      <header className="initial-wrapper">
        <div className="absolute">
          <img src={stars} alt="" width="1392.3" height="695" className="blur-sm" />
        </div>
        <div className="initial-wrapper flex md:flex-row flex-col">
          <div className="flex flex-col md:mb-60 justify-center ml-48 text-white text-6xl font-sans basis-2/3">
            <div className="mb-5">
              Hi, I am Avnish.
            </div>
            <div>
              <div className="flex flex-col lg:flex-row relative">
                <div>Welcome to</div>
                <div className="flex flex-row md:ml-3.5">
                  my world
                  <div className="blinking-cursor z-10" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row content-end justify-end md:basis-1/3 overflow-hidden">
            <img src={AvnishMoon} alt="" width="536" height="798" className="z-10 md:-mb-96" />
          </div>
        </div>
      </header>
      <section className="flex flex-row fourth-wrapper">
        <div className="flex flex-col basis-2/3 text-3xl place-content-center">
          <div>The quick brown fox jumped over the old lazy dog.</div>
          <div>The quick brown fox jumped over the old lazy dog.</div>
          <div>The quick brown fox jumped over the old lazy dog.</div>
          <div>The quick brown fox jumped over the old lazy dog.</div>
          <div>The quick brown fox jumped over the old lazy dog.</div>
          <div>lorem ipsum dolsum lorem ipsum dolsum</div>
        </div>
        <div className="flex flex-col justify-around relative">
          <img src={askerSpeech} alt="" width="280" height="144.25" />
          <div className="speech-bubble-wrapper absolute top-20 left-8 text-lg">
            Which github branch are you on?
          </div>
          <img src={laptop} alt="" width="440.5" height="239.5" className="basis-1/3" />
          <div className="flex flex-row place-content-end">
            <img src={responderSpeech} alt="" width="280" height="144.25" />
            <div className="absolute bottom-20 right-6 text-lg">
              The one where I am branching out.
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-row third-wrapper">
        <div className="basis-2/3" />
        <img src={SkillsChest} alt="" width="536" height="798" className="place-items-center basis-1/3" />
      </section>
      <section className="flex flex-row second-wrapper">
        <div className="basis-2/3" />
        <img src={leaningMan} alt="" width="203.5" height="659" className="place-items-center basis-1/3 my-10" />
      </section>
    </div>
  );
}

export default App;
