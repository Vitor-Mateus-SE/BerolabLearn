//boolean logic
//is true or false
// > is bigger
// < is lower
// == is equal
// ! is diff
var activeUsers = 200;
var publication = {
  user: {
    active: true,
  },
  title: "test",
  likes: 10,
  ban: 100,
};
//if ban is higher than 40% of users, ban this account

var banIsHigherThan40 = (40 / 100) * activeUsers;

if (publication.ban > banIsHigherThan40) {
  publication.user.active = false;
 
}
console.log("user is active?");
console.log(publication.user.active);
