/* */ 
"format cjs";
import baseSortedIndex from './_baseSortedIndex';
import eq from './eq';

/**
 * This method is like `_.indexOf` except that it performs a binary
 * search on a sorted `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.sortedIndexOf([1, 1, 2, 2], 2);
 * // => 2
 */
function sortedIndexOf(array, value) {
  var length = array ? array.length : 0;
  if (length) {
    var index = baseSortedIndex(array, value);
    if (index < length && eq(array[index], value)) {
      return index;
    }
  }
  return -1;
}

export default sortedIndexOf;
