//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  let endStr = "";

  for(let i = (str.length-target.length); i < str.length; i++){
    endStr += str[i];
  }
  return endStr == target? true : false;
}

confirmEnding("Bastian", "n");
//return true

confirmEnding("Open sesame", "same");
//return true

confirmEnding("Open sesame", "sage");
//return false