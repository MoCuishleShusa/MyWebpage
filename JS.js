function contact() {
  alert("Hi! Nice to hear from you!"+"\n"+"Please contact me by email: shusatsy@gmail.com.");
}

function answer(val) {
  if (val.value == "resume" || val.value == "Resume") {
    alert("Please press the button on the left. Then you'll get it!");
  } else if (val.value == "contact" || val.value == "contact infomation") {
    alert("Please contact me by email: shusatsy@gmail.com.");
  } else {
    alert("Sorry... No infomation about that yet.");
  }
}
