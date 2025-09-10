visibleElement("textBox", false);

onEvent("myButton", "click", function () {
  visibleElement("questions", false);
  visibleElement("textBox", true);
  console.log("mybutton click");
  var userName = getValue("box1");
  var icecream = getValue("box2");
  console.log(userName + "\n" + icecream);
  var cookie = getValue("box3");
  var color = getValue("box4");
  console.log(cookie + "\n" + color);
  var sport = getValue("box5");
  var userMessage =
    "Hello, " +
    userName +
    "! Wow! " +
    icecream +
    " is a great flavor! " +
    cookie +
    " is amazing cookie. " +
    color +
    " really suites you. " +
    sport +
    " really keeps you acive. ";

  setText("textBox", userMessage);
});
// onEvent("reset", "click", function( ) {
// 	console.log("button1 clicked!");
// 	setImageURL("myButton","lollipop.jpeg");
// });
