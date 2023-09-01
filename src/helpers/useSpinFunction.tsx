import { useEffect, useState } from 'react';
import likesDislikes from './likes-dislikes';

interface ResultObject {
  id: number;
  category: string;
  subcategory: string;
  title: string;
  desc: string;
}

const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const useSpinFunction = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [resultOptions, setResultOptions] = useState(likesDislikes);
  const [optionsExhausted, setOptionsExhausted] = useState(false);
  const [result, setResult] = useState<Partial<ResultObject>>({});
  const duration = 1000;

  useEffect(() => {
    if (!resultOptions.length) setOptionsExhausted(true);
  }, [resultOptions]);

  const getResult = () => {
    const currentResultCategory = result.category || 'dislikes';
    const validOptions = resultOptions.filter((opt) => opt.category !== currentResultCategory);
    const randomIndex = Math.floor(Math.random() * validOptions.length);
    const thisResult = validOptions[randomIndex];
    setResultOptions((options) => options.filter((opt) => opt.id !== thisResult.id));
    return setResult(thisResult);
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const targetRotation = 3600 + Math.floor(Math.random() * 360);
    let startTime: number;

    const animationStep = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const t = Math.min(1, progress / duration);
      const easedT = easeInOutQuad(t);
      const rotation = 0 + (targetRotation - 0) * easedT;

      setWheelRotation(rotation % 360);

      if (t < 1) {
        requestAnimationFrame(animationStep);
      } else {
        setIsSpinning(false);
        getResult();
      }
    };

    // Start the animation
    requestAnimationFrame(animationStep);
  };

  return { wheelRotation, spinWheel, result, optionsExhausted };
};

export default useSpinFunction;
