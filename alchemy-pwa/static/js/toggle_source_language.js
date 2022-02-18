// Add ability to toggle on/off display of the original source language
function ShowHideDiv(chkRussian) {
    var divRussian = document.getElementsByClassName('divRussian');
    for (let i = 0; i < divRussian.length; i++){
        divRussian[i].style.display = chkRussian.checked ? "block" : "none"; 
    }
}
