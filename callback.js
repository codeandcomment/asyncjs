

function readfile(data,callBack){
    console.log('readfile entered ' + data)
        setTimeout(function(){
            console.log('timeout readfile resolved')
            callBack?.('FileData');
        },2000)
}

function writefile(data,callBack){
    console.log('writefile entered ' + data)
         setTimeout(function(){
            console.log('timeout writefile resolved')
            callBack?.('Written Data');
        },2000)

}

function uploadfile(data,callBack){
    console.log('uploadfile entered ' +data)
         setTimeout(function(){
            console.log('timeout uploadfile resolved')
             callBack?.('Uploaded');
        },2000)
    
}

readfile('test.txt',function handledata(readData){
    writefile(readData,function handleWriteData(writeData){
        uploadfile(writeData,function(uploadedData){
            console.log(uploadedData)
        })
    })
})
