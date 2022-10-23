import { useEffect } from "react";

function Ball() {
  useEffect(() => {
    let square = document.querySelector(".square");
    let ball = document.querySelector(".ball");
    let width = square.clientWidth - ball.clientWidth;
    let height = square.clientHeight - ball.clientHeight;

    let directionTop = Math.random() * 10;
    let directionLeft = Math.random() * 10;

    function animate() {
      let left = +ball.style.left.slice(0, ball.style.left.length - 2);
      let top = +ball.style.top.slice(0, ball.style.top.length - 2);

      ball.style.left = left + directionLeft + "px";
      ball.style.top = top + directionTop + "px";

      if (left >= width) {
        directionLeft = -1 * Math.abs(directionLeft);
      }

      if (left <= 0) {
        directionLeft = Math.abs(directionLeft);
      }

      if (top >= height) {
        directionTop = -1 * Math.abs(directionTop);
      }

      if (top <= 0) {
        directionTop = Math.abs(directionTop);
      }

      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return (
    <div className="square">
      <div className="ball"></div>
    </div>
  );
}

export default Ball;
