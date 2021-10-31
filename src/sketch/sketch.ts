import type { P5Instance } from "react-p5-wrapper";

import ZodiacSign from "./parts/ZodiacSign";

const sketch = (p: P5Instance) => {
  let count: number;
  let delay: number;
  let z: ZodiacSign;
  let renderNum: number;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(30);
    delay = 30;
    renderNum = 0;
    initializeBackground();
  };

  p.draw = () => {
    count++;
    p.background(5);
    if (count < delay) return;
    if (count === delay + 30) z.toggleMove();

    z.update();
    z.display();
  };

  p.updateWithProps = (props) => {
    if (!props.count) return;
    if (renderNum !== props.count) {
      renderNum += 1;
      initializeBackground();
    }
  };

  p.mousePressed = () => {
    if (!z) return;
    z.flash();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    initializeBackground();
  };

  function initializeBackground() {
    z = new ZodiacSign(p, 0, 0, p.width, p.height);
    count = 0;
  }
};

export default sketch;
