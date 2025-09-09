
onEvent("button1", "click", function(){
    var userName=getText("box1");
    var icecream=getText("box2");
  console.log(userName + "\n" + icecream);
    var cookie=getText("box3");
    var color=getText("box4");
  console.log(cookie + "\n" + color);
    var sport=getText("box5");
    var userMessage= "Hello, " + userName + "! Wow! " + icecream + " is a great flavor! " + cookie + " is amazing cookie. " + color + " really suites you. " + sport + " really keeps you acive. ";
  
  setText("textbox",userMessage);
});
onEvent("button1", "click", function( ) {
	console.log("button1 clicked!");
	setImageURL("myButton","lollipop.jpeg");
});
