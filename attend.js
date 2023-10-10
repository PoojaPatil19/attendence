 var count=document.getElementById("count")
  var record=document.getElementById("record")
 var num=0

  function attend(){   //using funtion
     num+=1
    count.innerHTML=num
  }
// var attend=()=>{       //using arrow function
//     num+=1
//     count.innerHTML=num
// }

function save(){
     record.innerHTML += `${num} - `
    num=0
     count.innerHTML=num
}
