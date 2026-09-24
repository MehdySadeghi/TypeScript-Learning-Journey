function theVoid(msg: string): void {
  console.log(msg);
  console.log(msg);
  //   return '';
}

console.log(theVoid("Void"));

function notVoid(msg: string) {
  console.log(msg);
  console.log(msg);
  return "";
}

console.log(notVoid("Not Void"));

export {};
