// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function(array) {
    // enjoy
    /*
       ____b____   
      |         |
    a |         |c
      |_________|
           d
    */
    const middle = array.slice(1, array.length - 1).map(row => //once we make the first loop the middle part needs to be taken out so with each iteration we are grabbing the next layer and then calling this function and repeating the steps from before
                    row.slice(1, row.length - 1))
    return [
      array[0], //this takes care of side b
      array.slice(1, array.length -1).map(row => //this part takes care side "c"
        row[row.length - 1]),
      array.length > 1 ? array[array.length - 1].reverse() : [], //this takes care of side "d" ,return the bottom array of the matrix reversed if the array length is > 1,
      array.slice(1, array.length - 1).reverse().map(row => //this takes care of side "a"
       row[0] ),
      middle.length > 0 ? snail(middle) : []  //recurse for the next inner layer 
    ].flat()
  }