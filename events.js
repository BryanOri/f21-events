// In this assignment, you will be converting HTML event attributes into
// JavaScript "addEventListener" calls. In other words, you'll be creating
// equivalent "addEventListener" calls below, and then removing their
// attribute counterparts in the HTML file.
//
// Note: See https://www.w3schools.com/jsref/dom_obj_event.asp for event type
//       counterpart strings to use with "addEventListener"


function initialize()
{
  // 1) Convert the "onkeyup" and "onkeydown" event attributes attached to the
  //    body HTML element into JavaScript "addEventListener" calls.
  let body = document.body
  body.removeAttribute("onkeydown")
  body.removeAttribute("onkeyup")
  document.addEventListener("keydown", handleOnKeyDown)
  document.addEventListener("keyup", handleOnKeyUp)

  // 2) Convert the "onchange" event attribute attached to the input with id
  //    "inputBox" into a JavaScript "addEventListener" call.
  let box = document.querySelector("#inputBox")
  box.removeAttribute("onchange")
  box.addEventListener("change", handleInputChanged) 

  // 3) Convert the "onmouseover" and "onmouseout" event attributes attached
  //    to the textarea with id "log" into JavaScript "addEventListener" calls.
  let log = document.querySelector("#log")
  log.removeAttribute("onmouseover")
  log.removeAttribute("onmouseout")
  log.addEventListener("mouseover", function(){
    changeBgColor('gray')
  })
  log.addEventListener("mouseout", function(){
    changeBgColor('white')
  })
  // 4) Convert the "onclick" event attribute attached to the button with id
  //    "clearButton" into a JavaScript "addEventListener" call.
  let button = document.querySelector("#clearButton")
  button.removeAttribute("onclick")
  button.addEventListener("click", clearLog)

}


// 5) Convert the "onload" event attribute attached to the body into a
//    JavaScript "addEventListener" call.
//
//    Note: The counterpart event type to use is "DOMContentLoaded", and
//          you must apply this "addEventListener" to the "document" object
//          or the "window" object, not the body DOM element
document.addEventListener("DOMContentloaded", initialize)

//////////////////////////////////////
//// Do not modify anything below ////
//////////////////////////////////////

function handleOnKeyUp(event)
{
  const log = document.querySelector("#log");
  log.value += `Key Released: ${event.key}\n`;
  log.scrollTo(0, log.scrollHeight);
}

function handleOnKeyDown(event)
{
  const log = document.querySelector("#log");
  log.value += `Key Activation: ${event.key}\n`;
  log.scrollTo(0, log.scrollHeight);
}

function changeBgColor(newColor)
{
  const log = document.querySelector("#log");
  log.value += `Changed BG Color to: ${newColor}\n`;
  log.scrollTo(0, log.scrollHeight);

  log.style.backgroundColor = newColor;
}

function handleInputChanged()
{
  const inputBox = document.querySelector("#inputBox");
  const log = document.querySelector("#log");
  log.value += `Changed Input Box Text to: ${inputBox.value}\n`;
  log.scrollTo(0, log.scrollHeight);
}

function clearLog()
{
  const log = document.querySelector("#log");
  const inputBox = document.querySelector("#inputBox");

  log.value = "";
  inputBox.value = "";
}
