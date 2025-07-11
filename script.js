
 var d =''
 function clear1()
 {
     d=''
     document.getElementById('input').value=d
     console.log(d)
    }
    function dele()
    {
        
        d= d.substring(0,d.length-1)
        document.getElementById('input').value=d
        console.log(d)
    }
    
display=(f)=>
{
    d+=f;
    document.getElementById('input').value=d
    console.log(d)
}
function calc()
{
    
    d= eval(d)
    document.getElementById('input').value=d
}


