/*-------- OJOS DEL HIJO ---------*/

var colorOjosHijoOscuro=0;
var colorOjosHijoClaro=0;

function ojosHijo(){

    var ojosMios = document.getElementsByName("ojosMios");
    var ojosMamaMia = document.getElementsByName("ojosMamaMia");
    var ojosPapaMio = document.getElementsByName("ojosPapaMio");
    var ojosPareja = document.getElementsByName("ojosPareja");
    var ojosMadrePareja = document.getElementsByName("ojosMadrePareja");
    var ojosPadrePareja = document.getElementsByName("ojosPadrePareja");

/**
 * ojosMios[0].checked == true --> significa que se seleccionó el color de ojos "claro"
 * ojosMios[1].checked == true --> significa que se seleccionó el color de ojos "oscuro"
 **/

    var selecOjosMiosClaros= ojosMios[0].checked == true;

    var selecOjosMamaMiaClaros= ojosMamaMia[0].checked == true;

    var selecOjosPapaMioClaros= ojosPapaMio[0].checked == true;

    var selecOjosParejaClaros= ojosPareja[0].checked == true;

    var selecOjosMadreParejaClaros= ojosMadrePareja[0].checked == true;

    var selecOjosPadreParejaClaros= ojosPadrePareja[0].checked == true;

    var claro=0;

    if(selecOjosMiosClaros){
        claro=claro+1;
    }

    if(selecOjosMamaMiaClaros){
        claro=claro+1;
    }

    if(selecOjosPapaMioClaros){
        claro=claro+1;
    }

    if(selecOjosParejaClaros){
        claro=claro+1;
    }

    if(selecOjosMadreParejaClaros){
        claro=claro+1;
    }

    if(selecOjosPadreParejaClaros){
        claro=claro+1;
    }


    if(claro==6){
       return "¡Bien! <br> Probablemente tu hijo/a tiene/tendrá los <br> <span class='powderblue'>ojos claros</span> <br><br>"+
       "<i class='fas fa-eye fa-2x ojosClaros'></i> " +
       "<br><br> <b class='w3-text-deep-purple'> Probabilidad </b>"+
       "<br> <span class='w3-xlarge'>Ojos claros: 100% <br> Ojos oscuros: 0%</span>" 
    }

    if(claro==5){
        return "¡Bien! <br> Probablemente tu hijo/a tiene/tendrá los <br> <span class='powderblue'>ojos claros</span> <br><br>"+ 
        "<i class='fas fa-eye fa-2x ojosClaros'></i> " +
        "<br><br> <b class='w3-text-deep-purple'> Probabilidad </b>"+
        "<br> <span class='w3-xlarge'>Ojos claros: 83% <br> Ojos oscuros: 17%</span>" 
    }

    if(claro==4){
        return "¡Bien! <br> Probablemente tu hijo/a tiene/tendrá los <br> <span class='powderblue'>ojos claros</span> <br><br>"+
        "<i class='fas fa-eye fa-2x ojosClaros'></i> " +
        "<br><br> <b class='w3-text-deep-purple'> Probabilidad </b>"+
        "<br> <span class='w3-xlarge'>Ojos claros: 67% <br> Ojos oscuros: 33%</span>" 
    }

    if(claro==3){
        return "¡Bien! <br> Tu hijo/a podría tener cualquiera de las dos tonalidades <br><br>"+
        "<i class='fas fa-eye fa-2x ojosClaros w3-margin'></i> <i class='fas fa-eye fa-2x ojosOscuros'></i> " +
        "<br><br> <b class='w3-text-deep-purple'> Probabilidad </b>" +
        "<br> <span class='w3-xlarge'> Ojos claros: 50% <br> Ojos oscuros: 50%</span>" 
    }

    if(claro==2){
        return "¡Bien! <br> Probablemente tu hijo/a tiene/tendrá los <br> <span class='saddlebrown'>ojos oscuros</span> <br><br>"+  
        "<i class='fas fa-eye fa-2x ojosOscuros'></i> " +
        "<br><br> <b class='w3-text-deep-purple'> Probabilidad </b>"+
        "<br><span class='w3-xlarge'> Ojos oscuros: 67% <br> Ojos claros: 33%<span>" 
    }

    if(claro==1){
        return "¡Bien! <br> Probablemente tu hijo/a tiene/tendrá los <br> <span class='saddlebrown'>ojos oscuros</span><br><br>"+
        "<i class='fas fa-eye fa-2x ojosOscuros'></i> " +
        "<br><br> <b class='w3-text-deep-purple'> Probabilidad </b>"+
        "<br> <span class='w3-xlarge'>Ojos oscuros: 83% <br> Ojos claros: 17%<span>" 
    }

   
    if(claro==0){
        return "¡Bien! <br> Probablemente tu hijo/a tiene/tendrá los <br> <span class='saddlebrown'>ojos oscuros</span><br><br>" +
        "<i class='fas fa-eye fa-2x ojosOscuros'></i> " +
        "<br><br> <b class='w3-text-deep-purple'> Probabilidad </b> "+
        "<br> <span class='w3-xlarge'>Ojos oscuros: 100% <br> Ojos claros: 0%<span>" 
    }

}


/*----- RESULTADO -----*/
function mostrarResultado() {

    var ojosMios = document.getElementsByName("ojosMios");
    var ojosMamaMia = document.getElementsByName("ojosMamaMia");
    var ojosPapaMio = document.getElementsByName("ojosPapaMio");
    var ojosPareja = document.getElementsByName("ojosPareja");
    var ojosMadrePareja = document.getElementsByName("ojosMadrePareja");
    var ojosPadrePareja = document.getElementsByName("ojosPadrePareja");

    if((ojosMios[0].checked == true || ojosMios[1].checked == true) && 
        (ojosMamaMia[0].checked == true || ojosMamaMia[1].checked == true) &&
        (ojosPapaMio[0].checked == true || ojosPapaMio[1].checked == true) &&
        (ojosPareja[0].checked == true || ojosPareja[1].checked == true) &&
        (ojosMadrePareja[0].checked == true || ojosMadrePareja[1].checked == true) &&
        (ojosPadrePareja[0].checked == true || ojosPadrePareja[1].checked == true)){

            resultado="<h3>"+ ojosHijo()+ "</h3> <br><button onclick='location.reload()' class='w3-btn w3-border-deep-purple w3-deep-purple w3-bottombar w3-leftbar w3-rightbar w3-topbar w3-round-xlarge w3-hover-opacity w3-xlarge'>Volver a empezar</button>";
    
            document.getElementById("inicio").style.display = "none";
            document.getElementById("preguntas").style.display = "none";
            document.getElementById("resultado").innerHTML=resultado;
    }else{
        Swal.fire({
            text: 'Te falta seleccionar alguna respuesta',
            icon: 'error',
            confirmButtonText: 'Ok!'
          })
    }
  
}

