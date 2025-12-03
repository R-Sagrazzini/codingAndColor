function elabora() {
    let a = document.getElementById("inNumber").value;
    a = a.includes(".") ? a.replaceAll("." , ",") : a;
    let arrayColore = a.split(",");
    for (let i = 0; i < arrayColore.length; i++){
        if (isNaN(arrayColore[i])){
            document.getElementById("errText").style.color = "red";
            document.getElementById("errText").innerHTML = ("Errore: Inserire un numero nella posizione " + (i+1));
            annullaNumber();
            return;
        }
        else if (arrayColore[i] < 0){
            document.getElementById("errText").style.color = "red";
            document.getElementById("errText").innerHTML = ("Errore: Inserire un numero positivo nella posizione " + (i+1));
            annullaNumber();
            return;
        }
        else if (arrayColore[i] > 255){
            document.getElementById("errText").style.color = "red";
            document.getElementById("errText").innerHTML = ("Errore: Inserire un numero compreso tra 0 e 255 nella posizione " + (i+1));
            annullaNumber();
            return;
        }
        else if (arrayColore.length !== 3){
            document.getElementById("errText").style.color = "red";
            document.getElementById("errText").innerHTML = ("Errore: Inserire tre numeri separati da virgola");
            annullaNumber();
            return;
        }
    }

}
function annulla(){
    document.getElementById("inNumber").value = "";
    document.getElementById("inText").value = "";
}
function annullaNumber(){
    document.getElementById("inNumber").value = "";
}
function data(){
    document.getElementById("data").innerHTML = Date();
}