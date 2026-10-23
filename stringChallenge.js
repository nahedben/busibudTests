/* 
a function determine the largest number of unique 
characters that exists between a pair of matching letters anywhere in the string
example 'ahyjakh' for this string the program should return 4

and for this string 'ghececgkaem' the program should return 5
*/

function stringChallenge(str){
  var firstIndex = 0 
  var secondIndex = 0 
  var newDist= 0
  var maxDist=0
  let newStr=''
  let res =0 
  let recap =[]
  let finalList
  for(var i=0; i<str.length; i++){
    for(var j=0; j<str.length; j++){
    
      if(str[i]===str[j] && j>i){
        
        newDist= j-i-1
          if(newDist >= 1 && newDist>maxDist){
              maxDist=newDist
              firstIndex=i
              secondIndex=j
            }
      }
    }
  }
 
  newStr=str.slice(firstIndex,secondIndex)
  // console.log(newStr)
  recap=newStr.split("")
  recap.shift()
  // console.log(recap)
  finalList=[...new Set(recap)]

//   for(var i=0; i<recap.length; i++){
//     for(var j=0; j<recap.length; j++){
//       if(recap[i]=== recap[j] && j!==i){
//         recap.splice(i,1)
//         console.log(recap)
//       }
//     }}

// res= recap.length
res=finalList.length
  return res
}

console.log(stringChallenge('ahyjakh'))
console.log(stringChallenge('ghececgkaem'))