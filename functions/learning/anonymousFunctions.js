const names = ["Mehdi", "Mahan", "Mehrsam", "Arman"];
names.map((name) => {
    name.toUpperCase();
    // name.toFixed()
});
names.filter((name) => {
    if (name.includes("Me"))
        console.log(name);
});
export {};
