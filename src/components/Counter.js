import {useState} from 'react';

const Counter = (props) => {
  const [counter, setCounter] = useState(0)
  
  const handlePlusClick = () => {
    setCounter(counter + 1);
  }
  
  const handleMinusClick = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <div className={"text"}>Счётчик</div>
      <div className={"counter"}>{counter}</div>
      <button onClick={handleMinusClick} className="counter-button">−</button>
      <button onClick={handlePlusClick} className="counter-button">+</button>
    </div>
  );
};

export default Counter;