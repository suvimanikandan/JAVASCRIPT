function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
  //your code beelow this line

  var result = "";
  result += "the" + myAdjective + " " +myNoun + " " + myVerb + "to the store" + myAdverb

  //your code above this line
  return result;

}

//change the words here to test your function

console.log(wordBlanks("dog","big","ran","quickly"))
console.log(wordBlanks("bike","slow", "flew","slowly"))
