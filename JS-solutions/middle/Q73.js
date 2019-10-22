/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] == 0){
                for(let i2=0;i2<matrix.length;i2++){
                    if (matrix[i2][j] != 0){
                        matrix[i2][j] = true
                    }
                }
                for(let j2=0;j2<matrix[0].length;j2++){
                    if (matrix[i][j2] != 0){
                        matrix[i][j2] = true
                    }
                }
            }
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === true){
                matrix[i][j] = 0
            }
        }
    }
};


setZeroes([[0,1]])