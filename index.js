"use strict";

export.defulat = function filterMap(cb, fn) {
  var leading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var a = [],
      arr = this;
  leading ? arr.forEach(function (k) {
    return fn(k) && a.push(cb(k));
  }) : arr.forEach(function (k) {
    var t = cb(k);
    fn(t) && a.push(t);
  });
  return a;
}
