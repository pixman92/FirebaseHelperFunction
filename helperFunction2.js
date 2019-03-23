var arrayForPath=[], arrayOfVal=[], me;
var strungArray=[];
var tmp;
var endArray=[];
var savedPos = -1;
var bigArray= [];
var solidArray = [];
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
        console.log('arrayForPath', arrayForPath);
        console.log('arrayOfVal', arrayOfVal);
    });
    // solidArray = arrayForPath;
}

var path=[];
function pathMaker(){
    for (let i = 0; i < arrayForPath.length; i++) {
        path.push(arrayForPath[i].o.join('/'));
    }
}


async function makeArray(mainPath){
await pathLoop(mainPath);
    solidArray = [];
    for (let i = 0; i < arrayForPath.length; i++) {
        solidArray.push(arrayForPath[i].o.join('/'));
    }
}
function remove(array, pos){
    array.splice(pos, 1);
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
    console.log('function that finds email and returns pos', );
    await pathLoop('users');
    console.log('path', path);
    for(var i in arrayOfVal){   //arrayOfVal - holds all data
        if(arrayOfVal[i][text]==param){
            posOfText = i;
            console.log(text+ "found at pos found at " + posOfText);
            console.log('path2', path);
        }
    }
}

async function lookUpParam(path, param, passedNum){
    console.log('function that returns a node based on <num> in branch and the parameter type {obj}');
    await pathLoop(path);

    console.log(arrayOfVal[passedNum][param]);
}

//================================================

async function something(){
    await pathMaker();
    for(var i in path){
        await doIt(path[i], i);
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
    arrayForPath=[], arrayOfVal=[], strungArray=[];
    let refMe = await db.ref(path).once('value')
    .then((snapshot)=>{
        gSnap=snapshot;
        snap = snapshot.A.B;
        console.log('snap', snap);
    });
}