// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var classNameArr = [];
  var containsClass = function(body) {
    if (body.classList && body.classList.contains(className)) {
      classNameArr.push(body);
    }
    if (body.childNodes) {
      for (let i = 0; i < body.childNodes.length; i++) {
        containsClass(body.childNodes[i]);
      }
    }
  };
  containsClass(document.body);
  return classNameArr;
};
