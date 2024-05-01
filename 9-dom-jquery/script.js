// getElementById

// let headingElement = document.getElementById("main-heading");
// console.log(headingElement.innerHTML);
// let newHeadingText = prompt("Enter a new heading:");
// headingElement.innerHTML = newHeadingText;

// jQuery
// $("#main-heading").text(newHeadingText);
// $("body").append("<p>Here is a paragraph</p>");

// $("p").append("<p>Here is a New paragraph</p>");

// for (let i = 0; i < 3; i++) {
//   let hobby = prompt("Enter a hobby:");
//   $("body").append("<p>" + hobby + "</p>");
// }

// animation with jQuery

// $("h1").text("This text is dissapered soon").fadeOut(3000).fadeIn(2000);
// $("h1").text("This text is dissapered soon").slideUp(3000).slideDown(2000);

// Tasks 1
let arrMyFriends = ["John", "Jane", "Jack", "Jill", "James"];

for (let i = 0; i < arrMyFriends.length; i++) {
  $("body").append(
    "<p style='display: none;'>" + arrMyFriends[i] + " лучший!" + "</p>"
  );
}

// Tasks 2
for (let i = 1; i <= 15; i++) {
  setTimeout(function () {
    $("#main-heading").text("My Friends!!!").fadeOut(1000).fadeIn(1000);
  }, i * 1000);
}

// Select all paragraphs and fade them in
$("p").fadeIn(5000);

// Tasks 2
