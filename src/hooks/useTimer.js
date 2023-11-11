import { useState, useEffect } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(1500);
  const [start, setStart] = useState(false);
  const [currentView, setCurrentView] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0 || !start) {
          clearInterval(timer);
          setStart(false);
          switch (currentView) {
            case 1: {
              return 1500;
            }
            case 2: {
              return 300;
            }
            case 3: {
              return 900;
            }
            default:
              console.warn("Unexpected currentView value:", currentView);
              return prevTime;
          }
        } else if (start) {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [start, currentView]);

  useEffect(() => {
    if (currentView === 1) {
      setTime(1500);
    } else if (currentView === 2) {
      setTime(300);
    } else if (currentView === 3) {
      setTime(900);
    }
    setStart(false);
  }, [currentView]);

  const toggleTimer = () => {
    setStart((prevStart) => !prevStart);
  };

  return { time, start, currentView, toggleTimer, setCurrentView };
};
