import React, { useState } from 'react';
import laptop from './assets/laptop.svg';
import askerSpeech from './assets/asker-speech-bubble.svg';
import responderSpeech from './assets/responder-speech-bubble.svg';

const jokes = [
  {
    asker: 'Which github branch are you on?',
    responder: 'The one where I am branching out.',
  },
  {
    asker: 'In order to understand recursion',
    responder: 'You must first understand recursion',
  },
];

function JokeGenerator() {
  const [i, seti] = useState(0);

  function HandleClick() {
    seti((i + 1) % (jokes.length));
  }
  return (
    <div className="flex flex-row grow justify-center lg:justify-end">
      <div className="flex flex-col justify-around relative">
        <img src={askerSpeech} alt="" width="280" height="144.25" className="my-8" />
        <div className="speech-bubble-wrapper absolute top-20 left-12 text-lg">
          {jokes[i].asker}
        </div>
        <img src={laptop} alt="" width="440.5" height="239.5" className="basis-1/3" />
        <div className="flex flex-row place-content-end">
          <img src={responderSpeech} alt="" width="280" height="144.25" className="my-8" />
          <div className="speech-bubble-wrapper absolute bottom-40 right-12 text-lg">
            {jokes[i].responder}
          </div>
        </div>
        <div className="flex flex-row justify-center mb-8">
          <button type="button" className="jokeButton" onClick={HandleClick}>Another.</button>
        </div>
      </div>
    </div>
  );
}

export default JokeGenerator;
