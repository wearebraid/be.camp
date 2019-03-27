import cloneDeep from 'clone-deep'

/**
 * Function to map over an object.
 * @param {*} obj An object to map over
 * @param {*} callback
 */
export function map (original, callback) {
  let obj = cloneDeep(original)
  for (let key in obj) {
    obj[key] = callback(key, obj[key])
  }
  return obj
}

/**
 * Function to filter an object's properties
 * @param {*} original
 * @param {*} callback
 */
export function filter (original, callback) {
  let obj = {}
  for (let key in original) {
    if (callback(key, original[key])) {
      obj[key] = original[key]
    }
  }
  return obj
}

/**
 * Function to reduce an object's or Map properties
 * @param {*} original
 * @param {*} callback
 * @param {*} accumulator
 */
export function reduce (original, callback, accumulator) {
  if (original instanceof Map) {
    for (let [key, value] of original) {
      accumulator = callback(accumulator, key, value)
    }
  } else {
    for (let key in original) {
      accumulator = callback(accumulator, key, original[key])
    }
  }
  return accumulator
}


export function sortObjKeys(obj) {
  var ordered = {};
  Object.keys(obj).sort(compareCaseInsensitive).forEach(function(key) {
    ordered[key] = obj[key];
  });
  return ordered;
}

export function compareCaseInsensitive(a, b) {
  let x = a.toLocaleLowerCase(),
      y = b.toLocaleLowerCase()
  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
