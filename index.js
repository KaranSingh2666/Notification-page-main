
const allrdbtn = document.getElementById("allrdbtn")
const ns1 = document.getElementById("ns1")
const ns2 = document.getElementById("ns2")
const ns3 = document.getElementById("ns3")
const d1 = document.getElementById("d1")
const d2 = document.getElementById("d2")
const d3 = document.getElementById("d3")
let no = document.getElementById("no");

allrdbtn.onclick=()=> {
    no.innerText=0;
    ns1.style.backgroundColor="white";
    ns2.style.backgroundColor="white";
    ns3.style.backgroundColor="white";
    d1.style.display="none";
    d2.style.display="none";
    d3.style.display="none";
}

function singleclick1() {
    if ( no.innerText <= 0) {
        return
    } else {
        no.innerText--;
        ns1.style.backgroundColor="white";
        d1.style.display="none";
        
    }
ns1.onclick=()=> {return};
    
}


function singleclick2() {
    if ( no.innerText <= 0) {
        return
    } else {
        no.innerText--;
        ns2.style.backgroundColor="white";
        d2.style.display="none";
        
    }
ns2.onclick=()=> {return};
    
}
function singleclick3() {
    if ( no.innerText <= 0) {
        return
    } else {
        no.innerText--;
        ns3.style.backgroundColor="white";
        d3.style.display="none";
        
    }
ns3.onclick=()=> {return};
    
}


ns1.onclick=()=> singleclick1();
ns2.onclick=()=> singleclick2();
ns3.onclick=()=> singleclick3();