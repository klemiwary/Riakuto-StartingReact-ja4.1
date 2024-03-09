import { signal } from '@preact/signals';

const count = signal(0);

function Signal() {
  const value = count.value;
  const increment = () => {
    count.value++;
  };

  return (
    <>
      <h1>Preact Signals</h1>
      <div className="card">
        <button onClick={increment}>count is {value}</button>
      </div>
    </>
  );
}

export default Signal;
