/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
  let arr = [];
  let lastone;
  for(let i=0;i<B.length;i++) {
      let val,index;
      let tempA = A;
      for(let j=0;j<tempA.length;j++) {
          let tempVal = A[j] - B[i]
          if(j==0) {
              val = tempVal;
              index = j;
          }else {
              if(val > 0) {
                  if(tempVal > 0 && tempVal < val) {
                      val = tempVal;
                      index = j
                  }
              }else {
                  if(tempVal > 0 || (tempVal < 0 && tempVal < val)) {
                      val = tempVal;
                      index = j
                  }
              }
          }
      }
      arr.push(A[index]);
      tempA.splice(index,1)
  }
  return arr;
};