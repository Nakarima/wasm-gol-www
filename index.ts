import { Universe } from "wasm-gol";

let pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

const renderLoop = () => {
  if (pre !== undefined && pre !== null) {
    pre.textContent = universe.render();
    universe.tick();
    requestAnimationFrame(renderLoop);
  }
};

renderLoop();
