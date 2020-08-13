// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let _string = [];
  if (typeof(obj) === null || typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    return `${obj}`;
  } else if (typeof(obj) === 'string') {
    return `"${obj}"`;
  } else if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      _string.push(stringifyJSON(obj[i]));
    }
    return `[${_string}]`;
  } else if (typeof(obj) === 'object') {
    if (obj === null) {
      return `${obj}`;
    }
    for (let key in obj) {
      if (typeof(key) === 'function' || obj[key] === undefined) {
        return '{}';
      }
      _string.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    console.log(_string);
    return `{${_string}}`;
  }
};
