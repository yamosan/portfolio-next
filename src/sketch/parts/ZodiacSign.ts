import p5 from "p5";
import Snake from "./Snake";
import P5Component from "sketche/types/P5Component";

// TODO: this.p.frameRate()から計算してアニメーション速度を一定にする
class ZodiacSign implements P5Component {
  private children: Snake[];
  bg: Snake[][];
  // fall
  dt: number;
  falling: boolean;

  constructor(
    private p: p5,
    private x: number,
    private y: number,
    private width: number,
    private height: number
  ) {
    this.children = this.initializeChildren();
    this.bg = [this.children, this.children];

    this.dt = this.p.sqrt(this.width * this.height) * 0.0005;
    this.falling = false;
  }

  update() {
    if (this.falling) {
      this.fall();
    }
    this.children.forEach((v) => v.update());
  }

  display() {
    this.p.push();

    this.p.translate(this.x, this.y);
    this.children.forEach((v) => v.display());

    this.p.push();
    this.p.translate(-this.width, 0);
    this.children.forEach((v) => v.display());
    this.p.pop();

    this.p.push();
    this.p.translate(0, -this.height);
    this.children.forEach((v) => v.display());
    this.p.pop();

    this.p.push();
    this.p.translate(-this.width, -this.height);
    this.children.forEach((v) => v.display());
    this.p.pop();

    this.p.pop();
  }

  toggleMove(): void {
    this.falling = !this.falling;
  }

  flash(): void {
    this.children.forEach((v) => v.flash());
  }

  private fall() {
    this.x += this.dt;
    this.y += this.dt;

    if (this.x >= this.width) {
      this.x = 0;
    }
    if (this.y >= this.height) {
      this.y = 0;
    }
  }

  private initializeChildren(): Snake[] {
    const ret = [];
    const limit = 6;
    // 偶数じゃないと綺麗にならない
    const base = this.width > 480 ? 6 : 4;
    const [wNum, hNum] = this.getDimension(base);
    const wBase = this.width * (1 / wNum);
    const hBase = this.height * (1 / hNum);
    // 一つ一つのsnakeの稼働領域
    const w = this.flexGrow(wBase, this.width);
    const h = this.flexGrow(hBase, this.height);
    // snakeの個数
    const [wn] = this.divide(wBase, this.width);
    const [hn] = this.divide(hBase, this.height);
    // snakeの半径
    const rad = this.p.min(w, h) / limit;

    for (let y = 0; y < hn; y++) {
      for (let x = 0; x < wn; x++) {
        if ((x + y) % 2 === 0) continue;
        const px = this.p.map(x, 0, wn, 0 + w / 2, this.width + w / 2);
        const py = this.p.map(y, 0, hn, 0 + h / 2, this.height + h / 2);
        const s = new Snake(this.p, px, py, w * 0.9, h * 0.9, rad, limit);
        ret.push(s);
      }
    }

    return ret;
  }

  private getLongSide(): number {
    return this.p.max(this.width, this.height);
  }

  private getShortSide(): number {
    return this.p.min(this.width, this.height);
  }

  // 短辺をbaseとした時、アスペクト比に最も近い偶数比を返す
  private getDimension(base: number): [w: number, h: number] {
    const ratio = this.getLongSide() / this.getShortSide();
    const wIsLonger = this.width >= this.height;
    let low: number, high: number;
    low = base * 1;
    if (this.p.floor(base * ratio) % 2 === 0) {
      high = this.p.floor(base * ratio);
    } else {
      const m = this.p.floor(base * ratio) - 1;
      const p = this.p.floor(base * ratio) + 1;
      high = this.isCloserToA(low, m, p) ? m : p;
    }
    return wIsLonger ? [high, low] : [low, high];
  }

  // helper method
  private divide(
    baseSize: number,
    parentSize: number
  ): [n: number, rest: number] {
    const n = Math.floor(parentSize / baseSize);
    const rest = parentSize - baseSize * n;
    return [n, rest];
  }

  private flexGrow(baseSize: number, parentSize: number): number {
    const [n, rest] = this.divide(baseSize, parentSize);
    return baseSize + rest / n;
  }

  // targetに近いのがA => 0, B => 1
  private isCloserToA(target: number, a: number, b: number): boolean {
    const aDiff = target - a;
    const bDiff = target - b;
    return aDiff ** 2 - target ** 2 < bDiff ** 2 - target ** 2 ? true : false;
  }
}

export default ZodiacSign;
