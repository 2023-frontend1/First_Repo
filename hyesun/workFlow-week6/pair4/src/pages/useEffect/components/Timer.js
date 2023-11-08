import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer.current);
      alert("타이머를 숨겼습니다");
    };
  }, []);

  const stop = () => {
    clearInterval(timer.current);
    timer.current = null;
  };

  const restart = () => {
    if (timer.current === null) {
      timer.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const reset = () => {
    clearInterval(timer.current);
    setCount(0);
    timer.current = null;
  };

  return (
    <>
      <div>{count}초 </div>
      <button onClick={stop}>중지</button>
      <button onClick={restart}>재시작</button>
      <button onClick={reset}>리셋</button>
    </>
  );
};
export default Timer;
