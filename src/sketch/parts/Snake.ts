import p5 from "p5";
import P5Component from "sketche/types/P5Component";

class Snake implements P5Component {
  readonly position: p5.Vector;
  private vertices: p5.Vector[];
  private fadeTime: number;
  // p5 setting
  public stroke: p5.Color;
  public strokeWeight: number;

  constructor(
    private p: p5,
    x: number,
    y: number,
    public width: number,
    public height: number,
    private rad: number,
    private num: number
  ) {
    this.position = this.p.createVector(x, y);
    this.vertices = [this.position];
    this.stroke = this.p.color(250);
    this.strokeWeight = 1;
    this.fadeTime = 0;
  }

  update() {
    if (this.vertices.length >= this.num) {
      this.fadeTime += 1;
      return;
    }

    const prev = this.vertices[this.vertices.length - 1];
    const angle = (this.p.TWO_PI / 6) * this.p.floor(this.p.random(6));
    let x = prev.x + this.p.cos(angle) * this.rad;
    let y = prev.y + this.p.sin(angle) * this.rad;
    if (!this.inside(x, y)) {
      x = prev.x;
      y = prev.y;
    }
    const current = this.p.createVector(x, y);
    this.vertices.push(current);
  }

  display() {
    this.p.push();
    this.p.strokeWeight(this.strokeWeight);
    this.p.noFill();
    const min = 70;
    const max = 255;

    // this.drawFrame()
    if (!this.isFinished()) {
      this.drawSnake(min, max);
    } else {
      this.drawSnake(min, this.p.max(min * 0.5, max - this.fadeTime * 12)); // TODO: frameRateの変更に合わせないといけない
      this.drawVertices();
    }
    this.p.pop();
  }

  move(dx: number, dy: number) {
    this.vertices.forEach((v) => {
      v.x += dx;
      v.y += dy;
    });
  }

  // TODO: drawSnakeの使い回しなのでlineごとで明るさが違う
  flash() {
    this.fadeTime = 0;
  }

  private drawSnake(min: number, max: number) {
    this.p.push();
    this.vertices.reduce((prev, cur, i) => {
      const color = this.p.color(
        this.p.map(i, 0, this.vertices.length - 1, min, max)
      );
      this.p.stroke(color);
      this.p.line(prev.x, prev.y, cur.x, cur.y);
      return cur;
    });
    this.p.pop();
  }

  private drawVertices() {
    this.p.push();
    this.p.stroke(200);
    this.p.strokeWeight(1);
    this.vertices.forEach((v) => {
      this.p.point(v.x, v.y);
    });
    this.p.pop();
  }

  private drawFrame() {
    this.p.push();
    this.p.stroke(100);
    this.p.rect(
      this.position.x - this.width / 2,
      this.position.y - this.height / 2,
      this.width,
      this.height
    );
    this.p.pop();
  }

  private isFinished(): boolean {
    if (this.fadeTime === 0) {
      return false;
    }
    return true;
  }

  private inside(x: number, y: number): boolean {
    const xCondition =
      this.position.x - this.width / 2 <= x &&
      x <= this.position.x + this.width / 2;
    const yCondition =
      this.position.y - this.height / 2 <= y &&
      y <= this.position.y + this.height / 2;
    if (xCondition && yCondition) {
      return true;
    }
    return false;
  }
}

export default Snake;
