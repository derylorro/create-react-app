import { useState } from "react";

function Counter(props) {
  let [start, setStart] = useState(props.start);

  function plus(event) {
    setStart(start + 1);
  }

  function minus(event) {
    setStart(start - 1);
  }

  return (
    <div>
      <div>{start}</div>
      <button onClick={plus}>Плюс 1</button>
      <button onClick={minus}> Минус 1</button>
    </div>
  );
}

export default Counter;
