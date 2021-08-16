// Given a phrase, reverse the order of the characters of each word.

let reverseWords = function(phrase){
   let arr = phrase.split("");
    for(let i=0; i<arr.length/2; i++){
      let temp = arr[i];
      arr[i] = arr[arr.length - i - 1];
      arr[arr.length - i - 1] = temp
    }

   let arr2 = arr.join("").split(" ");
   console.log(arr2);
    for(let i=0; i<arr2.length/2; i++){
      let temp = arr2[i];
      arr2[i] = arr2[arr2.length - i - 1];
      arr2[arr2.length - i - 1] = temp
    }
   return arr2.join(" ")
}

console.log(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");



// No Reverse Method! Unless that is your brute force...