export class CarClass {
  constructor(
    public id: string,
    public model: string,
    public img: string,
    public description: string,
    public char: {
      abs: boolean;
      'electric-glass': boolean;
      hatch: boolean;
      bluetooth: boolean;
      alarm: boolean;
      parking: boolean;
      navigation: boolean;
      computer: boolean;
      wheel: boolean;
    }
  ) {}
}
