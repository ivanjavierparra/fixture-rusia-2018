$("#btn-tabla-octavos").click(function() {
                
    $("#tabla-octavos").show();
    $("#tabla-cuartos").hide();
    $("#tabla-semis").hide();
    $("#tabla-final").hide();

});

$("#btn-tabla-cuartos").click(function() {

    $("#tabla-octavos").hide();
    $("#tabla-cuartos").show();
    $("#tabla-semis").hide();
    $("#tabla-final").hide();

});

$("#btn-tabla-semis").click(function() {

    $("#tabla-octavos").hide();
    $("#tabla-cuartos").hide();
    $("#tabla-semis").show();
    $("#tabla-final").hide();

});

$("#btn-tabla-final").click(function() {

    $("#tabla-octavos").hide();
    $("#tabla-cuartos").hide();
    $("#tabla-semis").hide();
    $("#tabla-final").show();

}); 

function verinputsphone (id){
    console.log("Hola Mundo");
}
