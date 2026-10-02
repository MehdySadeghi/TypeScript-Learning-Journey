type User = {
  readonly id: number;
  username: string;
};

const user: User = { id: 12877, username: "Nobody" };

console.log(user.id);

// user.id= 54531
// user.username = "Mamad";
// you can not asign to the value
//  if it's an array or an object you can add to the object or the array but you can not change the asigned value

export {};
