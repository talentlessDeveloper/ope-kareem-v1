import { useEffect, useRef } from 'react';

// Let's define types for our params
type Callback = () => void;
type Delay = number | null;

export const useInterval = (callback: Callback, delay: Delay) => {
  // useRef to store the callback might need a type, let's give it Callback
  const savedCallback = useRef<Callback>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
