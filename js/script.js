setTimeout(move, 2000);

var i = 0;
var b = 0;
var c = 0;
var d = 0;
var f = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("html");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }

  if (b == 0) {
    b = 1;
    var elem = document.getElementById("css");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        b = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }

  if (c == 0) {
    c = 1;
    var elem = document.getElementById("js");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        c = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }

  if (d == 0) {
    d = 1;
    var elem = document.getElementById("python");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        d = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }

  if (f == 0) {
    f = 1;
    var elem = document.getElementById("wp");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        f = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
} 