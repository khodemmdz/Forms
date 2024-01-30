// Btn Click Sign In To Sign Up
function hidderSigIn(){
    if (hidderSigIn){
        document.getElementById("DisPlayDwonIn").style.display = "none";
        document.getElementById("DisPlayDwonInBtn1").style.display = "block";
        document.getElementById("DisPlayDwonUp").style.display = "block";
        document.getElementById("DisPlayDwonInBtn2").style.display = "none";
    }
}

// Btn Click Sign Up To Sign In
function hidderSigUp(){
    if (hidderSigUp){
        document.getElementById("DisPlayDwonUp").style.display = "none";
        document.getElementById("DisPlayDwonInBtn2").style.display = "block";
        document.getElementById("DisPlayDwonIn").style.display = "block";
        document.getElementById("DisPlayDwonInBtn1").style.display = "none";
    }
}

// Click Back Side Sign Up
function hidderSigIn2(){
    if (hidderSigIn2){
        document.getElementById("DisPlayDwonUp").style.display = "none";
        document.getElementById("DisPlayDwonInBtn1").style.display = "none";
        document.getElementById("DisPlayDwonIn").style.display = "block";
        document.getElementById("DisPlayDwonInBtn2").style.display = "block";
    }
}

// Click Back Side Sign In
function hidderSigUp2(){
    if (hidderSigUp2){
        document.getElementById("DisPlayDwonIn").style.display = "none";
        document.getElementById("DisPlayDwonInBtn2").style.display = "none";
        document.getElementById("DisPlayDwonUp").style.display = "block";
        document.getElementById("DisPlayDwonInBtn1").style.display = "block";
    }
}