import { useEffect } from "react";

function XO() {
  useEffect(() => {
    const field = document.querySelector(".field");
    const cells = document.querySelectorAll(".field-cell");
    let turn = "x";
    let count = 0;
    const matrix = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    field.addEventListener("click", (event) => {
      if (event.target.classList.contains("field-cell")) {
        if (event.target.textContent === "") {
          event.target.textContent = turn;
          checkWinner(turn);
          count++;

          if (turn === "x") {
            turn = "o";
          } else {
            turn = "x";
          }
        }
      }
    });

    function checkWinner(turn) {
      for (let i = 0; i < matrix.length; i++) {
        let winner = true;

        for (let j = 0; j < matrix[i].length; j++) {
          let indexOfCell = matrix[i][j];

          if (cells[indexOfCell].textContent !== turn) {
            winner = false;
            break;
          }
        }

        if (winner) {
          alert(`${turn} - is winner`);
          return;
        }
      }
      if (count === 8) {
        alert("draw");
      }
    }
  }, []);

  return (
    <div className="field">
      <div className="field-cell"></div>
      <div className="field-cell"></div>
      <div className="field-cell"></div>
      <div className="field-cell"></div>
      <div className="field-cell"></div>
      <div className="field-cell"></div>
      <div className="field-cell"></div>
      <div className="field-cell"></div>
      <div className="field-cell"></div>
    </div>
  );
}

export default XO;
