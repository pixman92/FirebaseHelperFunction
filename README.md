# FirebaseHelperFunction

(this repo is still under development)


A set of functions to help with pulling data from Firebase Realtime Database.

### _Functions List:_

1. pathLoop(path, makePath)
* path - the path to be entered
* makePath - (boolean) if true - the function will make the next node into a string and push to an array - path[]
* return - if makePath is FALSE, function will only populate arrayOfVal[] array. This allows for data from the next node to be entered as an object into said array. if makePath is TRUE, a path[] array will be populated with the 
