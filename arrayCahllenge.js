/**
 * have a function ArrayChallenge(strArr) that take the array
 * of strings which will contains pairs of integers like
 * ["(1,2)","(2,4)","(7,2)"]
 * where the first element of each pair is the child node
 * this function should return true if a binary tree can be formed
 * 
 * input : ["(1,2)","(2,4)","(5,7)","(7,2)","(9,5)"]
 * output: true
 * 
 * input:["(1,2)","(3,2)","(2,12)","(5,2)"]
 */

function ArrayChallenge(strArr){
  let res=true
  let strContent= strArr.join(',')
  console.log(strContent)
  let listOfNumber= strContent.match(/\d+/g)||[]
 console.log(listOfNumber)
  let listOfParents=[]

  for(var i= 0; i<listOfNumber.length; i++){
    if(i%2!==0){
listOfParents.push(listOfNumber[i])

    }
 }
 console.log(listOfParents)

 // check if a valid binary Tree
let count=0

 for(var i=0;i<listOfParents.length;i++){
  count=0
    for(const el of listOfParents){
      if(listOfParents[i]==el){
        count++
      }
      if(count>2){
        return false
      }
    }
 }
 return res
}

console.log(ArrayChallenge(["(1,2)","(2,4)","(7,2)"]))
console.log(ArrayChallenge(["(1,2)","(3,2)","(2,12)","(5,2)"]))