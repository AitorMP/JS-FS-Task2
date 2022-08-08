//Task

/* Given an object consisting of an “id” property, where ID’s are not unique and two objects can have the same ID: 

o1 = {id: 1}
o2 = {id: 1}
o3 = {id: 2}

/*Design and implement a JavaScript function that accepts an array of these objects as a parameter, and that returns a 2-dimensional array containing sets of ID objects with the following conditions:

1. No two objects in a set have the same ID
2. Each set of objects is a combination of the objects from the input array
3. Each set of objects is of the maximum length possible (after adhering to rules 1 and 2) 

//Example Outputs

[{id: 1}, {id: 2}]    // =>  

[{id: 1}, {id: 1}, {id: 2}]   // =>

[{id: 1}, {id: 1}, {id: 2}, {id: 2}, {id: 3}]   // =>
*/

//-------- MY SOLUTION --------//

let objectArray = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }];

const setArray = (objectArray) => {
  let finalArray = [];
  let elementArray = [];

  for (let j = 0; j < objectArray.length; j++) {
    if (!elementArray.some((elem) => elem.id === objectArray[j].id)) {
      elementArray.push(objectArray[j]);
    }

    finalArray.push(elementArray);
  }

  console.log(finalArray);
  return finalArray;
};

setArray(objectArray);
