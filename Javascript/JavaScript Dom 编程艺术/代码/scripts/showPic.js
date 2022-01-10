function showPic(whichPic) {
  var source = whichPic.getAttribute("href");
  var text = whichPic.getAttribute("title");
  var placeholder = document.getElementById("placeholder");
  var description = document.getElementById("description");
  placeholder.setAttribute("src", source);
  description.firstChild.nodeValue = text;
}

function countBodyChildren() {
  var body_el = document.getElementsByTagName("body")[0];
  console.log(body_el.childNodes.length);
  console.log(body_el.nodeType);
}

window.onload = countBodyChildren;
