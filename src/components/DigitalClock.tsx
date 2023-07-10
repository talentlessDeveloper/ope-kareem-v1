import { useState } from 'react';
import { useInterval } from '../hooks/useInterval';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  const tick = () => setTime(new Date());

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  useInterval(tick, 1000);
  return (
    <p className="uppercase text-xl lg:text-2xl">
      {time.toLocaleTimeString('en-US', options)} (WAT)
    </p>
  );
};

export default DigitalClock;
