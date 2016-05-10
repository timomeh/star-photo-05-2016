(function () {
  var autoshow = document.getElementsByClassName("js-autoshow")[0];
  var images = [];
  var showMe = 0;

  for (var i = 0; i < autoshow.childNodes.length; i++) {
    if (autoshow.childNodes[i].className && autoshow.childNodes[i].className.indexOf("hero-image-full") > -1) {
      if (autoshow.childNodes[i].className.indexOf("js-show-me")) {
        hasShowDefault = i;
      }
      images.push(autoshow.childNodes[i]);
    }
  }

  var newShowMe;

  setInterval(function () {
    images[showMe].className = images[showMe].className.replace(" js-show-me", "");
    if (showMe+1 < images.length) {
      showMe++;
    } else {
      showMe = 0;
    }
    images[showMe].className += " js-show-me";
  }, 7000);

}());
