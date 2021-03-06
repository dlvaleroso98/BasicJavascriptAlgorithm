// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  console.log(arr.filter(Boolean));
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
//return [7, "ate", 9]
bouncer([false, null, 0, NaN, undefined, ""]);
//return []