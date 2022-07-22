import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [countersList, setcountersList] = useState([]);

  return (
    <>
      <div className='App'>
        <h1>React Counter</h1>
        <br />
        <br />
        <button
          disabled={countersList.length >= 3}
          onClick={() => {
            console.log('Le lien a été cliqué.');
            const newCountersList = [...countersList];
            newCountersList.push(1);
            setcountersList(newCountersList);
          }}
        >
          Add counter
        </button>
        {countersList.map((element, index) => {
          return <Counter key={index} />;
        })}
      </div>
    </>
  );
}

export default App;
