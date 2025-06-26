var clothes = {
  tshirt: "blue",
  pants: "gray",
  shoes: "white",
  underpants: "dark blue",
};

var itens = { slot1: "sword", slot2: "shield", slot3: "bow" };

var inventory = {
  itens,
  clothes,
};
console.log(inventory);
console.log(inventory.itens);
console.log(inventory.clothes);

inventory.itens.slot4 = 10;
console.log(inventory.itens);
