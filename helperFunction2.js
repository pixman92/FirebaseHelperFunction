var arrayForPath=[], arrayOfVal=[], me;
var strungArray=[];
var tmp;
var endArray=[];
var savedPos = -1;
var bigArray= [];
var solidArray = [];
var backupPathStr = [];
async function pathLoop(path, safety){
    // spits out next node in tree of paths

    arrayForPath=[], arrayOfVal=[], strungArray=[];
    let refMe = await db.ref(path).once('value')
    .then((snapshot)=>{
        snapshot.forEach((el)=>{
            me = el;
            // var tmp = el.val();
            arrayForPath.push(el.ref.path);
            arrayOfVal.push(el.val());
            
        });
        // if(safety){
            if(arrayOfVal.length==0){
                pathLoop(backUpFunction(path));
            }

        // }
        console.log('arrayForPath', arrayForPath);
        console.log('arrayOfVal', arrayOfVal);
        // makeArray();
    });
    // solidArray = arrayForPath;
}


//================================================



var path=[];
function pathMaker(){
    console.log('function that combines to make path', );
    
    path=[];
    for (let i = 0; i < arrayForPath.length; i++) {
        path.push(arrayForPath[i].o.join('/'));
    }
}


async function makeArray(){
// await pathLoop(mainPath);
    solidArray = [];
    for (let i = 0; i < arrayForPath.length; i++) {
        solidArray.push(arrayForPath[i].o.join('/'));
    }
    console.log('solidArray', solidArray);
}
function remove(array, pos){
    array.splice(pos, 1);
}

function makePathString(previous, toAdd){
    toAdd = previous + '/'+ toAdd;
    return toAdd;
}
//================================================
// async function makeDeeperDive(runMe){
//     await pathLoop('users');
//     await pathMaker();

//     var tmp = [] = path;

//     for(var ii=0; ii<=runMe; ii++){
//         // console.log('ii', ii);
//         i=0;
//         for(var i in tmp){
//             console.log('i', i);
//             console.log('tmp[i]', tmp[i]);
//             await pathLoop(tmp[i]);
//             await pathMaker();
//         }
//         tmp = [] = path;

//     }

// }

var pathReturnedValue = "";
var pathTaken = "";
async function runAndRerun(startingPath, pathPos){
    console.log('FREAKING AWESSOME FUNCTION - that takes in the initial path, then an array of nodes to drill down to nodes based on pos in that parameter array');
    await pathLoop(startingPath);
    await pathMaker();


    for(var i=0; i<=pathPos.length;i++){
        console.log('path', path);
        console.log('i', i);
        await pathLoop(await path[pathPos[i]]);
        await pathMaker();
        console.log('val', arrayOfVal[pathPos[pathPos.length-1]]);
    }
    
    pathTaken = path[pathPos[pathPos.length-1]];

    return  pathReturnedValue = arrayOfVal[pathPos[pathPos.length-1]];

}


//================================================
var returnArray=[];
async function getLastElement(mainPath){
    console.log('function that pulls last element(s) from end of the path of the pathLoop function');
    returnArray = [];
    await pathLoop(mainPath);
    for(var i in arrayForPath){
        returnArray.push(arrayForPath[i].o[arrayForPath[i].o.length-1]);
    }
    console.log('returnArray', returnArray);
}
//================================================

var posOfText = -1;
async function findBasedOnParams(text, param){
    console.log('function that finds obj properties and returns pos', );
    await pathLoop('users');
    pathMaker();
    console.log('path', path);
    for(var i in arrayOfVal){   //arrayOfVal - holds all data
        if(arrayOfVal[i][text]==param){
            posOfText = i;
            console.log(text+ "found at pos found at " + posOfText);
            console.log('path2', path);
        }
    }
}

var savedReturnedNode;
async function lookUpParam(path, param, passedNum){
    console.log('function that returns a node based on <num> in branch and the parameter type {obj}');
    await pathLoop(path);

    console.log(arrayOfVal[passedNum][param]);
    savedReturnedNode = arrayOfVal[passedNum][param];

    if(savedReturnedNode==undefined){
        await pathLoop(backUpFunction(path));
        console.log(arrayOfVal[passedNum][param]);
        savedReturnedNode = arrayOfVal[passedNum][param];
    }
}

//================================================

async function something(){
    await pathMaker();
    for(var i in path){
        await doIt(path[i], i);
    }
}


//================================================
var pathMe="";
async function afterKnowingEmail(myPath, level, index){
    console.log('function that pulls Value for a searched and deeper value, serval branches deep');
    if(backupPathStr.length==0){
        await pathLoop(myPath);
        await pathMaker(); //- makes paths for all child elements
        await getLastElement(path[level]); //- gets all the child names
        //chose a child - 
        console.log('value:'+returnArray[index], arrayOfVal[index]);
    }else{
        // await pathLoop(backupPathStr);
        // await pathMaker(); //- makes paths for all child elements
        await getLastElement(backupPathStr); //- gets all the child names
        //chose a child - 
        console.log('endChild', returnArray);
        console.log('value:'+returnArray[index], arrayOfVal[index]);
    }

}

//================================================
var oneBefore = [];
var posOfNode = -1;
var i=0;
async function doIt(mainPath, num){
    console.log('function that takes a path, copares it to a node, and returns that node value', );

    await pathLoop(mainPath);
    pathMaker();

    await getLastElement(path[num]);
}


    

//================================================
var snap;
var gSnap;
async function takeInPath(path){
    console.log('function that is supposed to give back value from path string, but may be replaced with, get params function', );
    arrayForPath=[], arrayOfVal=[], strungArray=[];
    let refMe = await db.ref(path).once('value')
    .then((snapshot)=>{
        gSnap=snapshot;
        snap = snapshot.A.B;
        console.log('snap', snap);
    });
}

//================================================

function backUpFunction(path){
    console.log('function that backs up one / lvl then runs through pathLoop()');
    var num = path.lastIndexOf("/");
    backupPathStr= path.substr(0, num);
    console.log('backupPathStr', backupPathStr);
    return backupPathStr;
}