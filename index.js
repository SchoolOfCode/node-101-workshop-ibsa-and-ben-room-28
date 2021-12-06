let myCollection = [
  {
    name: "School of Code mug",
    count: 1,
    whatILike: "It has my cute pixel character on it!",
  },
  {
    name: "School of Code hat",
    count: 2,
    whatILike: "An often overlooked fashion accessory",
  },
  {
    name: "School of Code pillow",
    count: 1,
    whatILike: "Eat. Sleep. Code. Repeat :)",
  },
];

// creat a funtion called describeItem

function describeItem(myCollection) {
  // function should console log a message acording to how many items you have
  // if one item is should log `I have a ${myCollection.name} Here is what I like about it: ${whatIlike}`
  if (myCollection.count === 1) {
    console.log(
      `I have a ${myCollection.name} Here is what I like about it: ${whatIlike}`
    );
  } else
    console.log(
      `I have ${myCollection.count} ${myCollection.name}. Here is what I like about them: ${myCollection.whatILike}.`
    );
}
// if more log `I have ${myColletion.count} ${myCollection.name}. Here is what I like about them: ${myCollection.whatILike}.`

describeItem(myCollection);
