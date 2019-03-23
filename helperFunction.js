var arrayForPath=[], arrayOfVal=[], me;
var strungArray=[];
var tmp;
var db = firebase.database();
var refMe;
var tmpStringFalse="";
var tmpStringTrue="";
var solidArray = [];
var i=0;
async function pathSearch(path, node){
    // spits out next node in tree of paths

    // arrayForPath=[], arrayOfVal=[], strungArray=[];
    await db.ref(path).once('value')
    .then((snapshot)=>{
        snapshot.forEach((el)=>{
            me = el;
            // var tmp = el.val();
            arrayForPath.push(el.ref.path);
            arrayOfVal.push(el.val());
            solidArray=arrayForPath;
        });
    });
    console.log('arrayForPath', arrayForPath);
            
        for(var i=0;i<= arrayForPath.length && i<=10; i++){
            for(var j=0; j<arrayForPath[i].o.length; j++){
                // console.log(arrayForPath[0].o)
                // console.log('stringMe', arrayForPath[0].o[i]);//arrayForPath[0].o.length-1

                console.log('arrayForPath', arrayForPath[i].o[j]);


                if(arrayForPath[i].o[j]==node){
                    console.log('true!');
                    
                    tmpStringTrue="";
                    // for (let i = 0; i < arrayOfVal.length-1; i++) {
                        tmpStringTrue= arrayForPath[0].o.join('/');
                    // }
                    console.log('final path(tmpStringTrue): ', tmpStringTrue);
                    return tmpStringTrue; 
                }else{
                    console.log('false', );
                    tmpStringFalse=""
                    // for (let i = 0; i < arrayOfVal.length; i++) {
                    tmpStringFalse=arrayForPath[0].o.join('/');
                    // }
                    // pathSearch(tmpStringFalse, node);
                // }

                }   

            }

        }
        console.log('arrayForPath', arrayForPath);
        console.log('arrayOfVal', arrayOfVal); 
}

async function pathStatic(path){
    arrayForPath=[], arrayOfVal=[], strungArray=[];
    await db.ref(path).once('value')
    .then((snapshot)=>{
        snapshot.forEach((el)=>{
            me = el;
            // var tmp = el.val();
            arrayForPath.push(el.ref.path);
            arrayOfVal.push(el.val());
            for (let i = 0; i < arrayOfVal.length; i++) {
                tmpStringTrue= (arrayForPath[i].o.join('/'));
            }
            console.log('pathStatic: ', tmpStringTrue );
        });
    });
}





    // let refMe = await db.ref(path).once('value')
    // .then((snapshot)=>{
    //     snapshot.forEach((el)=>{
    //         me = el;
    //         // var tmp = el.val();
    //         arrayForPath.push(el.ref.path);
    //         arrayOfVal.push(el.val());
    //     });
    //     console.log('arrayForPath', arrayForPath);
    //     console.log('arrayOfVal', arrayOfVal);
    // })
    // .then(()=>{
    //     for (let i = 0; i < arrayOfVal.length; i++) {
    //         strungArray.push(arrayForPath[i].o.join('/'));
    //     }

    // });

    
    // return new Promise((resolve)=>{
    //     resolve(arrayOfVal);
    //     console.log('strungArray', strungArray);
    // });

// }
