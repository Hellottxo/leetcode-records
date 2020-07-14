/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    this.iterator = iterator
    this.peekObj = null
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    if(this.peekObj == null){
        this.peekObj = this.iterator.next()
    }
    return this.peekObj
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    if(this.peekObj != null){
        let obj = this.peekObj
        this.peekObj = null
        return obj
    }else{
        return this.iterator.next()
    }
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    if(this.peekObj != null){
        return true
    }
    return this.iterator.hasNext()
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */