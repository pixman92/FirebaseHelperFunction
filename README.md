# FirebaseHelperFunction

(this repo is still under development)


A set of functions to help with pulling data from Firebase Realtime Database.

### _Functions List:_

**1. pathLoop(path, makePath)**
* **path** - the path to be entered
* **makePath** - (boolean) if true - the function will make the next node into a string and push to an array - path[]
* **return** - if makePath is FALSE, function will only populate arrayOfVal[] array. This allows for data from the next node to be entered as an object into said array. if makePath is TRUE, a path[] array will be populated with the strings of the path of each node under the 'path' parameter thas entered
* **example:** pathLoop('users', true)

**2. nodeBasedOnArray(startingPath, pathPos)**
** **startingPath** - path that is your root directory
* **pathPos** - this is an array, of which, each element is a index of the node to go through
* **return** - pathTaken - the path that got you the value printed in console. pathReturnedValue - the value at the end of the node that you worked towards
* **example:** 
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
* to get to "john", I can use the nodeBasedOnArray() function - nodeBasedOnArray('users', [0, 0]) because 'users' is my root and 'john' is the 0th element after the first 0th element in my root of 'users'

**3. getLastElement(mainPath, elementSearch)**
* **mainPath** - the path of which to retrieve the values under it
* **elementSearch** - the element to seek out from those listed values
* **posOfStringElement** - global variable that is of the position of the element found in the values 
* **returnArray** - the main array that holds the values found under the node based on the path. This is critical because you can use nodeBasedOnArray() function with posOfStringElement, to find the correct nodes, even when the structure of the branches in Firebase change

4. 

