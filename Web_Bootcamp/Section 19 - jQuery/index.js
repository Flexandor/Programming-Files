/*$(document).ready(function() { 
}) This is the way that you can write to make sure the jquery library is ready before enacting the JS. However you can also do this by putting the script tag for jQuery just before the JS one */

/*$("h1").css("color", "red");*/ /*Could use $("h1").css("color") to get the color back.

but we want to keep css seperate so do the below */

$("h1").addClass("big-title"); /*to add multiple classes you just add a space in between*/

$("button").html("<em>HEY</em>");

$("a").attr(
  "href",
  "https://www.google.com"
); /*This lets you manipulate the attributes within an element. The two inputs here means find that attribute and set it to google" */

$("h1").click(function () {
  $("h1").css("color", "red");
}); /* Function to change something on click. */

$("button").click(function () {
  $("h1").css("color", "purple");
}); /* This is the same as the for loop from before. Adds click listener to all of the buttons and gives it the function of changing the css */

$(document).keydown(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

/** Before - adds element before the one targeted.
 *  After - adds the element after the one targeted.
 *  prepend - adds the element into the item you selected just before the opening tag <h1><btn>New</btn> Hello
 *  append - is added after the element targetted before the closing tag.
 */
/**
 * 
$("button").on("click", function() {
    $("h1").toggle();
})
 */

$("button").on("click", function() {
    $("h1").slideToggle();
})

/** You can chain method together so that they happen in order: */

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})

