(function() {

  "use strict";
  var anchors = document.querySelectorAll("a");
  for (let anchor=0; anchor<anchors.length; anchor++) {
    anchors[anchor].setAttribute("target", "_blank");
  }

})();
