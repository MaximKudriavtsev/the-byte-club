import React, { FC, useEffect, useState } from 'react';
import './countdown.scss';

const smiles = [
  '⭐️',
  '🎃',
  '🎉',
  '🦊',
  '🦁',
  '🦄',
  '🙈',
  '🐙',
  '🐳',
  '🍀',
  '🔥',
  '☀️',
  '✨',
  '🌸',
  '🏆',
];
const getRandomSmile = () => {
  let smile = '⭐️';
  try {
    smile = smiles[Math.floor(Math.random() * smiles.length)];
  } catch (e) {}
  return smile;
};

interface CountdownProps {
  initialTime: number;
}

const Countdown: FC<CountdownProps> = ({ initialTime }) => {
  const [countdown, setCountdown] = useState(initialTime);
  useEffect(() => {
    const circle = document.getElementById('countdown-circle');
    circle!.style.animation = `countdown ${initialTime}s linear infinite forwards`;
    const interval = setInterval(() => {
      setCountdown(countdown => {
        if (countdown <= 2) {
          circle!.style.opacity = '0';
        }
        if (countdown <= 0) {
          clearInterval(interval);
          return 0;
        }
        return countdown - 1;
      });
    }, 1000);
  }, []);

  return (
    <div id='countdown'>
      <div id='countdown-number'>{countdown || getRandomSmile()}</div>
      <svg id='countdown-svg'>
        <circle id='countdown-circle' r='18' cx='20' cy='20'></circle>
      </svg>
    </div>
  );
};

export { Countdown };
