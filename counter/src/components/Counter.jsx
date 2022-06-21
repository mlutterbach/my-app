import { useState } from 'react';

const Counter = ({ start, step }) => {
  const [count, setCount] = useState(start);

  const handleMinus = () => {
    // if (count >= step) {
    //   setCount(count - step);
    // } else {
    //   setCount(0);
    // }
    const newCount = count - step;
    setCount(Math.max(0, newCount));
  };

  const handlePlus = () => {
    setCount(count + step);
  };

  return (
    <div className="m-3 d-flex align-items-center justify-content-center">
      <button className="btn btn-danger me-2" onClick={handleMinus}>-</button>
      <span className="fs-5">{count}</span>
      <button className="btn btn-success ms-2" onClick={handlePlus}>+</button>
    </div>
  );
};

Counter.defaultProps = {
  step: 1,
};

export default Counter;
