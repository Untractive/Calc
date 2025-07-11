let ff = document.getElementById("input")
let b = document.querySelectorAll("button")
  
let a = Array.from(b)

let d =''

a.forEach(f=>{
    
f.addEventListener("click",function(e){
    console.log(e.target.innerHTML)

    

    if(e.target.innerHTML == 'DEL'){
        d= d.substring(0,d.length-1)
        ff.value=d
    }

    else if(e.target.innerHTML == 'AC'){
        d=""
        ff.value=d
    }

    else if(e.target.innerHTML == '='){
        d=eval(d)
     ff.value=d
    }

    else
    {
    d+=e.target.innerHTML
    ff.value=d
    }
   
})
})

