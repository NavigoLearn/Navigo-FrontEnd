export class ComponentNode {
  x: number;

  y: number;

  width: number;

  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
class TextComponent extends ComponentNode {
  text: string;

  textSize: number;

  textFont: string;

  textColor: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    text: string,
    textSize: number,
    textFont: string,
    textColor: string
  ) {
    super(x, y, width, height);
    this.text = text;
    this.textSize = textSize;
    this.textFont = textFont;
    this.textColor = textColor;
  }
}

export class TitleComponent extends TextComponent {
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    title: string
  ) {
    super(x, y, width, height, title, 100, '', '');
  }
}

export class DescriptionComponent extends TextComponent {
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    description: string
  ) {
    super(x, y, width, height, description, 50, '', '');
  }
}
