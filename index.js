//1
// function controlFifty(a, b) {
//   if (a == 50 || b == 50 || a + b === 50) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(controlFifty(49, 1), controlFifty(51, 2), controlFifty(49, 1));

//2
// function deleteChar(str, i) {
//   let result = str.replace(i, "");
//   return result;
// }
// console.log(deleteChar("caaaaaa", "a"));

//3
// function checkInterval(a, b) {
//   if (((a < 60 && a > 40) || (a < 100 && a > 70)) && ((b < 60 && b > 40) || (b < 100 && b > 70))) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkInterval(41, 90));

//4
// function checkCityName(str) {
//   if (str.toLowerCase().slice(0, 3) === "los" || str.toLowerCase().slice(0, 3) === "new") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkCityName("perro los"), checkCityName("cane"), checkCityName("new york"), checkCityName("Los angeles"));

//5
// function sumElement(arr) {
//   const sum = arr.reduce((acc, value) => acc + value, 0);
//   return sum;
// }
// console.log(sumElement([1, 2, 7, 9]));

//6
// function noOneThree(arr) {
//   return arr.includes(3) || arr.includes(1) ? false : true;
// }
// console.log(noOneThree([2, 3, 4, 75, 7]), noOneThree([1, 0, 4, 75, 7]), noOneThree([2, 0, 4, 75, 7]));

//7
// function angleName(num) {
//   if (num < 90) {
//     return "acuto";
//   } else if (num > 90 && num < 180) {
//     return "ottuso";
//   } else if (num === 90) {
//     return "retto";
//   } else if (num === 180) {
//     return "piatto";
//   }
// }
// console.log(angleName(12), angleName(12), angleName(180), angleName(30));

//8
// function acronimo(str) {
//   return str
//     .split(" ")
//     .map((parola) => parola.charAt(0))
//     .join("")
//     .toUpperCase();
// }
// console.log(acronimo("i cani bianchi di mio zio"));

//9
// function mostUsedLetter(str) {
//   let counts = {};
//   let maxCount = 0;
//   let maxLetter = "";

//   for (let char of str) {
//     if (!counts[char]) {
//       counts[char] = 0;
//     }
//     counts[char]++;

//     if (counts[char] > maxCount) {
//       maxCount = counts[char];
//       maxLetter = char;
//     }
//   }
//   console.log(counts);
//   return maxLetter;
// }
// console.log(mostUsedLetter("ciao caneo"));

//10
// function checkAnagramma(str1, str2) {
//   let v2 = str2.split("").reverse().join("");
//   return str1 === v2 ? true : false;
// }

// console.log(checkAnagramma("cane rosso", "ossor enac"));

//11
// function verifyAnagrams(arr, word) {
//   results = [];
//   for (el of arr) {
//     el.split("").sort().join("") === word.split("").sort().join("") ? results.push(true) : results.push(false);
//   }
//   return results;
// }
// console.log(verifyAnagrams(["thomsa", "samoth", "tomhas", "tomasa", "thomas"], "thomas"));

//12
// function isPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   return reversed === str ? true : false;
// }
// console.log(isPalindrome(""));

//12.2 (anche frasi palindrome e lettere maiuscole)
// function isPalindrome(str) {
//   let noSpaceStr = str.replace(/\s+/g, "").toLowerCase();
//   let reversed = noSpaceStr.split("").reverse().join("").toLowerCase();
//   return reversed === noSpaceStr ? true : false;
// }
// console.log(isPalindrome("i topi non avevano Nipoti"));

//13
// function invertNumber(num) {
//   let result = num.toString().split("").reverse().join("");
//   return Number(result);
// }
// console.log(invertNumber(19203920));

//14
// function numberToHashtag(num) {
//   let container = [];
//   for (let i = 0; i < num; i++) {
//     container.push("#");
//   }
//   return container.join("");
// }
// console.log(numberToHashtag(15));

//15
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("cagnolino nero"));

//16
// function subArray(arr, num) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += num) {
//     result.push(arr.slice(i, num + i));
//   }
//   return result;
// }
// console.log(subArray([3, 2, 3, 21, 23, 1, 1, 56, 78, 65, 34], 3));

//15
function nullMatrixGenerator(num) {
  let matrix = [];
  for (let i = 0; i < num; i++) {
    let row = [];
    for (let j = 0; j < num; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
}

function cercaZeroMatrice(matrice) {
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[i].length; j++) {
      if (matrice[i][j] === 0) {
        return true;
      }
    }
  }
  return false;
}

function spiralMatrixGenerator(num) {
  let spiralMatrix = nullMatrixGenerator(num);
  let currentNumber = 1;

  while (!cercaZeroMatrice(num)) {
    for (let i = 0; i < num; i++) {
      spiralMatrix[0][i] += i + 1;
      currentNumber++;
    }
    for (let j = 1; j < num; j++) {
      spiralMatrix[j][num - 1] += currentNumber++;
    }
    for (let h = 1; h < num; h++) {
      spiralMatrix[num - 1][num - h - 1] += currentNumber++;
    }

    for (let k = 1; k < num - 1; k++) {
      spiralMatrix[num - k - 1][0] += currentNumber++;
    }
    i++;
    j++;
    k--;
    num--;
  }

  return spiralMatrix;
}

console.log(spiralMatrixGenerator(5));
