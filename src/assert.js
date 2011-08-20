(function (exports) {
  "use strict";

  var undef = (function () {} ());

  exports.assert = {
    equal: function (a, b) {
      return a === b;
    },

    notEqual: function (a, b) {
      return a !== b;
    },

    type: function (obj, type) {
      return (typeof obj) === type;
    },

    isDefined: function (obj) {
      return obj !== null && obj !== undef;
    },

    isUndefined: function (obj) {
      return obj === undef || obj === null;
    },

    isFalse: function (value) {
      return value === false;
    },

    isTrue: function (value) {
      return value === true;
    },

    isFalsy: function (value) {
      return !value;
    },

    isTruthy: function (value) {
      return !!value;
    },

    moreThan: function (value, bound) {
      return value > bound;
    },

    lessThan: function (value, bound) {
      return value < bound;
    },

    atLeast: function (value, bound) {
      return value >= bound;
    },

    atMost: function (value, bound) {
      return value <= bound;
    },

    between: function (value, min, max) {
      return value >= min && value <= max;
    }
  };

  if (Object.same) {
    exports.assert.same = function (a, b) {
      return Object.same(a, b);
    };
  }

}(typeof exports === 'undefined' ? window : exports));
