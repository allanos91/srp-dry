// function biggerFunc(num1, num2, isBigger, func) {
//   let chosenNum;
//   if (isBigger ? num1 > num2 : num1 < num2) {
//     chosenNum = num1;
//   } else {
//     chosenNum = num2;
//   }
//   return func(chosenNum)
// }

const biggerFunc = (num1, num2, isLarger, func) => 
  func(isBigger ? Math.max(num1, num2) : Math.min(num1, num2));

function multiplyBiggerNumByTwo(num1, num2) {
  return biggerFunc(num1, num2, true, bigNum => bigNum * 2)
}

function divideBiggerNumByThree(num1, num2) {
  return biggerFunc(num1, num2, true, bigNum => bigNum / 3)
}

function eatMostTacos(sum1, sum2) {
  return biggerFunc(sum1, sum2, true, bigNum => `I ate ${bigNum} tacos.`)
}

function adoptSmallerDog(weight1, weight2) {
  return biggerFunc(weight1, weight2, false, smallDog => `I adopted a dog that weighs ${smallDog} pounds.`)
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};