

function readfile(){
    console.log('readfile entered')
    return new Promise(function a(res,rej){
        setTimeout(function(){
            console.log('timeout readfile resolved')
            res(true);
        },2000)
    })
}

function writefile(){
    console.log('writefile entered')
    return new Promise(function b(res,rej){
         setTimeout(function(){
            console.log('timeout writefile resolved')
            res(true);
        },2000)
    })
    
}

function uploadfile(){
    console.log('uploadfile entered')
    return new Promise(function c(res,rej){
         setTimeout(function(){
            console.log('timeout uploadfile resolved')
            res(true);
        },2000)
    })
    
}
s1=readfile().then(function(data){
    console.log(data)
    return writefile()
})

s2=s1.then(function(data){
     console.log(data)
    return uploadfile()
})

s3 =  s2.then(function(data){
     console.log(data)
})


readfile().then(function(data){
     console.log(data)
    return writefile()
}).then(function(data){
     console.log(data)
   return uploadfile()
}).then(function(data){
     console.log(data)
})
