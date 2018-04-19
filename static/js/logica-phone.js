var id_semis_left_phone = "";
var id_semis_right_phone = "";

$("#btn-tabla-Octavos").click(function() {
                
    $("#tabla-Octavos").show();
    $("#tabla-Cuartos").hide();
    $("#tabla-Semis").hide();
    $("#tabla-Final").hide();

});

$("#btn-tabla-Cuartos").click(function() {

    $("#tabla-Octavos").hide();
    $("#tabla-Cuartos").show();
    $("#tabla-Semis").hide();
    $("#tabla-Final").hide();

});

$("#btn-tabla-Semis").click(function() {

    $("#tabla-Octavos").hide();
    $("#tabla-Cuartos").hide();
    $("#tabla-Semis").show();
    $("#tabla-Final").hide();

});

$("#btn-tabla-Final").click(function() {

    $("#tabla-Octavos").hide();
    $("#tabla-Cuartos").hide();
    $("#tabla-Semis").hide();
    $("#tabla-Final").show();

}); 

        function verinputsphone(id){
                if (!hayEquipo(id))return;
                switch(id){
                        case 'phone-octavos-left-0':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-left-1"))return;
                                validarinputs("phone-octavos-left-1");
                                computar_ganador_phone("phone-octavos-left-0","phone-octavos-left-1","phone-cuartos-left-0"); //verifico si el otro input tiene un valor correcto.
                                break;
                        case 'phone-octavos-left-1':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-left-0"))return;
                                validarinputs("phone-octavos-left-0");
                                computar_ganador_phone("phone-octavos-left-0","phone-octavos-left-1","phone-cuartos-left-0");
                                break;
                        case 'phone-octavos-left-2':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-left-3"))return;
                                validarinputs("phone-octavos-left-3");
                                computar_ganador_phone("phone-octavos-left-2","phone-octavos-left-3","phone-cuartos-left-1");
                                break;
                        case 'phone-octavos-left-3':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-left-2"))return;
                                validarinputs("phone-octavos-left-2");
                                computar_ganador_phone("phone-octavos-left-2","phone-octavos-left-3","phone-cuartos-left-1");
                                break;
                        case 'phone-octavos-left-4':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-left-5"))return;
                                validarinputs("phone-octavos-left-5");
                                computar_ganador_phone("phone-octavos-left-4","phone-octavos-left-5","phone-cuartos-left-2");
                                break;
                        case 'phone-octavos-left-5':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-left-4"))return;
                                validarinputs("phone-octavos-left-4");
                                computar_ganador_phone("phone-octavos-left-4","phone-octavos-left-5","phone-cuartos-left-2");
                                break;
                        case 'phone-octavos-left-6':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-left-7"))return;
                                validarinputs("phone-octavos-left-7");
                                computar_ganador_phone("phone-octavos-left-6","phone-octavos-left-7","phone-cuartos-left-3");
                                break;
                        case 'phone-octavos-left-7':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-left-6"))return;
                                validarinputs("phone-octavos-left-6");
                                computar_ganador_phone("phone-octavos-left-6","phone-octavos-left-7","phone-cuartos-left-3");
                                break;
                        case 'phone-octavos-right-0':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-right-1"))return;
                                validarinputs("phone-octavos-right-1");
                                computar_ganador_phone("phone-octavos-right-0","phone-octavos-right-1","phone-cuartos-right-0");
                                break;
                        case 'phone-octavos-right-1':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-right-0"))return;
                                validarinputs("phone-octavos-right-0");
                                computar_ganador_phone("phone-octavos-right-0","phone-octavos-right-1","phone-cuartos-right-0");        
                                break;
                        case 'phone-octavos-right-2':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-right-3"))return;
                                validarinputs("phone-octavos-right-3");
                                computar_ganador_phone("phone-octavos-right-2","phone-octavos-right-3","phone-cuartos-right-1");
                                break;
                        case 'phone-octavos-right-3':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-right-2"))return;
                                validarinputs("phone-octavos-right-2");
                                computar_ganador_phone("phone-octavos-right-2","phone-octavos-right-3","phone-cuartos-right-1");        
                                break;
                        case 'phone-octavos-right-4':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-right-5"))return;
                                validarinputs("phone-octavos-right-5");
                                computar_ganador_phone("phone-octavos-right-4","phone-octavos-right-5","phone-cuartos-right-2");
                                break;
                        case 'phone-octavos-right-5':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-right-4"))return;
                                validarinputs("phone-octavos-right-4");
                                computar_ganador_phone("phone-octavos-right-4","phone-octavos-right-5","phone-cuartos-right-2");        
                                break;
                        case 'phone-octavos-right-6':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-right-7"))return;
                                validarinputs("phone-octavos-right-7");
                                computar_ganador_phone("phone-octavos-right-6","phone-octavos-right-7","phone-cuartos-right-3");
                                break;
                        case 'phone-octavos-right-7':
                                validarinputs(id);
                                if (!hayEquipo("phone-octavos-right-6"))return;
                                validarinputs("phone-octavos-right-6");
                                computar_ganador_phone("phone-octavos-right-6","phone-octavos-right-7","phone-cuartos-right-3");
                                break;
                        case 'phone-cuartos-left-0':
                                validarinputs(id);
                                if (!hayEquipo("phone-cuartos-left-1"))return;
                                validarinputs("phone-cuartos-left-1");
                                computar_ganador_phone("phone-cuartos-left-0","phone-cuartos-left-1","phone-semis-left-0");        
                                break;
                        case 'phone-cuartos-left-1':
                                validarinputs(id);
                                if (!hayEquipo("phone-cuartos-left-0"))return;
                                validarinputs("phone-cuartos-left-0");
                                computar_ganador_phone("phone-cuartos-left-0","phone-cuartos-left-1","phone-semis-left-0");        
                                break;
                        case 'phone-cuartos-left-2':
                                validarinputs(id);
                                if (!hayEquipo("phone-cuartos-left-3"))return;
                                validarinputs("phone-cuartos-left-3");
                                computar_ganador_phone("phone-cuartos-left-2","phone-cuartos-left-3","phone-semis-left-1");
                                break;
                        case 'phone-cuartos-left-3':
                                validarinputs(id);
                                if (!hayEquipo("phone-cuartos-left-2"))return;
                                validarinputs("phone-cuartos-left-2");
                                computar_ganador_phone("phone-cuartos-left-2","phone-cuartos-left-3","phone-semis-left-1");
                                break;
                        case 'phone-cuartos-right-0':
                                validarinputs(id);
                                if (!hayEquipo("phone-cuartos-right-1"))return;
                                validarinputs("phone-cuartos-right-1");
                                computar_ganador_phone("phone-cuartos-right-0","phone-cuartos-right-1","phone-semis-right-0");        
                                break;
                        case 'phone-cuartos-right-1':
                                validarinputs(id);
                                if (!hayEquipo("phone-cuartos-right-0"))return;
                                validarinputs("phone-cuartos-right-0");
                                computar_ganador_phone("phone-cuartos-right-0","phone-cuartos-right-1","phone-semis-right-0");        
                                break;
                        case 'phone-cuartos-right-2':
                                validarinputs(id);
                                if (!hayEquipo("phone-cuartos-right-3"))return;
                                validarinputs("phone-cuartos-right-3");
                                computar_ganador_phone("phone-cuartos-right-2","phone-cuartos-right-3","phone-semis-right-1");        
                                break;
                        case 'phone-cuartos-right-3':
                                validarinputs(id);
                                if (!hayEquipo("phone-cuartos-right-2"))return;
                                validarinputs("phone-cuartos-right-2");
                                computar_ganador_phone("phone-cuartos-right-2","phone-cuartos-right-3","phone-semis-right-1");        
                                break;
                        case 'phone-semis-left-0':
                                validarinputs(id);
                                if (!hayEquipo("phone-semis-left-1"))return;
                                validarinputs("phone-semis-left-1");
                                computar_ganador_phone_2("phone-semis-left-0","phone-semis-left-1","phone-final-0","phone-3puesto-0");        
                                break;
                        case 'phone-semis-left-1':
                                validarinputs(id);
                                if (!hayEquipo("phone-semis-left-0"))return;
                                validarinputs("phone-semis-left-0");
                                computar_ganador_phone_2("phone-semis-left-0","phone-semis-left-1","phone-final-0","phone-3puesto-0");        
                                break;
                        case 'phone-semis-right-0':
                                validarinputs(id);
                                if (!hayEquipo("phone-semis-right-1"))return;
                                validarinputs("phone-semis-right-1");
                                computar_ganador_phone_2("phone-semis-right-0","phone-semis-right-1","phone-final-1","phone-3puesto-1");        
                                break;
                        case 'phone-semis-right-1':
                                validarinputs(id);
                                if (!hayEquipo("phone-semis-right-0"))return;
                                validarinputs("phone-semis-right-0");
                                computar_ganador_phone_2("phone-semis-right-0","phone-semis-right-1","phone-final-1","phone-3puesto-1");
                                break;  
                        case 'phone-final-0':
                                validarinputs(id);
                                if (!hayEquipo("phone-final-1"))return;
                                validarinputs("phone-final-1");
                                final_phone("phone-final-0","phone-final-1");
                                break;
                        case 'phone-final-1':
                                validarinputs(id);
                                if (!hayEquipo("phone-final-0"))return;
                                validarinputs("phone-final-0");
                                final_phone("phone-final-0","phone-final-1");
                                break;
                        case 'phone-3puesto-0':
                                validarinputs(id);
                                if (!hayEquipo("phone-3puesto-1"))return;
                                validarinputs("phone-3puesto-1");
                                tercer_puesto_phone("phone-3puesto-0","phone-3puesto-1");
                                break;
                        case 'phone-3puesto-1':
                                validarinputs(id);
                                if (!hayEquipo("phone-3puesto-0"))return;
                                validarinputs("phone-3puesto-0");
                                tercer_puesto_phone("phone-3puesto-0","phone-3puesto-1");
                                break;
                }
            }



                function computar_ganador_phone(id_equipo1,id_equipo2,id_posicion){
                    var selector_equipo1 = "#" + id_equipo1;
                    var selector_equipo2 = "#" + id_equipo2;
                    var selector_posicion = "#" + id_posicion;
                    var goles_equipo1 = parseInt($(selector_equipo1).val());
                    var goles_equipo2 = parseInt($(selector_equipo2).val());
         
                    /* desktop */
                    var selector_desktop_equipo_1 = "#" + id_equipo1.substr(6);
                    var selector_desktop_equipo_2 = "#" + id_equipo2.substr(6);
                    $(selector_desktop_equipo_1).val($(selector_equipo1).val());
                    $(selector_desktop_equipo_2).val($(selector_equipo2).val());
                    /* fin desktop */
                    
                    if ( goles_equipo1 > goles_equipo2 ){ //ganó equipo1.
                         pasarganador_phone(id_equipo1,id_posicion);
                         arreglar_fixture_ganador(id_equipo1);
                    }
                    else if  ( goles_equipo1 < goles_equipo2 ){ //ganó equipo2.
                         pasarganador_phone(id_equipo2,id_posicion);
                         arreglar_fixture_ganador(id_equipo2);
                    }
                    else{ //empataron.
                         pasarganador_phone("",id_posicion);
                         ocultarImagenPosiciones();
                        if ((id_equipo1.indexOf("octavos") > -1) || (id_equipo1.indexOf("cuartos") > -1)){
                                arreglar_fixture_empate(id_equipo1);
                        }
                    }
                }


                function pasarganador_phone(id_input,id_posicion){
                    var id_span_posicion = "#equipo-"+id_posicion;
                    var id_img_posicion = "#bandera-"+id_posicion;

                    /* desktop */
                    var selector_desktop_span2 = "#equipo-" + id_posicion.substr(6);
                    var selector_desktop_img2 = "#bandera-" + id_posicion.substr(6);
                    /* fin desktop */
    
                    if(id_input!=""){
                            var id_span1 = "#equipo-"+id_input;
                            var id_img1 = "#bandera-"+id_input;
                            var selector_imagen = "" + $(id_img1).attr('src') + "";
                                                    
                            $(id_span_posicion).html($(id_span1).html());
                            $(id_img_posicion).attr("src",selector_imagen);
    
                            /* desktop */
                            $(selector_desktop_span2).html($(id_span1).html());
                            $(selector_desktop_img2).attr("src",selector_imagen);
                            /* fin desktop */
                            
                    }else{
                            if (id_posicion.charAt(id_posicion.length-1)%2==0){
                                    $(id_span_posicion).html("Equipo 1");
                                    $(id_img_posicion).attr("src","http://localhost/fixture/static/img/sinbandera.jpg");
    
                                    /* desktop */
                                    $(selector_desktop_span2).html("Equipo 1");
                                    $(selector_desktop_img2).attr("src","http://localhost/fixture/static/img/sinbandera.jpg");
                                    /* fin desktop */
                            }
                            else{
                                    $(id_span_posicion).html("Equipo 2");
                                    $(id_img_posicion).attr("src","http://localhost/fixture/static/img/sinbandera.jpg");
                                    
                                    /* desktop */
                                    $(selector_desktop_span2).html("Equipo 2");
                                    $(selector_desktop_img2).attr("src","http://localhost/fixture/static/img/sinbandera.jpg");
                                    /* fin desktop */
                            }
                    }
            }

            function computar_ganador_phone_2(id_equipo1,id_equipo2,id_posicion1,id_posicion2){
                var selector_equipo1 = "#" + id_equipo1;
                var selector_equipo2 = "#" + id_equipo2;
                var goles_equipo1 = parseInt($(selector_equipo1).val());
                var goles_equipo2 = parseInt($(selector_equipo2).val());
     
                /* desktop */
                var selector_desktop_equipo_1 = "#" + id_equipo1.substr(6);
                var selector_desktop_equipo_2 = "#" + id_equipo2.substr(6);
                $(selector_desktop_equipo_1).val($(selector_equipo1).val());
                $(selector_desktop_equipo_2).val($(selector_equipo2).val());
                /* fin desktop */
     
                if ( goles_equipo1 > goles_equipo2 ){
                     pasarganador_phone(id_equipo1,id_posicion1);
                     pasarganador_phone(id_equipo2,id_posicion2);
                     //si noto que en la misma llave en semis cambio el ganador, lo que hago es ocultar las imagenes de los ganadores.
                     if(id_equipo1.indexOf("left") > -1){
                        if(id_semis_left_phone=="")id_semis_left_phone = id_equipo1;
                                else{
                                        if(id_equipo1 != id_semis_left_phone){
                                                id_semis_left_phone = id_equipo1;
                                                ocultarImagenPosiciones();
                                        }
                                }
                        
                        }else{//semis-right
                                if(id_semis_right_phone == "")id_semis_right_phone = id_equipo1;
                                else{
                                        if(id_equipo1 != id_semis_right_phone){
                                                id_semis_right_phone = id_equipo1;
                                                ocultarImagenPosiciones();
                                        }
                                }
                        }
                     
                }
                else if  ( goles_equipo1 < goles_equipo2 ){
                     pasarganador_phone(id_equipo2,id_posicion1);
                     pasarganador_phone(id_equipo1,id_posicion2);
                     //si noto que en la misma llave en semis cambio el ganador, lo que hago es ocultar las imagenes de los ganadores.
                     if(id_equipo2.indexOf("left") > -1){
                        if(id_semis_left_phone=="")id_semis_left_phone = id_equipo2;
                        else{
                                if(id_equipo2 != id_semis_left_phone){
                                        id_semis_left_phone = id_equipo2;
                                        ocultarImagenPosiciones();
                                }
                        }
                        
                        }else{//semis-right
                                if(id_semis_right_phone == "")id_semis_right_phone = id_equipo2;
                                else{
                                        if(id_equipo2 != id_semis_right_phone){
                                                id_semis_right_phone = id_equipo2;
                                                ocultarImagenPosiciones();
                                        }
                                }
                        }
                }
                else{
                     pasarganador_phone("",id_posicion1);
                     pasarganador_phone("",id_posicion2);
                     ocultarImagenPosiciones();
                }
            }

             function final_phone(id_equipo1,id_equipo2){
            
                var id_span;
                var id_img;
                var selector_equipo1 = "#" + id_equipo1;
                var selector_equipo2 = "#" + id_equipo2;
                var goles_equipo1 = parseInt($(selector_equipo1).val());
                var goles_equipo2 = parseInt($(selector_equipo2).val());
                
                /* desktop: seteo los goles */
                var selector_desktop_equipo_1 = "#" + id_equipo1.substr(6);
                var selector_desktop_equipo_2 = "#" + id_equipo2.substr(6);
                $(selector_desktop_equipo_1).val($(selector_equipo1).val());
                $(selector_desktop_equipo_2).val($(selector_equipo2).val());
                /* fin desktop */
    
                if ( goles_equipo1 > goles_equipo2 ){ //ganó equipo1
                    id_span = "#equipo-"+id_equipo1;
                    id_img = "#bandera-"+id_equipo1;
                    var selector_imagen = "" + $(id_img).attr('src') + "";
    
                    $("#equipo-ganador-phone").html($(id_span).html());
                    $("#bandera-ganador-phone").attr("src",selector_imagen);
                    //muestro imágenes ocultas.
                    $("#numero1-phone-final-0").show();
                    $("#numero2-phone-final-0").hide();
                    $("#numero1-phone-final-1").hide();
                    $("#numero2-phone-final-1").show();
    
                    /* desktop: seteo span e imagen */
                    $("#equipo-ganador").html($(id_span).html());
                    $("#bandera-ganador").attr("src",selector_imagen);
                    $("#numero1-final-0").show();
                    $("#numero2-final-0").hide();
                    $("#numero1-final-1").hide();
                    $("#numero2-final-1").show();
                     /* fin desktop */
                }
                else if ( goles_equipo1 < goles_equipo2 ){ //ganó equipo2
                    id_span = "#equipo-"+id_equipo2;
                    id_img = "#bandera-"+id_equipo2;
                    var selector_imagen = "" + $(id_img).attr('src') + "";
                    $("#equipo-ganador-phone").html($(id_span).html());
                    $("#bandera-ganador-phone").attr("src",selector_imagen);
                    //muestro imágenes ocultas.
                    $("#numero1-phone-final-1").show();
                    $("#numero2-phone-final-1").hide();
                    $("#numero1-phone-final-0").hide();
                    $("#numero2-phone-final-0").show();
    
                    /* desktop: seteo span e imagen */
                    $("#equipo-ganador").html($(id_span).html());
                    $("#bandera-ganador").attr("src",selector_imagen);
                    $("#numero1-final-1").show();
                    $("#numero2-final-1").hide();
                    $("#numero1-final-0").hide();
                    $("#numero2-final-0").show()
                    /* fin desktop */
                }
                else{//empataron --> tengo que borrar campeón.
                        $("#equipo-ganador").html("Equipo Ganador");
                        $("#bandera-ganador").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        //oculto imágenes
                        $("#numero1-final-0").hide();
                        $("#numero2-final-0").hide();
                        $("#numero1-final-1").hide();
                        $("#numero2-final-1").hide();
        
                        /* phone: seteo span e imagen */
                        $("#equipo-ganador-phone").html("Equipo Ganador");
                        $("#bandera-ganador-phone").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#numero1-phone-final-0").hide();
                        $("#numero2-phone-final-0").hide();
                        $("#numero1-phone-final-1").hide();
                        $("#numero2-phone-final-1").hide();
                        /* fin phone */
                }
            }
                

            function tercer_puesto_phone(id_equipo1,id_equipo2){
                var selector_equipo1 = "#" +  id_equipo1;
                var selector_equipo2 = "#" +  id_equipo2;
                var goles_equipo1 = parseInt($(selector_equipo1).val());
                var goles_equipo2 = parseInt($(selector_equipo2).val());
      
                /* desktop */
                $("#3puesto-0").val(goles_equipo1);
                $("#3puesto-1").val(goles_equipo2);
                /* fin desktop */
      
      
                 if ( goles_equipo1 > goles_equipo2 ){ //ganó equipo1
                      $("#numero-phone-3puesto-0").show();
                      $("#numero-phone-3puesto-1").hide();
                      /* desktop */
                      $("#numero-3puesto-0").show();
                      $("#numero-3puesto-1").hide();
                      /* fin desktop */
                  }
                  else if ( goles_equipo1 < goles_equipo2 ){ //ganó equipo2
                      $("#numero-phone-3puesto-0").hide();
                      $("#numero-phone-3puesto-1").show();
                      /* desktop */
                      $("#numero-3puesto-0").hide();
                      $("#numero-3puesto-1").show();
                      /* fin desktop */
                  }
                  else{ //empate
                      $("#numero-phone-3puesto-0").hide();
                      $("#numero-phone-3puesto-1").hide();
                      /* desktop */
                      $("#numero-3puesto-0").hide();
                      $("#numero-3puesto-1").hide();
                      /* fin desktop */
                  }
              }

        
