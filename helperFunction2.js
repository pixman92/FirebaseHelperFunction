var arrayForPath=[], arrayOfVal=[], me;
var strungArray=[];
var tmp;
var endArray=[];
var savedPos = -1;
var bigArray= [];
var solidArray = [];
var backupPathStr = [];
async function pathLoop(path){
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
        if(arrayOfVal.length==0){
            var num = path.lastIndexOf("/");
            backupPathStr= path.substr(0, num);
            console.log('backupPathStr', backupPathStr);
        }
        console.log('arrayForPath', arrayForPath);
        console.log('arrayOfVal', arrayOfVal);
        // makeArray();
    });
    // solidArray = arrayForPath;
}

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
}

//================================================

async function something(){
    await pathMaker();
    for(var i in path){
        await doIt(path[i], i);
    }
}


//================================================

async function afterKnowingEmail(myPath, numDeep){
    console.log('function that pulls Value for a searched and deeper value, serval branches deep');

    path = myPath;

    for(var i=0; i<=numDeep; i++){
        await pathLoop(path);
        await pathMaker(); //- makes paths for all child elements
        await getLastElement(path[0]); //- gets all the child names
        //chose a child - 
        console.log('value:', arrayOfVal);
    }

    // await pathLoop('users');
    // await pathMaker(); //- makes paths for all child elements
    // await getLastElement(path[0]); //- gets all the child names
    // //chose a child - by index
    // await pathLoop(makePathString(path[index1], returnArray[index2]));
    // await pathMaker();

    // await getLastElement(path[0]);
    // console.log('value:', arrayOfVal);

    
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
    arrayForPath=[], arrayOfVal=[], strungArray=[];
    let refMe = await db.ref(path).once('value')
    .then((snapshot)=>{
        gSnap=snapshot;
        snap = snapshot.A.B;
        console.log('snap', snap);
    });
}

//================================================

function savePathBefore(){

}