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


async function makeArray(mainPath, populateBigArray){
    await pathLoop(mainPath);
    solidArray = [];
    for (let i = 0; i < arrayForPath.length; i++) {
        solidArray.push(arrayForPath[i].o.join('/'));
    }
    console.log('solidArray', solidArray);
    // solidArray=[];
    if(populateBigArray){
        bigArray.push(solidArray);
        console.log('bigArray', bigArray);

    }

}

// strungArray = 'users';
// async function deep(num){
//     await pathLoop('users');

//     makeArray(true);
// }

// function addToArray(num1, num2, pos){
//     savedPaths[num1].splice(num2, 0, solidArray[pos])                //insert new paths 1++ index
//     console.log('savedPaths', savedPaths);

// }
function remove(array, pos){
    array.splice(pos, 1);
}
//================================================
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

async function doIt(mainPath, node, value){
    await makeArray(mainPath);
    await getLastElement(mainPath);

    for(var i in returnArray){
        if(returnArray[i]==node && takeInPath(solidArray[i])==value){
            console.log('true!');
            console.log('returned', returnArray[i]);
            console.log('path: ', solidArray[i]);

        }
    }
}














// async function something(node, value){
//     await pathLoop('users');
//     makeArray();
    
//     for(var i=0; i<=arrayForPath.length;i++){
//     // for(var i in arrayForPath){
//         makeArray();
//         await pathLoop(solidArray[i]);
//         makeArray();
//         console.log('paths', solidArray[i]);

//         if(arrayForPath[0].o[arrayForPath[i].o.length-1]==node){
//             console.log('true!');
//             console.log('saved path', solidArray[i]);
//             await takeInPath(solidArray[i]);
//             if(snap==value){
//                 console.log('snap', snap);
//                 console.log('extra true!');
//             }else{
//                 pathLoop('users');
//                 i++;
//             }
//         }else{
//             pathLoop('users');
//             console.log('false');
//         }
//     }


    // savedPaths[0] = solidArray[0];

    // await pathLoop(savedPaths[0]);
    // makeArray();
    // savedPaths[1] = solidArray;
    //================================================

    // await pathLoop('users');

    // makeArray(true);
    // await pathLoop(solidArray[start]);
    // await makeArray();
    // addToArray(start, start+1);

    //================================================
    // await pathLoop('users');
    // makeArray();
    // firstLevel = new ChildArray(solidArray[0], '');

    // await pathLoop(firstLevel.parent);
    // makeArray();
    // firstLevel.child = solidArray;

    // for(var i=0; i<=savedPaths[1].length; i++){

    // }




// }
    
var savedPaths = {
    '0':0,
};


function ChildArray(parent, child){
    var obj = {parent: parent, child: child }
    return obj;
}



// function ArrayMe(old, arr1, arr2){
//    var meArray = [[arr1], [arr2]];
//    return meArray;
// }


// [
//     [
//       "users/-LacInJMVULfIgn9aGeX"
//     ],
//     [
//       [
//         "users/-LacInJMVULfIgn9aGeX/email",
//         "users/-LacInJMVULfIgn9aGeX/friends",
//         "users/-LacInJMVULfIgn9aGeX/friendsPinned",
//         "users/-LacInJMVULfIgn9aGeX/requests",
//         "users/-LacInJMVULfIgn9aGeX/status"
//       ]
//     ]
//   ]




    //     endArray = [];
    //     for(let i=0; i< arrayOfVal.length; i++){
    //         endArray.push(arrayForPath[i].o[arrayForPath[i].o.length-1])
    //         // console.log('arrayForPath end: ', arrayForPath[0].o[i]);

    //     }

    //     for(let i=0; i<=endArray.length; i++){
    //         if(endArray[i]==node){
    //             savedPos=i;
    //         }
    //     }



    // });

    
    // return new Promise((resolve)=>{
    //     resolve(arrayOfVal);
    //     console.log('strungArray', strungArray);
    // });



var snap;
async function takeInPath(path){
    arrayForPath=[], arrayOfVal=[], strungArray=[];
    let refMe = await db.ref(path).once('value')
    .then((snapshot)=>{
        snap = snapshot.A.B;
        console.log('snap', snap);
    });
}