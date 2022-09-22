function cambio(){
    var bol=6.97;
    var re;
    var pe=parseFloat(document.getElementById('bol').value,10);
    re=pe*bol;
    document.getElementById('resul').innerHTML=re;
}
