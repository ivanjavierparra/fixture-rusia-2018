var json;

$( document ).ready(function(){
    $.getJSON("http://127.0.0.1/fixture-rusia-2018/cargar-datos.php", function(result){
        json = result;
    });
});

function partidos(id) {
    switch (id){
        case 'grupo-a':
            $("#titulo-modal").append(" Grupo A");
            $("#imagen_local_1").prop("src","static/img/banderas/Argentina.png");
            $('#nombre_local_1').text("ARGENTINA");
            for (var i = 0; i < 8; i++){
                console.log(json[0].partidos[1]);
            }
            break;
        case 'grupo-b':
            $("#titulo-modal").append(" Grupo B");
            //con un for itero sobre los partidos del grupo a y voy modificando el modal
            break;
        case 'grupo-c':
            $("#titulo-modal").append(" Grupo C");
            //con un for itero sobre los partidos del grupo a y voy modificando el modal
            break;
        case 'grupo-d':
            $("#titulo-modal").append(" Grupo D");
            //con un for itero sobre los partidos del grupo a y voy modificando el modal
            break;
        case 'grupo-E':
            $("#titulo-modal").append(" Grupo E");
            //con un for itero sobre los partidos del grupo a y voy modificando el modal
            break;
        case 'grupo-f':
            $("#titulo-modal").append(" Grupo F");
            //con un for itero sobre los partidos del grupo a y voy modificando el modal
            break;
        case 'grupo-g':
            $("#titulo-modal").append(" Grupo G");
            //con un for itero sobre los partidos del grupo a y voy modificando el modal
            break;
        case 'grupo-h':
            $("#titulo-modal").append(" Grupo H");
            //con un for itero sobre los partidos del grupo a y voy modificando el modal
            break;
    }
    $("#modal-partidos").modal();
}