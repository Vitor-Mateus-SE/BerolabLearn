//3conditionals
console.log("hello world");

var user = {
  penis: {},
  inventory: {
    weapons: ["knife", "penisDeBorracha"],
  },
};
var sword = "sword";
var lenghtWeaponsIHave = user.inventory.weapons.length;
if (lenghtWeaponsIHave >= 2) {
  console.log("you have too many weapons");
  console.log(user.inventory.weapons);
} else {
  user.inventory.weapons.push(sword);
  console.log("you take a sword");
  console.log(user.inventory.weapons);
}
