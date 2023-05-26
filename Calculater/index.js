function clk(val){
    if (val === 'rot') {
        document.getElementById("screen").value=Math.sqrt(document.getElementById("screen").value);
    } else if (val === 'power'){
        document.getElementById("screen").value=Math.pow(document.getElementById("screen").value, 2);
    }
    else if (val === 'power3'){
        document.getElementById("screen").value=Math.pow(document.getElementById("screen").value, 3);
    }
    else {
        document.getElementById("screen").value=document.getElementById("screen").value+val;
    }
    
}

function clrdisp(){
    document.getElementById("screen").value=""
}
function eql(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result
}