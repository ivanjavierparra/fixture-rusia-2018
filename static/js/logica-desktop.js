var id_semis_left = "";
var id_semis_right = "";
var historico_inputs_llaves = [];//12 posiciones--> 0 representa partido 1 de octavos, 12 representa el ultimo partido de cuartos.
      /**
        * Valida que sólo se ingresen números en los input type number.
        */
        $("[type='number']").keypress(function (evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) evt.preventDefault();
            
        });

        $("[type='number']").attr({
                "max" : 10,        // substitute your own
                "min" : 0          // values (or variables) here
             });
       
        /**
            * id: id perteneciente a algún input type number (representa goles de un equipo).
            * Evalúa goles de un equipo y los compara con su rival, el ganador pasa a la fase correspondiente.
        */
        function verinputs(id){
            if (!hayEquipo(id))return;
            switch(id){
                case 'octavos-left-0':
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-1"))return;
                        validarinputs("octavos-left-1");
                        computar_ganador("octavos-left-0","octavos-left-1","cuartos-left-0"); //verifico si el otro input tiene un valor correcto.
                        break;
                case 'octavos-left-1':
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-0"))return;
                        validarinputs("octavos-left-0");
                        computar_ganador("octavos-left-0","octavos-left-1","cuartos-left-0");
                        break;
                case 'octavos-left-2':
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-3"))return;
                        validarinputs("octavos-left-3");
                        computar_ganador("octavos-left-2","octavos-left-3","cuartos-left-1");
                        break;
                case 'octavos-left-3':
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-2"))return;
                        validarinputs("octavos-left-2");
                        computar_ganador("octavos-left-2","octavos-left-3","cuartos-left-1");
                        break;
                case 'octavos-left-4':
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-5"))return;
                        validarinputs("octavos-left-5");
                        computar_ganador("octavos-left-4","octavos-left-5","cuartos-left-2");
                        break;
                case 'octavos-left-5':
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-4"))return;
                        validarinputs("octavos-left-4");
                        computar_ganador("octavos-left-4","octavos-left-5","cuartos-left-2");
                        break;
                case 'octavos-left-6':
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-7"))return;
                        validarinputs("octavos-left-7");
                        computar_ganador("octavos-left-6","octavos-left-7","cuartos-left-3");
                        break;
                case 'octavos-left-7':
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-6"))return;
                        validarinputs("octavos-left-6");
                        computar_ganador("octavos-left-6","octavos-left-7","cuartos-left-3");
                        break;
                case 'octavos-right-0':
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-1"))return;
                        validarinputs("octavos-right-1");
                        computar_ganador("octavos-right-0","octavos-right-1","cuartos-right-0");
                        break;
                case 'octavos-right-1':
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-0"))return;
                        validarinputs("octavos-right-0");
                        computar_ganador("octavos-right-0","octavos-right-1","cuartos-right-0");
                        break;
                case 'octavos-right-2':
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-3"))return;
                        validarinputs("octavos-right-3");
                        computar_ganador("octavos-right-2","octavos-right-3","cuartos-right-1");
                        break;
                case 'octavos-right-3':
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-2"))return;
                        validarinputs("octavos-right-2");
                        computar_ganador("octavos-right-2","octavos-right-3","cuartos-right-1");
                        break;
                case 'octavos-right-4':
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-5"))return;
                        validarinputs("octavos-right-5");
                        computar_ganador("octavos-right-4","octavos-right-5","cuartos-right-2");
                        break;
                case 'octavos-right-5':
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-4"))return;
                        validarinputs("octavos-right-4");
                        computar_ganador("octavos-right-4","octavos-right-5","cuartos-right-2");
                        break;
                case 'octavos-right-6':
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-7"))return;
                        validarinputs("octavos-right-7");
                        computar_ganador("octavos-right-6","octavos-right-7","cuartos-right-3");
                        break;
                case 'octavos-right-7':
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-6"))return;
                        validarinputs("octavos-right-6");
                        computar_ganador("octavos-right-6","octavos-right-7","cuartos-right-3");
                        break;
                case 'cuartos-left-0':
                        validarinputs(id);
                        if (!hayEquipo("cuartos-left-1"))return;
                        validarinputs("cuartos-left-1");
                        computar_ganador("cuartos-left-0","cuartos-left-1","semis-left-0");
                        break;
                case 'cuartos-left-1':
                        validarinputs(id);
                        if (!hayEquipo("cuartos-left-0"))return;
                        validarinputs("cuartos-left-0");
                        computar_ganador("cuartos-left-0","cuartos-left-1","semis-left-0");
                        break;
                case 'cuartos-left-2':
                        validarinputs(id);
                        if (!hayEquipo("cuartos-left-3"))return;
                        validarinputs("cuartos-left-3");
                        computar_ganador("cuartos-left-2","cuartos-left-3","semis-left-1");
                        break;
                case 'cuartos-left-3':
                        validarinputs(id);
                        if (!hayEquipo("cuartos-left-2"))return;
                        validarinputs("cuartos-left-2");
                        computar_ganador("cuartos-left-2","cuartos-left-3","semis-left-1");
                        break;
                case 'cuartos-right-0':
                        validarinputs(id);
                        if (!hayEquipo("cuartos-right-1"))return;
                        validarinputs("cuartos-right-1");
                        computar_ganador("cuartos-right-0","cuartos-right-1","semis-right-0");
                        break;
                case 'cuartos-right-1':
                        validarinputs(id);
                        if (!hayEquipo("cuartos-right-0"))return;
                        validarinputs("cuartos-right-0");
                        computar_ganador("cuartos-right-0","cuartos-right-1","semis-right-0");
                        break;
                case 'cuartos-right-2':
                        validarinputs(id);
                        if (!hayEquipo("cuartos-right-3"))return;
                        validarinputs("cuartos-right-3");
                        computar_ganador("cuartos-right-2","cuartos-right-3","semis-right-1");
                        break;
                case 'cuartos-right-3':
                        validarinputs(id);
                        if (!hayEquipo("cuartos-right-2"))return;
                        validarinputs("cuartos-right-2");
                        computar_ganador("cuartos-right-2","cuartos-right-3","semis-right-1");
                        break;
                case 'semis-left-0':
                        validarinputs(id);
                        if (!hayEquipo("semis-left-1"))return;
                        validarinputs("semis-left-1");
                        computar_ganador2("semis-left-0","semis-left-1","final-0","3puesto-0");
                        break;
                case 'semis-left-1':
                        validarinputs(id);
                        if (!hayEquipo("semis-left-0"))return;
                        validarinputs("semis-left-0");
                        computar_ganador2("semis-left-0","semis-left-1","final-0","3puesto-0");
                        break;
                case 'semis-right-0':
                        validarinputs(id);
                        if (!hayEquipo("semis-right-1"))return;
                        validarinputs("semis-right-1");
                        computar_ganador2("semis-right-0","semis-right-1","final-1","3puesto-1");
                        break;
                case 'semis-right-1':
                        validarinputs(id);
                        if (!hayEquipo("semis-right-0"))return;
                        validarinputs("semis-right-0");
                        computar_ganador2("semis-right-0","semis-right-1","final-1","3puesto-1");
                        break;
                case 'final-0':
                        validarinputs(id);
                        if (!hayEquipo("final-1"))return;
                        validarinputs("final-1");
                        final("final-0","final-1");
                        break;
                case 'final-1':
                        validarinputs(id);
                        if (!hayEquipo("final-0"))return;
                        validarinputs("final-0");
                        final("final-0","final-1");
                        break;
                case '3puesto-0':
                        validarinputs(id);
                        if (!hayEquipo("3puesto-1"))return;
                        validarinputs("3puesto-1");
                        tercer_puesto("3puesto-0","3puesto-1");
                        break;
                case '3puesto-1':
                        validarinputs(id);
                        if (!hayEquipo("3puesto-0"))return;
                        validarinputs("3puesto-0");
                        tercer_puesto("3puesto-0","3puesto-1");
                        break;
                
            }
        }
        

        /**
         * Verifica si un input no tiene nada, tiene un number de más de 2 dígitos y number es mayor a 10 goles. 
         * En tal caso, pone el input en 0.
        */
        function validarinputs(id){
            var selector = "#"+id;
            if ( ($(selector).val()=="") || ($(selector).val().length>2) || ($(selector).val()>10) ) $(selector).val(0);
        }



         /**
         * id_equipo1: id perteneciente a algún input type number (representa goles de un equipo). 
         * id_equipo2: id perteneciente a algún input type number (representa goles de un equipo). 
         * Comprueba qué equipo ganó el 1er puesto y cual el 2do puesto.
        */
        function final(id_equipo1,id_equipo2){
            
            var id_span;
            var id_img;
            var selector_equipo1 = "#" + id_equipo1;
            var selector_equipo2 = "#" + id_equipo2;
            var goles_equipo1 = parseInt($(selector_equipo1).val());
            var goles_equipo2 = parseInt($(selector_equipo2).val());
            
            /* phone: seteo los goles */
            var selector_phone_equipo_1 = "#phone-" + id_equipo1;
            var selector_phone_equipo_2 = "#phone-" + id_equipo2;
            $(selector_phone_equipo_1).val($(selector_equipo1).val());
            $(selector_phone_equipo_2).val($(selector_equipo2).val());
            /* fin phone */

            if ( goles_equipo1 > goles_equipo2 ){ //ganó equipo1
                id_span = "#equipo-"+id_equipo1;
                id_img = "#bandera-"+id_equipo1;
                var selector_imagen = "" + $(id_img).attr('src') + "";

                $("#equipo-ganador").html($(id_span).html());
                $("#bandera-ganador").attr("src",selector_imagen);
                //muestro imágenes ocultas.
                $("#numero1-final-0").show();
                $("#numero2-final-0").hide();
                $("#numero1-final-1").hide();
                $("#numero2-final-1").show();

                /* phone: seteo span e imagen */
                $("#equipo-ganador-phone").html($(id_span).html());
                $("#bandera-ganador-phone").attr("src",selector_imagen);
                $("#numero1-phone-final-0").show();
                $("#numero2-phone-final-0").hide();
                $("#numero1-phone-final-1").hide();
                $("#numero2-phone-final-1").show();
                /* fin phone */
            }
            else if ( goles_equipo1 < goles_equipo2 ){ //ganó equipo2
                id_span = "#equipo-"+id_equipo2;
                id_img = "#bandera-"+id_equipo2;
                var selector_imagen = "" + $(id_img).attr('src') + "";
                $("#equipo-ganador").html($(id_span).html());
                $("#bandera-ganador").attr("src",selector_imagen);
                //muestro imágenes ocultas.
                $("#numero1-final-1").show();
                $("#numero2-final-1").hide();
                $("#numero1-final-0").hide();
                $("#numero2-final-0").show();

                /* phone: seteo span e imagen */
                $("#equipo-ganador-phone").html($(id_span).html());
                $("#bandera-ganador-phone").attr("src",selector_imagen);
                $("#numero1-phone-final-1").show();
                $("#numero2-phone-final-1").hide();
                $("#numero1-phone-final-0").hide();
                $("#numero2-phone-final-0").show()
                /* fin phone */
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


        /**
            * id_equipo1: id del input del equipo1.
            * id_equipo2: id del input del equipo2.
            * Comprueba quién ganó el 3er Puesto.
        */
       function tercer_puesto(id_equipo1,id_equipo2){
          var selector_equipo1 = "#" +  id_equipo1;
          var selector_equipo2 = "#" +  id_equipo2;
          var goles_equipo1 = parseInt($(selector_equipo1).val());
          var goles_equipo2 = parseInt($(selector_equipo2).val());

          /* phone */
          $("#phone-3puesto-0").val(goles_equipo1);
          $("#phone-3puesto-1").val(goles_equipo2);
          /* fin phone */


           if ( goles_equipo1 > goles_equipo2 ){ //ganó equipo1
                $("#numero-3puesto-0").show();
                $("#numero-3puesto-1").hide();
                /* phone */
                $("#numero-phone-3puesto-0").show();
                $("#numero-phone-3puesto-1").hide();
                /* fin phone */
            }
            else if ( goles_equipo1 < goles_equipo2 ){ //ganó equipo2
                $("#numero-3puesto-0").hide();
                $("#numero-3puesto-1").show();
                /* phone */
                $("#numero-phone-3puesto-0").hide();
                $("#numero-phone-3puesto-1").show();
                /* fin phone */
            }
            else{ //empate
                $("#numero-3puesto-0").hide();
                $("#numero-3puesto-1").hide();
                /* phone */
                $("#numero-phone-3puesto-0").hide();
                $("#numero-phone-3puesto-1").hide();
                /* fin phone */
            }
        }


        /**
         * id_equipo1: id del input del equipo1.
         * id_equipo2: id del input del equipo2.
         * id_posicion: id de un input en el fixture.
         * Verifica quien gano, y pasa su span e img a la posición del fixture dada por id_posicion.
         */
        function computar_ganador(id_equipo1,id_equipo2,id_posicion){
           var selector_equipo1 = "#" + id_equipo1;
           var selector_equipo2 = "#" + id_equipo2;
           var selector_posicion = "#" + id_posicion;
           var goles_equipo1 = parseInt($(selector_equipo1).val());
           var goles_equipo2 = parseInt($(selector_equipo2).val());

           /* phone */
           var selector_phone_equipo_1 = "#phone-" + id_equipo1;
           var selector_phone_equipo_2 = "#phone-" + id_equipo2;
           $(selector_phone_equipo_1).val($(selector_equipo1).val());
           $(selector_phone_equipo_2).val($(selector_equipo2).val());
           /* fin phone */
           
           if ( goles_equipo1 > goles_equipo2 ){ //ganó equipo1.
                pasarganador(id_equipo1,id_posicion);
                //if (cambiaron_ganadores_partido(id_equipo1)) entonces arreglo el fixture
                //arreglar_fixture_ganador(id_equipo1);//solo arreglo fixture si cambio de ganador
                cambiaron_ganadores_partido(id_equipo1);
           }
           else if  ( goles_equipo1 < goles_equipo2 ){ //ganó equipo2.
                pasarganador(id_equipo2,id_posicion);
                //arreglar_fixture_ganador(id_equipo2);
                cambiaron_ganadores_partido(id_equipo2);
           }
           else{ //empataron.
                pasarganador_phone("",id_posicion);
                ocultarImagenPosiciones();
                arreglar_fixture_empate(id_equipo1);
           }
        }

        function cambiaron_ganadores_partido(id){
                var selector = "#";
                switch(id){
                        case 'octavos-left-0':
                                if(!historico_inputs_llaves[0]){
                                        historico_inputs_llaves[0] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[0]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[0] = id;
                                                setearInputs("#cuartos-left-0");
                                        }
                                }
                                break;
                        case 'octavos-left-1':
                                if(!historico_inputs_llaves[0]){
                                        historico_inputs_llaves[0] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[0]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[0] = id;
                                                setearInputs("#cuartos-left-0");
                                        }
                                }
                                break;
                        case 'octavos-left-2':
                                if(!historico_inputs_llaves[1]){
                                        historico_inputs_llaves[1] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[1]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[1] = id;
                                                setearInputs("#cuartos-left-1");
                                        }
                                }
                                break;
                        case 'octavos-left-3':
                                if(!historico_inputs_llaves[1]){
                                        historico_inputs_llaves[1] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[1]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[1] = id;
                                                setearInputs("#cuartos-left-1");
                                        }
                                }
                                break;
                        case 'octavos-left-4':
                                if(!historico_inputs_llaves[2]){
                                        historico_inputs_llaves[2] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[2]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[2] = id;
                                                setearInputs("#cuartos-left-2");
                                        }
                                }
                                break;
                        case 'octavos-left-5':
                                if(!historico_inputs_llaves[2]){
                                        historico_inputs_llaves[2] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[2]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[2] = id;
                                                setearInputs("#cuartos-left-2");
                                        }
                                }
                                break;
                        case 'octavos-left-6':
                                if(!historico_inputs_llaves[3]){
                                        historico_inputs_llaves[3] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[3]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[3] = id;
                                                setearInputs("#cuartos-left-3");
                                        }
                                }
                                break;
                        case 'octavos-left-7':
                                if(!historico_inputs_llaves[3]){
                                        historico_inputs_llaves[3] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[3]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[3] = id;
                                                setearInputs("#cuartos-left-3");
                                        }
                                }
                                break;
                        case 'octavos-right-0':
                                if(!historico_inputs_llaves[4]){
                                        historico_inputs_llaves[4] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[4]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[4] = id;
                                                setearInputs("#cuartos-right-0");
                                        }
                                }
                                break;
                        case 'octavos-right-1':
                                if(!historico_inputs_llaves[4]){
                                        historico_inputs_llaves[4] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[4]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[4] = id;
                                                setearInputs("#cuartos-right-0");
                                        }
                                }
                                break;       
                        case 'octavos-right-2':
                                if(!historico_inputs_llaves[5]){
                                        historico_inputs_llaves[5] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[5]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[5] = id;
                                                setearInputs("#cuartos-right-1");
                                        }
                                }
                                break; 
                        case 'octavos-right-3':
                                if(!historico_inputs_llaves[5]){
                                        historico_inputs_llaves[5] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[5]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[5] = id;
                                                setearInputs("#cuartos-right-1");
                                        }
                                }
                                break; 
                        case 'octavos-right-4':
                                if(!historico_inputs_llaves[6]){
                                        historico_inputs_llaves[6] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[6]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[6] = id;
                                                setearInputs("#cuartos-right-2");
                                        }
                                }
                                break; 
                        case 'octavos-right-5':
                                if(!historico_inputs_llaves[6]){
                                        historico_inputs_llaves[6] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[6]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[6] = id;
                                                setearInputs("#cuartos-right-2");
                                        }
                                }
                                break; 
                        case 'octavos-right-6':
                                if(!historico_inputs_llaves[7]){
                                        historico_inputs_llaves[7] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[7]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[7] = id;
                                                setearInputs("#cuartos-right-3");
                                        }
                                }
                                break; 
                        case 'octavos-right-7':
                                if(!historico_inputs_llaves[7]){
                                        historico_inputs_llaves[7] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[7]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[7] = id;
                                                setearInputs("#cuartos-right-3");
                                        }
                                }
                                break; 
                        case 'cuartos-left-0':
                                if(!historico_inputs_llaves[8]){
                                        historico_inputs_llaves[8] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[8]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[8] = id;
                                                setearInputs("#semis-left-0");
                                        }
                                }
                                break; 
                        case 'cuartos-left-1':
                                if(!historico_inputs_llaves[8]){
                                        historico_inputs_llaves[8] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[8]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[8] = id;
                                                setearInputs("#semis-left-0");
                                        }
                                }
                                break; 
                        case 'cuartos-left-2':
                                if(!historico_inputs_llaves[9]){
                                        historico_inputs_llaves[9] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[9]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[9] = id;
                                                setearInputs("#semis-left-1");
                                        }
                                }
                                break; 
                        case 'cuartos-left-3':
                                if(!historico_inputs_llaves[9]){
                                        historico_inputs_llaves[9] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[9]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[9] = id;
                                                setearInputs("#semis-left-1");
                                        }
                                }
                                break; 
                        case 'cuartos-right-0':
                                if(!historico_inputs_llaves[10]){
                                        historico_inputs_llaves[10] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[10]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[10] = id;
                                                setearInputs("#semis-right-0");
                                        }
                                }
                                break; 
                        case 'cuartos-right-1':
                                if(!historico_inputs_llaves[10]){
                                        historico_inputs_llaves[10] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[10]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[10] = id;
                                                setearInputs("#semis-right-0");
                                        }
                                }
                                break; 
                        case 'cuartos-right-2':
                                if(!historico_inputs_llaves[11]){
                                        historico_inputs_llaves[11] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[11]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[11] = id;
                                                setearInputs("#semis-right-1");
                                        }
                                }
                                break; 
                        case 'cuartos-right-3':
                                if(!historico_inputs_llaves[11]){
                                        historico_inputs_llaves[11] = id;
                                }
                                else{
                                        if(historico_inputs_llaves[11]!=id){
                                                arreglar_fixture_ganador(id);
                                                historico_inputs_llaves[11] = id;
                                                setearInputs("#semis-right-0");
                                        }
                                }
                                break; 
                }
        }

        function setearInputs(id){
                $(id).val(0);
        }

        function arreglar_fixture_empate(id_equipo1){
                if((id_equipo1=="octavos-left-0")||(id_equipo1=="octavos-left-1")||(id_equipo1=="phone-octavos-left-0")||(id_equipo1=="phone-octavos-left-1")){
                        //cuartos
                        $("#equipo-cuartos-left-0").html("Equipo 1");
                        $("#bandera-cuartos-left-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#cuartos-left-0").val(0);
                        //semis
                        $("#equipo-semis-left-0").html("Equipo 1");
                        $("#bandera-semis-left-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#semis-left-0").val(0);
                        //tercer puesto
                        $("#equipo-3puesto-0").html("Equipo 1");
                        $("#bandera-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#3puesto-0").val(0);
                        //final
                        $("#equipo-final-0").html("Equipo 1");
                        $("#bandera-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#final-0").val(0);
                        /* phone */
                        $("#equipo-phone-cuartos-left-0").html("Equipo 1");
                        $("#bandera-phone-cuartos-left-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-cuartos-left-0").val(0);
                        //semis
                        $("#equipo-phone-semis-left-0").html("Equipo 1");
                        $("#bandera-phone-semis-left-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-semis-left-0").val(0);
                        //tercer puesto
                        $("#equipo-phone-3puesto-0").html("Equipo 1");
                        $("#bandera-phone-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-3puesto-0").val(0);
                        //final
                        $("#equipo-phone-final-0").html("Equipo 1");
                        $("#bandera-phone-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-final-0").val(0);
                        /* fin phone */
                }
                else if((id_equipo1=="octavos-left-2")||(id_equipo1=="octavos-left-3")||(id_equipo1=="phone-octavos-left-2")||(id_equipo1=="phone-octavos-left-3")){
                        //cuartos
                        $("#equipo-cuartos-left-1").html("Equipo 2");
                        $("#bandera-cuartos-left-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#cuartos-left-1").val(0);
                        //semis
                        $("#equipo-semis-left-0").html("Equipo 1");
                        $("#bandera-semis-left-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#semis-left-0").val(0);
                        //tercer puesto
                        $("#equipo-3puesto-0").html("Equipo 1");
                        $("#bandera-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#3puesto-0").val(0);
                        //final
                        $("#equipo-final-0").html("Equipo 1");
                        $("#bandera-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#final-0").val(0);
                        /* phone */
                        //cuartos
                        $("#equipo-phone-cuartos-left-1").html("Equipo 2");
                        $("#bandera-cuartos-left-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-cuartos-left-1").val(0);
                        //semis
                        $("#equipo-phone-semis-left-0").html("Equipo 1");
                        $("#bandera-phone-semis-left-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-semis-left-0").val(0);
                        //tercer puesto
                        $("#equipo-phone-3puesto-0").html("Equipo 1");
                        $("#bandera-phone-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-3puesto-0").val(0);
                        //final
                        $("#equipo-phone-final-0").html("Equipo 1");
                        $("#bandera-phone-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-final-1").val(0);
                        /* fin phone */
                }
                else if((id_equipo1=="octavos-left-4")||(id_equipo1=="octavos-left-5")||(id_equipo1=="phone-octavos-left-4")||(id_equipo1=="phone-octavos-left-5")){
                       //cuartos
                       $("#equipo-cuartos-left-2").html("Equipo 1");
                       $("#bandera-cuartos-left-2").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#cuartos-left-2").val(0);
                       //semis
                       $("#equipo-semis-left-1").html("Equipo 2");
                       $("#bandera-semis-left-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-left-1").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-0").html("Equipo 1");
                       $("#bandera-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-0").val(0);
                       //final
                       $("#equipo-final-0").html("Equipo 1");
                       $("#bandera-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-0").val(0);
                       /* phone */
                       //cuartos
                       $("#equipo-phone-cuartos-left-2").html("Equipo 1");
                       $("#bandera-phone-cuartos-left-2").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-cuartos-left-2").val(0);
                       //semis
                       $("#equipo-phone-semis-left-1").html("Equipo 2");
                       $("#bandera-phone-semis-left-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-semis-left-1").val(0);
                       //tercer puesto
                       $("#equipo-phone-3puesto-0").html("Equipo 1");
                       $("#bandera-phone-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-3puesto-0").val(0);
                       //final
                       $("#equipo-phone-final-0").html("Equipo 1");
                       $("#bandera-phone-sfinal-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-final-0").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="octavos-left-6")||(id_equipo1=="octavos-left-7")||(id_equipo1=="phone-octavos-left-6")||(id_equipo1=="phone-octavos-left-7")){
                        //cuartos
                       $("#equipo-cuartos-left-3").html("Equipo 2");
                       $("#bandera-cuartos-left-3").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#cuartos-left-3").val(0);
                       //semis
                       $("#equipo-semis-left-1").html("Equipo 2");
                       $("#bandera-semis-left-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-left-1").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-0").html("Equipo 1");
                       $("#bandera-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-0").val(0);
                       //final
                       $("#equipo-final-0").html("Equipo 1");
                       $("#bandera-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-0").val(0);
                       /* phone */
                        //cuartos
                        $("#equipo-phone-cuartos-left-3").html("Equipo 2");
                        $("#bandera-phone-cuartos-left-3").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-cuartos-left-3").val(0);
                        //semis
                        $("#equipo-phone-semis-left-1").html("Equipo 2");
                        $("#bandera-phone-semis-left-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-semis-left-1").val(0);
                        //tercer puesto
                        $("#equipo-phone-3puesto-0").html("Equipo 1");
                        $("#bandera-phone-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-3puesto-0").val(0);
                        //final
                        $("#equipo-phone-final-0").html("Equipo 1");
                        $("#bandera-phone-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-final-0").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="octavos-right-0")||(id_equipo1=="octavos-right-1")||(id_equipo1=="phone-octavos-right-0")||(id_equipo1=="phone-octavos-right-1")){
                        //cuartos
                       $("#equipo-cuartos-right-0").html("Equipo 1");
                       $("#bandera-cuartos-right-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#cuartos-right-0").val(0);
                       //semis
                       $("#equipo-semis-right-0").html("Equipo 2");
                       $("#bandera-semis-right-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-right-0").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-1").html("Equipo 2");
                       $("#bandera-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-1").val(0);
                       //final
                       $("#equipo-final-1").html("Equipo 2");
                       $("#bandera-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-1").val(0);
                       /* phone */
                        //cuartos
                        $("#equipo-phone-cuartos-right-0").html("Equipo 1");
                        $("#bandera-phone-cuartos-right-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-cuartos-right-0").val(0);
                        //semis
                        $("#equipo-phone-semis-right-0").html("Equipo 2");
                        $("#bandera-phone-semis-right-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-semis-right-0").val(0);
                        //tercer puesto
                        $("#equipo-phone-3puesto-1").html("Equipo 2");
                        $("#bandera-phone-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-3puesto-1").val(0);
                        //final
                        $("#equipo-phone-final-1").html("Equipo 2");
                        $("#bandera-phone-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-final-1").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="octavos-right-2")||(id_equipo1=="octavos-right-3")||(id_equipo1=="phone-octavos-right-2")||(id_equipo1=="phone-octavos-right-3")){
                        //cuartos
                       $("#equipo-cuartos-right-1").html("Equipo 2");
                       $("#bandera-cuartos-right-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#cuartos-right-1").val(0);
                       //semis
                       $("#equipo-semis-right-0").html("Equipo 2");
                       $("#bandera-semis-right-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-right-0").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-1").html("Equipo 2");
                       $("#bandera-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-1").val(0);
                       //final
                       $("#equipo-final-1").html("Equipo 2");
                       $("#bandera-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-1").val(0);
                       /* phone */
                       //cuartos
                       $("#equipo-phone-cuartos-right-1").html("Equipo 2");
                       $("#bandera-phone-cuartos-right-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-cuartos-right-1").val(0);
                       //semis
                       $("#equipo-phone-semis-right-0").html("Equipo 2");
                       $("#bandera-phone-semis-right-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-semis-right-0").val(0);
                       //tercer puesto
                       $("#equipo-phone-3puesto-1").html("Equipo 2");
                       $("#bandera-phone-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-3puesto-1").val(0);
                       //final
                       $("#equipo-phone-final-1").html("Equipo 2");
                       $("#bandera-phone-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-final-1").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="octavos-right-4")||(id_equipo1=="octavos-right-5")||(id_equipo1=="phone-octavos-right-4")||(id_equipo1=="phone-octavos-right-5")){
                        //cuartos
                       $("#equipo-cuartos-right-2").html("Equipo 1");
                       $("#bandera-cuartos-right-2").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#cuartos-right-2").val(0);
                       //semis
                       $("#equipo-semis-right-1").html("Equipo 2");
                       $("#bandera-semis-right-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-right-1").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-1").html("Equipo 1");
                       $("#bandera-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-1").val(0);
                       //final
                       $("#equipo-final-1").html("Equipo 1");
                       $("#bandera-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-1").val(0);
                       /* phone */
                       //cuartos
                       $("#equipo-phone-cuartos-right-2").html("Equipo 1");
                       $("#bandera-phone-cuartos-right-2").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-cuartos-right-2").val(0);
                       //semis
                       $("#equipo-phone-semis-right-1").html("Equipo 2");
                       $("#bandera-phone-semis-right-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-semis-right-1").val(0);
                       //tercer puesto
                       $("#equipo-phone-3puesto-1").html("Equipo 1");
                       $("#bandera-phone-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-3puesto-1").val(0);
                       //final
                       $("#equipo-phone-final-1").html("Equipo 1");
                       $("#bandera-phone-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-final-1").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="octavos-right-6")||(id_equipo1=="octavos-right-7")||(id_equipo1=="phone-octavos-right-6")||(id_equipo1=="phone-octavos-right-7")){
                        //cuartos
                       $("#equipo-cuartos-right-3").html("Equipo 2");
                       $("#bandera-cuartos-right-3").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#cuartos-right-3").val(0);
                       //semis
                       $("#equipo-semis-right-1").html("Equipo 2");
                       $("#bandera-semis-right-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-right-1").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-1").html("Equipo 1");
                       $("#bandera-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-1").val(0);
                       //final
                       $("#equipo-final-1").html("Equipo 1");
                       $("#bandera-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-1").val(0);

                       /* phone */
                       //cuartos
                       $("#equipo-phone-cuartos-right-3").html("Equipo 2");
                       $("#bandera-phone-cuartos-right-3").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-cuartos-right-3").val(0);
                       //semis
                       $("#equipo-phone-semis-right-1").html("Equipo 2");
                       $("#bandera-phone-semis-right-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-semis-right-1").val(0);
                       //tercer puesto
                       $("#equipo-phone-3puesto-1").html("Equipo 1");
                       $("#bandera-phone-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-3puesto-1").val(0);
                       //final
                       $("#equipo-phone-final-1").html("Equipo 1");
                       $("#bandera-phone-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-final-1").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="cuartos-left-0")||(id_equipo1=="cuartos-left-1")||(id_equipo1=="phone-cuartos-left-0")||(id_equipo1=="phone-cuartos-left-1")){
                        //semis
                        $("#equipo-semis-left-0").html("Equipo 1");
                        $("#bandera-semis-left-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#semis-left-0").val(0);
                        //tercer puesto
                        $("#equipo-3puesto-0").html("Equipo 2");
                        $("#bandera-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#3puesto-0").val(0);
                        //final
                        $("#equipo-final-0").html("Equipo 2");
                        $("#bandera-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#final-0").val(0);

                        /* phone */
                        //semis
                        $("#equipo-phone-semis-left-0").html("Equipo 1");
                        $("#bandera-phone-semis-left-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-semis-left-0").val(0);
                        //tercer puesto
                        $("#equipo-phone-3puesto-0").html("Equipo 2");
                        $("#bandera-phone-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-3puesto-0").val(0);
                        //final
                        $("#equipo-phone-final-0").html("Equipo 2");
                        $("#bandera-phone-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-final-0").val(0);
                        /* fin phone */
                }
                else if((id_equipo1=="cuartos-left-2")||(id_equipo1=="cuartos-left-3")||(id_equipo1=="phone-cuartos-left-1")||(id_equipo1=="phone-cuartos-left-2")){
                        //semis
                        $("#equipo-semis-left-1").html("Equipo 1");
                        $("#bandera-semis-left-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#semis-left-1").val(0);
                        //tercer puesto
                        $("#equipo-3puesto-0").html("Equipo 2");
                        $("#bandera-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#3puesto-0").val(0);
                        //final
                        $("#equipo-final-0").html("Equipo 2");
                        $("#bandera-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#final-0").val(0);

                        /* phone */
                        //semis
                        $("#equipo-phone-semis-left-1").html("Equipo 1");
                        $("#bandera-phone-semis-left-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-semis-left-1").val(0);
                        //tercer puesto
                        $("#equipo-phone-3puesto-0").html("Equipo 2");
                        $("#bandera-phone-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-3puesto-0").val(0);
                        //final
                        $("#equipo-phone-final-0").html("Equipo 2");
                        $("#bandera-phone-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-final-0").val(0);
                        /* fin phone */
                }
                else if((id_equipo1=="cuartos-right-0")||(id_equipo1=="cuartos-right-1")||(id_equipo1=="phone-cuartos-right-0")||(id_equipo1=="phone-right-left-1")){
                        //semis
                       $("#equipo-semis-right-0").html("Equipo 1");
                       $("#bandera-semis-right-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-right-0").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-1").html("Equipo 2");
                       $("#bandera-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-1").val(0);
                       //final
                       $("#equipo-final-1").html("Equipo 2");
                       $("#bandera-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-1").val(0);

                       /* phone */
                       //semis
                       $("#equipo-phone-semis-right-0").html("Equipo 1");
                       $("#bandera-phone-semis-right-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-semis-right-0").val(0);
                       //tercer puesto
                       $("#equipo-phone-3puesto-1").html("Equipo 2");
                       $("#bandera-phone-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-3puesto-1").val(0);
                       //final
                       $("#equipo-phone-final-1").html("Equipo 2");
                       $("#bandera-phone-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-final-1").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="cuartos-right-2")||(id_equipo1=="cuartos-right-3")||(id_equipo1=="phone-cuartos-right-3")||(id_equipo1=="phone-right-left-3")){
                        //semis
                       $("#equipo-semis-right-1").html("Equipo 2");
                       $("#bandera-semis-right-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-right-1").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-1").html("Equipo 2");
                       $("#bandera-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-1").val(0);
                       //final
                       $("#equipo-final-1").html("Equipo 2");
                       $("#bandera-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-1").val(0);

                       /* phone */
                       //semis
                       $("#equipo-phone-semis-right-1").html("Equipo 2");
                       $("#bandera-phone-semis-right-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-semis-right-1").val(0);
                       //tercer puesto
                       $("#equipo-phone-3puesto-1").html("Equipo 2");
                       $("#bandera-phone-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-3puesto-1").val(0);
                       //final
                       $("#equipo-phone-final-1").html("Equipo 2");
                       $("#bandera-phone-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-final-1").val(0);
                       /* fin phone */
                }
                else{

                }
        }

        
        //iria en pasarganador: en goles1 > goles2 
        function arreglar_fixture_ganador(id_equipo1){
                //si cambia octavos -> cambiar semis y final
                //si cambia cuartos --> cambiar final
                var adentro = false;
                if((id_equipo1=="octavos-left-0")||(id_equipo1=="octavos-left-1")||(id_equipo1=="phone-octavos-left-0")||(id_equipo1=="phone-octavos-left-1")){
                        adentro = true;
                        //semis
                        $("#equipo-semis-left-0").html("Equipo 1");
                        $("#bandera-semis-left-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#semis-left-0").val(0);
                        //tercer puesto
                        $("#equipo-3puesto-0").html("Equipo 1");
                        $("#bandera-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#3puesto-0").val(0);
                        //final
                        $("#equipo-final-0").html("Equipo 1");
                        $("#bandera-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#final-0").val(0);

                        /* phone */
                        //semis
                        $("#equipo-phone-semis-left-0").html("Equipo 1");
                        $("#bandera-phone-semis-left-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-semis-left-0").val(0);
                        //tercer puesto
                        $("#equipo-phone-3puesto-0").html("Equipo 1");
                        $("#bandera-phone-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-3puesto-0").val(0);
                        //final
                        $("#equipo-phone-final-0").html("Equipo 1");
                        $("#bandera-phone-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-final-0").val(0);
                        /* fin phone */
                }
                else if((id_equipo1=="octavos-left-2")||(id_equipo1=="octavos-left-3")||(id_equipo1=="phone-octavos-left-2")||(id_equipo1=="phone-octavos-left-3")){
                        adentro = true;
                        //semis
                        $("#equipo-semis-left-0").html("Equipo 1");
                        $("#bandera-semis-left-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#semis-left-0").val(0);
                        //tercer puesto
                        $("#equipo-3puesto-0").html("Equipo 1");
                        $("#bandera-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#3puesto-0").val(0);
                        //final
                        $("#equipo-final-0").html("Equipo 1");
                        $("#bandera-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#final-0").val(0);

                        /* phone */
                        //semis
                        $("#equipo-phone-semis-left-0").html("Equipo 1");
                        $("#bandera-phone-semis-left-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-semis-left-0").val(0);
                        //tercer puesto
                        $("#equipo-phone-3puesto-0").html("Equipo 1");
                        $("#bandera-phone-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-3puesto-0").val(0);
                        //final
                        $("#equipo-phone-final-0").html("Equipo 1");
                        $("#bandera-phone-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-final-0").val(0);
                        /* fin phone */
                }
                else if((id_equipo1=="octavos-left-4")||(id_equipo1=="octavos-left-5")||(id_equipo1=="phone-octavos-left-4")||(id_equipo1=="phone-octavos-left-5")){
                        adentro = true;
                       //semis
                       $("#equipo-semis-left-1").html("Equipo 2");
                       $("#bandera-semis-left-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-left-1").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-0").html("Equipo 1");
                       $("#bandera-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-0").val(0);
                       //final
                       $("#equipo-final-0").html("Equipo 1");
                       $("#bandera-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-0").val(0);

                       /* phone */
                       //semis
                       $("#equipo-phone-semis-left-1").html("Equipo 2");
                       $("#bandera-phone-semis-left-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-semis-left-1").val(0);
                       //tercer puesto
                       $("#equipo-phone-3puesto-0").html("Equipo 1");
                       $("#bandera-phone-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-3puesto-0").val(0);
                       //final
                       $("#equipo-phone-final-0").html("Equipo 1");
                       $("#bandera-phone-sfinal-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-final-0").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="octavos-left-6")||(id_equipo1=="octavos-left-7")||(id_equipo1=="phone-octavos-left-6")||(id_equipo1=="phone-octavos-left-7")){
                        adentro = true;
                       //semis
                       $("#equipo-semis-left-1").html("Equipo 2");
                       $("#bandera-semis-left-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-left-1").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-0").html("Equipo 1");
                       $("#bandera-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-0").val(0);
                       //final
                       $("#equipo-final-0").html("Equipo 1");
                       $("#bandera-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-0").val(0);

                       /* phone */
                        //semis
                        $("#equipo-phone-semis-left-1").html("Equipo 2");
                        $("#bandera-phone-semis-left-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-semis-left-1").val(0);
                        //tercer puesto
                        $("#equipo-phone-3puesto-0").html("Equipo 1");
                        $("#bandera-phone-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-3puesto-0").val(0);
                        //final
                        $("#equipo-phone-final-0").html("Equipo 1");
                        $("#bandera-phone-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-final-0").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="octavos-right-0")||(id_equipo1=="octavos-right-1")||(id_equipo1=="phone-octavos-right-0")||(id_equipo1=="phone-octavos-right-1")){
                        adentro = true;
                       //semis
                       $("#equipo-semis-right-0").html("Equipo 2");
                       $("#bandera-semis-right-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-right-0").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-1").html("Equipo 2");
                       $("#bandera-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-1").val(0);
                       //final
                       $("#equipo-final-1").html("Equipo 2");
                       $("#bandera-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-1").val(0);

                       /* phone */
                        //semis
                        $("#equipo-phone-semis-right-0").html("Equipo 2");
                        $("#bandera-phone-semis-right-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-semis-right-1").val(0);
                        //tercer puesto
                        $("#equipo-phone-3puesto-1").html("Equipo 2");
                        $("#bandera-phone-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-3puesto-1").val(0);
                        //final
                        $("#equipo-phone-final-1").html("Equipo 2");
                        $("#bandera-phone-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-final-1").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="octavos-right-2")||(id_equipo1=="octavos-right-3")||(id_equipo1=="phone-octavos-right-2")||(id_equipo1=="phone-octavos-right-3")){
                        adentro = true;
                       //semis
                       $("#equipo-semis-right-0").html("Equipo 2");
                       $("#bandera-semis-right-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-right-0").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-1").html("Equipo 2");
                       $("#bandera-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-1").val(0);
                       //final
                       $("#equipo-final-1").html("Equipo 2");
                       $("#bandera-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-1").val(0);

                       /* phone */
                       //semis
                       $("#equipo-phone-semis-right-0").html("Equipo 2");
                       $("#bandera-phone-semis-right-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-semis-right-0").val(0);
                       //tercer puesto
                       $("#equipo-phone-3puesto-1").html("Equipo 2");
                       $("#bandera-phone-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-3puesto-1").val(0);
                       //final
                       $("#equipo-phone-final-1").html("Equipo 2");
                       $("#bandera-phone-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-final-1").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="octavos-right-4")||(id_equipo1=="octavos-right-5")||(id_equipo1=="phone-octavos-right-4")||(id_equipo1=="phone-octavos-right-5")){
                        adentro = true;
                       //semis
                       $("#equipo-semis-right-1").html("Equipo 2");
                       $("#bandera-semis-right-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-right-1").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-1").html("Equipo 1");
                       $("#bandera-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-1").val(0);
                       //final
                       $("#equipo-final-1").html("Equipo 1");
                       $("#bandera-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-1").val(0);

                       /* phone */
                       //semis
                       $("#equipo-phone-semis-right-1").html("Equipo 2");
                       $("#bandera-phone-semis-right-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-semis-right-1").val(0);
                       //tercer puesto
                       $("#equipo-phone-3puesto-1").html("Equipo 1");
                       $("#bandera-phone-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-3puesto-1").val(0);
                       //final
                       $("#equipo-phone-final-1").html("Equipo 1");
                       $("#bandera-phone-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-final-1").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="octavos-right-6")||(id_equipo1=="octavos-right-7")||(id_equipo1=="phone-octavos-right-6")||(id_equipo1=="phone-octavos-right-7")){
                        adentro = true;
                       //semis
                       $("#equipo-semis-right-1").html("Equipo 2");
                       $("#bandera-semis-right-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#semis-right-1").val(0);
                       //tercer puesto
                       $("#equipo-3puesto-1").html("Equipo 1");
                       $("#bandera-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-1").val(0);
                       //final
                       $("#equipo-final-1").html("Equipo 1");
                       $("#bandera-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-1").val(0);

                       /* phone */
                       //semis
                       $("#equipo-phone-semis-right-1").html("Equipo 2");
                       $("#bandera-phone-semis-right-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-semis-right-1").val(0);
                       //tercer puesto
                       $("#equipo-phone-3puesto-1").html("Equipo 1");
                       $("#bandera-phone-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-3puesto-1").val(0);
                       //final
                       $("#equipo-phone-final-1").html("Equipo 1");
                       $("#bandera-phone-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-final-1").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="cuartos-left-0")||(id_equipo1=="cuartos-left-1")||(id_equipo1=="phone-cuartos-left-0")||(id_equipo1=="phone-cuartos-left-1")){
                        adentro = true;
                        //tercer puesto
                        $("#equipo-3puesto-0").html("Equipo 2");
                        $("#bandera-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#3puesto-0").val(0);
                        //final
                        $("#equipo-final-0").html("Equipo 2");
                        $("#bandera-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#final-0").val(0);

                        /* phone */
                        
                        //tercer puesto
                        $("#equipo-phone-3puesto-0").html("Equipo 2");
                        $("#bandera-phone-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-3puesto-0").val(0);
                        //final
                        $("#equipo-phone-final-0").html("Equipo 2");
                        $("#bandera-phone-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-final-0").val(0);
                        /* fin phone */
                }
                else if((id_equipo1=="cuartos-left-2")||(id_equipo1=="cuartos-left-3")||(id_equipo1=="phone-cuartos-left-1")||(id_equipo1=="phone-cuartos-left-2")){
                        adentro = true;
                        //tercer puesto
                        $("#equipo-3puesto-0").html("Equipo 2");
                        $("#bandera-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#3puesto-0").val(0);
                        //final
                        $("#equipo-final-0").html("Equipo 2");
                        $("#bandera-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#final-0").val(0);

                        /* phone */
                        
                        //tercer puesto
                        $("#equipo-phone-3puesto-0").html("Equipo 2");
                        $("#bandera-phone-3puesto-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-3puesto-0").val(0);
                        //final
                        $("#equipo-phone-final-0").html("Equipo 2");
                        $("#bandera-phone-final-0").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                        $("#phone-final-0").val(0);
                        /* fin phone */
                }
                else if((id_equipo1=="cuartos-right-0")||(id_equipo1=="cuartos-right-1")||(id_equipo1=="phone-cuartos-right-0")||(id_equipo1=="phone-right-left-1")){
                        adentro = true;
                       //tercer puesto
                       $("#equipo-3puesto-1").html("Equipo 2");
                       $("#bandera-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-1").val(0);
                       //final
                       $("#equipo-final-1").html("Equipo 2");
                       $("#bandera-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-1").val(0);

                       /* phone */
                       
                       //tercer puesto
                       $("#equipo-phone-3puesto-1").html("Equipo 2");
                       $("#bandera-phone-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-3puesto-1").val(0);
                       //final
                       $("#equipo-phone-final-1").html("Equipo 2");
                       $("#bandera-phone-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-final-1").val(0);
                       /* fin phone */
                }
                else if((id_equipo1=="cuartos-right-2")||(id_equipo1=="cuartos-right-3")||(id_equipo1=="phone-cuartos-right-3")||(id_equipo1=="phone-right-left-3")){
                        adentro = true;
                       //tercer puesto
                       $("#equipo-3puesto-1").html("Equipo 2");
                       $("#bandera-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#3puesto-1").val(0);
                       //final
                       $("#equipo-final-1").html("Equipo 2");
                       $("#bandera-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#final-1").val(0);

                       /* phone */
                       
                       //tercer puesto
                       $("#equipo-phone-3puesto-1").html("Equipo 2");
                       $("#bandera-phone-3puesto-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-3puesto-1").val(0);
                       //final
                       $("#equipo-phone-final-1").html("Equipo 2");
                       $("#bandera-phone-final-1").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                       $("#phone-final-1").val(0);
                       /* fin phone */
                }
                else{

                }

                if(adentro)ocultarImagenPosiciones();

        }




        /**
         * id_equipo1: id del input del equipo 1 en el fixture.
         * id_equipo2: id del input del equipo 2 en el fixture.
         * id_posicion1: id que apunta a tabla finales.
         * id_posicion2: id que apunta a la tabla 3er puesto.
         * Comprueba qué equipo ganó el partido. El ganador pasa a tabla "final", el perdedor a la tabla "3er puesto".
         * **/
        function computar_ganador2(id_equipo1,id_equipo2,id_posicion1,id_posicion2){
           var selector_equipo1 = "#" + id_equipo1;
           var selector_equipo2 = "#" + id_equipo2;
           var goles_equipo1 = parseInt($(selector_equipo1).val());
           var goles_equipo2 = parseInt($(selector_equipo2).val());

           /* phone */
           var selector_phone_equipo_1 = "#phone-" + id_equipo1;
           var selector_phone_equipo_2 = "#phone-" + id_equipo2;
           $(selector_phone_equipo_1).val($(selector_equipo1).val());
           $(selector_phone_equipo_2).val($(selector_equipo2).val());
           /* fin phone */

           if ( goles_equipo1 > goles_equipo2 ){
                pasarganador(id_equipo1,id_posicion1);
                pasarganador(id_equipo2,id_posicion2);
                //si noto que en la misma llave en semis cambio el ganador, lo que hago es ocultar las imagenes de los ganadores.
                if(id_equipo1.indexOf("left") > -1){
                        if(id_semis_left=="")id_semis_left = id_equipo1;
                        else{
                                if(id_equipo1 != id_semis_left){
                                        id_semis_left = id_equipo1;
                                        ocultarImagenPosiciones();
                                }
                        }
                        
                }else{//semis-right
                        if(id_semis_right == "")id_semis_right = id_equipo1;
                        else{
                                if(id_equipo1 != id_semis_right){
                                        id_semis_right = id_equipo1;
                                        ocultarImagenPosiciones();
                                }
                        }
                }
                
           }
           else if  ( goles_equipo1 < goles_equipo2 ){
                pasarganador(id_equipo2,id_posicion1);
                pasarganador(id_equipo1,id_posicion2);
                //si noto que en la misma llave en semis cambio el ganador, lo que hago es ocultar las imagenes de los ganadores.
                if(id_equipo2.indexOf("left") > -1){
                        if(id_semis_left=="")id_semis_left = id_equipo2;
                        else{
                                if(id_equipo2 != id_semis_left){
                                        id_semis_left = id_equipo2;
                                        ocultarImagenPosiciones();
                                }
                        }
                        
                }else{//semis-right
                        if(id_semis_right == "")id_semis_right = id_equipo2;
                        else{
                                if(id_equipo2 != id_semis_right){
                                        id_semis_right = id_equipo2;
                                        ocultarImagenPosiciones();
                                }
                        }
                }
           }
           else{
                pasarganador("",id_posicion1);
                pasarganador("",id_posicion2);
                ocultarImagenPosiciones();
           }
        }


        /**
         * id_input: id de un input que representa a un equipo en el fixture.
         * id_posicion: id de un input en el fixture al cuál irá el equipo ganador.
         * Se encarga de pasar el equipo a la posición del fixture adecuada.
         *
         * **/
        function pasarganador(id_input,id_posicion){
                var id_span2 = "#equipo-"+id_posicion;
                var id_img2 = "#bandera-"+id_posicion;
                var selector_phone_span2 = "#equipo-phone-" + id_posicion;
                var selector_phone_img2 = "#bandera-phone-" + id_posicion;
                var id_phone = "#phone-" + id_posicion;
                var id_p = "#" + id_posicion

                //$(id_p).val(0);
                //$(id_phone).val(0);

                if(id_input!=""){
                        var id_span1 = "#equipo-"+id_input;
                        var id_img1 = "#bandera-"+id_input;
                        var selector_imagen = "" + $(id_img1).attr('src') + "";
                        
                        
                        $(id_span2).html($(id_span1).html());
                        $(id_img2).attr("src",selector_imagen);
                        

                        /* phone */
                        $(selector_phone_span2).html($(id_span1).html());
                        $(selector_phone_img2).attr("src",selector_imagen);
                        /* fin phone */
                        
                }else{
                        if (id_posicion.charAt(id_posicion.length-1)%2==0){
                                $(id_span2).html("Equipo 1");
                                $(id_img2).attr("src","http://localhost/fixture/static/img/sinbandera.jpg");

                                /* phone */
                                $(selector_phone_span2).html("Equipo 1");
                                $(selector_phone_img2).attr("src","http://localhost/fixture/static/img/sinbandera.jpg");
                                /* fin phone */
                        }
                        else{
                                $(id_span2).html("Equipo 2");
                                $(id_img2).attr("src","http://localhost/fixture/static/img/sinbandera.jpg");
                                
                                /* phone */
                                $(selector_phone_span2).html("Equipo 2");
                                $(selector_phone_img2).attr("src","http://localhost/fixture/static/img/sinbandera.jpg");
                                /* fin phone */
                        }
                }
        }


        /**
         * id_input: apunta a un input type number dentro de la tabla de fixture.
         * Retorna verdadero si hay un equipo en ese id_input, sino falso.
         * **/
        function hayEquipo(id_input){
            var id_span = "equipo-"+id_input;
            var id_img = "bandera-"+id_input;
            var imagen_source = document.getElementById(id_img).src;
            var texto = document.getElementById(id_span).innerHTML;
            if((imagen_source=="http://localhost/fixture/static/img/sinbandera.jpg") || (texto =="Equipo 1") || (texto == "Equipo 2")) {
                ocultarImagenPosiciones();    
                return false;
             }
            else return true;
        }


        function ocultarImagenPosiciones(){
                $("#numero1-final-0").hide();
                $("#numero2-final-0").hide();
                $("#numero1-final-1").hide();
                $("#numero2-final-1").hide();
                /* phone */
                $("#numero1-phone-final-0").hide();
                $("#numero2-phone-final-0").hide();
                $("#numero1-phone-final-1").hide();
                $("#numero2-phone-final-1").hide();
                /* fin phone */
                $("#numero-3puesto-0").hide();
                $("#numero-3puesto-1").hide();
                /* phone */
                $("#numero-phone-3puesto-0").hide();
                $("#numero-phone-3puesto-1").hide();
                /* fin phone */
                $("#equipo-ganador").html("Equipo Ganador");
                $("#bandera-ganador").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                /* phone */
                $("#equipo-ganador-phone").html("Equipo Ganador");
                $("#bandera-ganador-phone").attr("src","http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg");
                /* fin phone */
        }