export interface Car {
  id: string;
  model: string;
  img: string;
  description: string;
  char: {
    abs: boolean;
    'electric-glass': boolean;
    hatch: boolean;
    bluetooth: boolean;
    alarm: boolean;
    parking: boolean;
    navigation: boolean;
    computer: boolean;
    wheel: boolean;
  };
}
