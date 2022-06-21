import { useState } from 'react';
import './Hello.css';

// props = {name: 'Marcos', age: 31}
const Hello = ({ name, age }) => {
  const [clicked, setClicked] = useState(false);
  // const { name, age } = props; === destructuring

  const handleClick = () =>{
    setClicked(true);
  };

  const classes = clicked ? 'hello selected' : 'hello';

  return (
    <h1 className={classes} onClick={handleClick}>
        Hello {name} ({age})
    </h1>
  );
};

export default Hello;
