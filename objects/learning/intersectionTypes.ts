type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = { color: "yellow", radius: 4 };

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const Christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 7,
};

export {};
