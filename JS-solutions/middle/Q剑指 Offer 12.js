/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let wordG = "";

var exist = function (board, word) {
    wordG = word
    let cache = []
    for (let i = 0; i < board.length; i++) {
        let arrayI = []
        for (let j = 0; j < board[i].length; j++) {
            arrayI.push(0)
        }
        cache.push(arrayI)
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (findX(board, 0, i, j, cache)) return true;
        }
    }
    return false;
};


var findX = function (board, wordIndex, i, j, cache) {
    if (wordIndex >= wordG.length) return true;
    if (!board[i] || !board[i][j]) return false;
    if (cache[i][j] == 1) return false;
    if (wordG[wordIndex] !== board[i][j]) return false;

    cache[i][j] = 1;
    wordIndex++
    if (findX(board, wordIndex, i - 1, j, cache)) return true;
    if (findX(board, wordIndex, i + 1, j, cache)) return true;
    if (findX(board, wordIndex, i, j - 1, cache)) return true;
    if (findX(board, wordIndex, i, j + 1, cache)) return true;
    wordIndex--
    cache[i][j] = 0;
    return false;
}