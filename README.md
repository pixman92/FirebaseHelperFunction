# FirebaseHelperFunction

(this repo is still under development)


A set of functions to help with pulling data from Firebase Realtime Database.

### _Functions List:_

**pathLoop(path, makePath)**
* the main function. It pulls values from the 'path' passed into it
* **path** - the path to be entered
* **makePath** - (boolean) if true - the function will make the next node into a string and push to an array - path[]
* **return** - if makePath is FALSE, function will only populate arrayOfVal[] array. This allows for data from the next node to be entered as an object into said array. if makePath is TRUE, a path[] array will be populated with the strings of the path of each node under the 'path' parameter thas entered
* **example:** pathLoop('users', true)

**nodeBasedOnArray(startingPath, pathPos)**
* function that returns value based on a root path and an array of indexes to deep dive into the branches of the the Firebase realtime Database
* **startingPath** - path that is your root directory
* **pathPos** - this is an array, of which, each element is a index of the node to go through
* **return** - pathTaken - the path that got you the value printed in console. pathReturnedValue - the value at the end of the node that you worked towards
* **example:** 
```
[
  "john",
  "lots",
  "",
  "california",
  {
    "-LagYUtBBWv1slu37rJ4": {
      "UID": "something special"
    }
  },
  {
    "status": "go away"
  }
]
```
* to get to "john", I can use the nodeBasedOnArray() function -   
**nodeBasedOnArray('users', [0, 0])** because 'users' is my root and 'john' is the 0th element after the first 0th element in my root of 'users'

**getLastElement(mainPath, elementSearch)**
* function that pulls last element(s) from end of the path of the pathLoop function. Also, takes in elementSearch to compare to array and returns that index of element
* **mainPath** - the path of which to retrieve the values under it
* **elementSearch** - the element to seek out from those listed values
* **posOfStringElement** - global variable that is of the position of the element found in the values 
* **returnArray** - the main array that holds the values found under the node based on the path. This is critical because you can use nodeBasedOnArray() function with posOfStringElement, to find the correct nodes, even when the structure of the branches in Firebase change

**findBasedOnParams(myPath, text, param)**
* function that finds obj properties
* **myPath** - root path to start with (ie 'users')
* **text** - the key of the obj
* **param** - the paramater you want to compare to 
* **returns** - -1 if failed, otherwise posOfText variable that keeps the position found that has met requirements

**lookUpParam(path, param, passedNum)**
* function that returns a returns a value based on the param passed
* **path** - the root path to get to values under this node
* **param** - the parameter to search for
* **passedNum** - the array index to work through
* **example:**  - **lookUpParam('users', 'email', 0)** - this looks up an email based on the 'users' root path, at the 0th index of the array returned from pathLoop()

**takeInPath(path)**
* this function is similar to pathLoop(), but gives the value of the snapshot (pulled from Firebase.once('value')) back
* **path** - root path
* **returns:** - snap - from the path passed index

**backUpFunction(path)**
* function that backs up 1 level if the current string pased through pathLoop() results in **undefined** value
* **path** - root path to check 
