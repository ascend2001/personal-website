import React, { useState } from 'react';
import minions from './assets/minions.svg';
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
  {
    asker: 'There are only 10 kinds of people in the world',
    responder: 'Those that know binary and those that don\'t',
  },
];

function JokeGenerator() {
  const [i, seti] = useState(0);

  function HandleClick() {
    seti((i + 1) % (jokes.length));
  }
  return (
    <div className="flex flex-row grow justify-center lg:justify-end">
      <div className="flex flex-col justify-around sm:items-center relative">
        <img src={askerSpeech} alt="" width="280" height="144.25" className="my-8 lg:mr-40" />
        <div className="speech-bubble-wrapper absolute lg:left-12 top-20 left-32 text-lg ">
          {jokes[i].asker}
        </div>
        <img src={minions} alt="" width="440.5" height="239.5" className="basis-1/3" />
        <div className="flex flex-row place-content-end">
          <img src={responderSpeech} alt="" width="280" height="144.25" className="my-8 lg:ml-40" />
          <div className="speech-bubble-wrapper absolute lg:right-12 right-32 bottom-40 text-lg">
            {jokes[i].responder}
          </div>
        </div>
        <div className="flex flex-row justify-center mb-8">
          <button type="button" className="bg-gradient-to-r from-blue-400 to-purple-400 jokeButton text-white ring-offset-purple-100 hover:ring-pink-600 ring-offset-2 ring-blue-400 ring-4" onClick={HandleClick}>Another</button>
        </div>
      </div>
    </div>
  );
}

export default JokeGenerator;
