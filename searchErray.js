console.log("hello")
/*
take the array of strings and determine how many oles, contiguous regions of 0's exists in the matrix
contiguous regions is one where there is a connected group of 0's going in one or more of four directions: up,down,left or right
["01111","01101","00011","11110"]
01111
01101
00011
11110
here the output should be 3 because there are two separate contiguous regions o 0's

["1011","0010"]
1011
0010
 here the output should be 2 
*/
function SearchingChallenge(strArr){
  if(!strArr || strArr==0) return []
  let newStr = strArr.map(el => el.split(''))
  // console.log(newStr)
  let arrRows=strArr.length
  let arrCols=strArr[0].length

  const serIn=(r,c)=>{
    if(r>=arrRows || c>=arrCols || r<0 || c<0 || newStr[r][c]!=='0'){
      return
    }
 
     newStr[r][c]='1'
    serIn(r+1,c)
    serIn(r-1,c)
    serIn(r,c+1) 
    serIn(r,c-1)
   
  }
    var locCount =0 
    for(var i=0; i<arrRows;i++){
      for(var j=0; j<arrCols; j++){
        if(newStr[i][j]==='0'){        
          locCount++
          serIn(i,j)
        }
      }
    }
      return locCount
  }


console.log(SearchingChallenge(["01111","01101","00011","11110"]))
console.log(SearchingChallenge(["1011","0010"]))