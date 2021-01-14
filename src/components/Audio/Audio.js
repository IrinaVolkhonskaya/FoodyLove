import React from 'react';
import { useAudio } from 'react-use';
import s from './Audio.module.css';


const Audio = () => {
  const [audio, state, controls, ref] = useAudio({
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    autoPlay: true,
  });

  return (
    <div className={s.audio}>
      {audio}

      <button onClick={controls.pause}>Pause</button>
      <button onClick={controls.play}>Play</button>

      <br />
      <button onClick={() => controls.volume(0.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(0.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
    </div>
  );
};

export default Audio;
