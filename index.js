class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  //add element to the end of the list
  append(value) {
    let node = new Node(value);
    //stores the currently selected node
    let currentNode;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      currentNode = this.head;

      //Iterate through the list until the end
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
      this.tail = node;
    }
    this.size++;
  }

  preppend(value) {
    //Make a node with the head as the next argument
    let node = new Node(value, this.head);
    this.head = node;
    this.size++;
  }

  at(index) {
    //returns node at the specified index
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  pop() {
    //Remove last element from the list
    //take the penultimate node
    const newTail = this.at(this.size - 1);
    //make the next null
    newTail.next = null;
    //make it the tail
    this.tail = newTail;
    //decrement size
    this.size--;
  }

  contains(value) {
    let currentNode = this.head;
    //iterate through the list, looking for a match
    while (currentNode.next) {
      if (currentNode.value == value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    //if no match
    return false;
  }

  find(value) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        return index;
      } else {
        currentNode = currentNode.next;
        index++;
      }
    }
    return null;
    //returns the index of the value containing node
    //else returns null
  }

  toString() {
    let finalString = "";
    let currentNode = this.head;
    //Prints out all the nodes
    while (currentNode.next) {
      finalString += `(${currentNode.value}) --> `;
      currentNode = currentNode.next;
    }
    finalString += " null";
    return finalString;

    //(value) -> (value) -> (value) -> null
  }

  insertAt(value, index) {
    //Inserts the value at provided index
    //return the node at the index
    const oldNode = this.at(index);
    //node already at index becomes next
    const node = new Node(value, oldNode);
    const olderNode = this.at(index - 1);
    //node at index-1 gets the value as next
    olderNode.next = node;
    this.size++;
  }

  removeAt(index) {
    const nodeToRemove = this.at(index);
    const previousNode = this.at(index - 1);
    previousNode.next = nodeToRemove.next;
    this.size--;
    //
  }
}

let testLista = new LinkedList();

testLista.append("Pipi");
testLista.append("Pipi2");
testLista.append("Pipi3");
testLista.append("Pipi4");
testLista.append("Pipi5");
testLista.preppend("Pipi6");
console.log(testLista.tail);
testLista.pop();
testLista.pop();
console.log(testLista.tail);
console.log(testLista.contains("Pipi12"));
console.log(testLista.find("Pipi3"));
console.log(testLista.toString());
testLista.insertAt("Pipi7", 1);
console.log(testLista.toString());
testLista.removeAt(2);
console.log(testLista.toString());
