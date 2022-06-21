import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Counter from './Counter';

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, start: 10, step: 6 },
    { id: 2, start: 5 },
    { id: 3, start: 0, step: 13 },
    { id: 4, start: 13 },
  ]);

  const handleDelete = (id) => {
    const newList = counters.filter((counter) => counter.id !== id);
    setCounters(newList);
  };

  return (
    <>
      {counters.map((counter) => {
        return (
          <div key={counter.id} className='d-flex align-items-center justify-content-center'>
            <Counter start={counter.start} step={counter.step}/>
            <button className='btn btn-outline-danger' onClick={() => handleDelete(counter.id)}>
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default App;
