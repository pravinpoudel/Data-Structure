//we want to findout if there is cycle in link list

// 1 -> 2 -> 3 -> 4
//          ^    |
//          |    |
//           - - -

// how do we detect the cycle?

//cycle detection algorithm

// 1. recording the node already visited and if the new node is already in the visited list, then it is loop

function cycle(list) {
  let pointer = list[0].head;
  let visited = [];
  while (pointer.next != null) {
    // if pointer is inside the visited array
    //return pointer -----found
    // else
    // visited.append(pointer);
    //pointer = pointer.next;
  }
  //this mean that there is end and nothing is found then return false
  return false;
}

// this algorithm has o(n) time complexity but o(n) space complexity as well because we have to traverse all the list elements and have to store all the elements

// so there is floyd cycle detection algorithm which has time complexity of O(1) ( also called tortiose and hare algorithm)

// if there is not a cycle then fast become null

// but if there is cycle, at one point fast and slow will keep looping in cycle until the slow catches fast or opposite
