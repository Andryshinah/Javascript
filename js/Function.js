
document.querySelector("#play").addEventListener("click",function (){
    // console.log("ok")
    document.querySelector("#audio").play()
    document.querySelector("#play").addEventListener('dblclick',function (){
        // console.log("ok")
        document.querySelector("#audio").pause()
    })
})


document.querySelector("#pause").addEventListener("click",function (){
    // console.log("ok")
    document.querySelector("#audio").pause()
})
document.querySelector("#stop").addEventListener("click",function (){
    // console.log("ok")
    document.querySelector("#audio").pause()
    document.querySelector("#audio").currentTime=0

})

function Time()
{
   let timeduree=document.querySelector("#audio").duration;
   let formatTimeMin=parseInt(timeduree/60)
   let formatTimeSec=parseInt(formatTimeMin/60)
   document.querySelector("#duree").innerHTML=formatTimeMin + ":" +formatTimeSec
}

   


   

