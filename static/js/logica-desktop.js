        /**
        * Valida que sólo se ingresen números en los input type number.
        */
        $("[type='number']").keypress(function (evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) evt.preventDefault();
            
        });

       
        /**
            * id: id perteneciente a algún input type number (representa goles de un equipo).
            * Evalúa goles de un equipo y los compara con su rival, el ganador pasa a la fase correspondiente.
        */
        function verinputs(id){
            if (!hayEquipo(id))return;
            switch(id){
                case 'octavos-left-0':
                        console.log("se cambio valores en octavos-left-0");
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-1"))return;
                        validarinputs("octavos-left-1");
                        if( (!$('#octavos-left-1').val()=="") && ($('#octavos-left-1').val().length<=2) && (!$('#octavos-left-1').val()<=10)) computar_ganador("octavos-left-0","octavos-left-1","cuartos-left-0"); //verifico si el otro input tiene un valor correcto.
                        break;
                case 'octavos-left-1':
                        console.log("se cambio valores en octavos-left-1");
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-0"))return;
                        validarinputs("octavos-left-0");
                        if( (!$('#octavos-left-0').val()=="") && ($('#octavos-left-0').val().length<=2) && (!$('#octavos-left-0').val()<=10)) computar_ganador("octavos-left-0","octavos-left-1","cuartos-left-0");
                        break;
                case 'octavos-left-2':
                        console.log("se cambio valores en octavos-left-2");
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-3"))return;
                        validarinputs("octavos-left-3");
                        if( (!$('#octavos-left-3').val()=="") && ($('#octavos-left-3').val().length<=2) && (!$('#octavos-left-3').val()<=10)) computar_ganador("octavos-left-2","octavos-left-3","cuartos-left-1");
                        break;
                case 'octavos-left-3':
                        console.log("se cambio valores en octavos-left-3");
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-2"))return;
                        validarinputs("octavos-left-2");
                        if( (!$('#octavos-left-2').val()=="") && ($('#octavos-left-2').val().length<=2) && (!$('#octavos-left-2').val()<=10)) computar_ganador("octavos-left-2","octavos-left-3","cuartos-left-1");
                        break;
                case 'octavos-left-4':
                        console.log("se cambio valores en octavos-left-4");
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-5"))return;
                        validarinputs("octavos-left-5");
                        if( (!$('#octavos-left-5').val()=="") && ($('#octavos-left-5').val().length<=2) && (!$('#octavos-left-5').val()<=10)) computar_ganador("octavos-left-4","octavos-left-5","cuartos-left-2");
                        break;
                case 'octavos-left-5':
                        console.log("se cambio valores en octavos-left-5");
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-4"))return;
                        validarinputs("octavos-left-4");
                        if( (!$('#octavos-left-4').val()=="") && ($('#octavos-left-4').val().length<=2) && (!$('#octavos-left-4').val()<=10)) computar_ganador("octavos-left-4","octavos-left-5","cuartos-left-2");
                        break;
                case 'octavos-left-6':
                        console.log("se cambio valores en octavos-left-6");
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-7"))return;
                        validarinputs("octavos-left-7");
                        if( (!$('#octavos-left-7').val()=="") && ($('#octavos-left-7').val().length<=2) && (!$('#octavos-left-7').val()<=10)) computar_ganador("octavos-left-6","octavos-left-7","cuartos-left-3");
                        break;
                case 'octavos-left-7':
                        console.log("se cambio valores en octavos-left-7");
                        validarinputs(id);
                        if (!hayEquipo("octavos-left-6"))return;
                        validarinputs("octavos-left-6");
                        if( (!$('#octavos-left-6').val()=="") && ($('#octavos-left-6').val().length<=2) && (!$('#octavos-left-6').val()<=10)) computar_ganador("octavos-left-6","octavos-left-7","cuartos-left-3");
                        break;
                case 'octavos-right-0':
                        console.log("se cambio valores en octavos-right-0");
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-1"))return;
                        validarinputs("octavos-right-1");
                        if( (!$('#octavos-right-1').val()=="") && ($('#octavos-right-1').val().length<=2) && (!$('#octavos-right-1').val()<=10)) computar_ganador("octavos-right-0","octavos-right-1","cuartos-right-0");
                        break;
                case 'octavos-right-1':
                        console.log("se cambio valores en octavos-right-1");
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-0"))return;
                        validarinputs("octavos-right-0");
                        if( (!$('#octavos-right-0').val()=="") && ($('#octavos-right-0').val().length<=2) && (!$('#octavos-right-0').val()<=10)) computar_ganador("octavos-right-0","octavos-right-1","cuartos-right-0");
                        break;
                case 'octavos-right-2':
                        console.log("se cambio valores en octavos-right-2");
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-3"))return;
                        validarinputs("octavos-right-3");
                        if( (!$('#octavos-right-3').val()=="") && ($('#octavos-right-3').val().length<=2) && (!$('#octavos-right-3').val()<=10)) computar_ganador("octavos-right-2","octavos-right-3","cuartos-right-1");
                        break;
                case 'octavos-right-3':
                        console.log("se cambio valores en octavos-right-3");
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-2"))return;
                        validarinputs("octavos-right-2");
                        if( (!$('#octavos-right-2').val()=="") && ($('#octavos-right-2').val().length<=2) && (!$('#octavos-right-2').val()<=10)) computar_ganador("octavos-right-2","octavos-right-3","cuartos-right-1");
                        break;
                case 'octavos-right-4':
                        console.log("se cambio valores en octavos-right-4");
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-5"))return;
                        validarinputs("octavos-right-5");
                        if( (!$('#octavos-right-5').val()=="") && ($('#octavos-right-5').val().length<=2) && (!$('#octavos-right-5').val()<=10)) computar_ganador("octavos-right-4","octavos-right-5","cuartos-right-2");
                        break;
                case 'octavos-right-5':
                        console.log("se cambio valores en octavos-right-5");
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-4"))return;
                        validarinputs("octavos-right-4");
                        if( (!$('#octavos-right-4').val()=="") && ($('#octavos-right-4').val().length<=2) && (!$('#octavos-right-4').val()<=10)) computar_ganador("octavos-right-4","octavos-right-5","cuartos-right-2");
                        break;
                case 'octavos-right-6':
                        console.log("se cambio valores en octavos-right-6");
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-7"))return;
                        validarinputs("octavos-right-7");
                        if( (!$('#octavos-right-7').val()=="") && ($('#octavos-right-7').val().length<=2) && (!$('#octavos-right-7').val()<=10)) computar_ganador("octavos-right-6","octavos-right-7","cuartos-right-3");
                        break;
                case 'octavos-right-7':
                        console.log("se cambio valores en octavos-right-7");
                        validarinputs(id);
                        if (!hayEquipo("octavos-right-6"))return;
                        validarinputs("octavos-right-6");
                        if( (!$('#octavos-right-6').val()=="") && ($('#octavos-right-6').val().length<=2) && (!$('#octavos-right-6').val()<=10)) computar_ganador("octavos-right-6","octavos-right-7","cuartos-right-3");
                        break;
                case 'cuartos-left-0':
                        console.log("se cambio valores en cuartos-left-0");
                        validarinputs(id);
                        if (!hayEquipo("cuartos-left-1"))return;
                        validarinputs("cuartos-left-1");
                        if( (!$('#cuartos-left-1').val()=="") && ($('#cuartos-left-1').val().length<=2) && (!$('#cuartos-left-1').val()<=10)) computar_ganador("cuartos-left-0","cuartos-left-1","semis-left-0");
                        break;
                case 'cuartos-left-1':
                        console.log("se cambio valores en cuartos-left-1");
                        validarinputs(id);
                        if (!hayEquipo("cuartos-left-0"))return;
                        validarinputs("cuartos-left-0");
                        if( (!$('#cuartos-left-0').val()=="") && ($('#cuartos-left-0').val().length<=2) && (!$('#cuartos-left-0').val()<=10)) computar_ganador("cuartos-left-0","cuartos-left-1","semis-left-0");
                        break;
                case 'cuartos-left-2':
                        console.log("se cambio valores en cuartos-left-2");
                        validarinputs(id);
                        if (!hayEquipo("cuartos-left-3"))return;
                        validarinputs("cuartos-left-3");
                        if( (!$('#cuartos-left-3').val()=="") && ($('#cuartos-left-3').val().length<=2) && (!$('#cuartos-left-3').val()<=10)) computar_ganador("cuartos-left-2","cuartos-left-3","semis-left-1");
                        break;
                case 'cuartos-left-3':
                        console.log("se cambio valores en cuartos-left-3");
                        validarinputs(id);
                        if (!hayEquipo("cuartos-left-2"))return;
                        validarinputs("cuartos-left-2");
                        if( (!$('#cuartos-left-2').val()=="") && ($('#cuartos-left-2').val().length<=2) && (!$('#cuartos-left-2').val()<=10)) computar_ganador("cuartos-left-2","cuartos-left-3","semis-left-1");
                        break;
                case 'cuartos-right-0':
                        console.log("se cambio valores en cuartos-right-0");
                        validarinputs(id);
                        if (!hayEquipo("cuartos-right-1"))return;
                        validarinputs("cuartos-right-1");
                        if( (!$('#cuartos-right-1').val()=="") && ($('#cuartos-right-1').val().length<=2) && (!$('#cuartos-right-1').val()<=10)) computar_ganador("cuartos-right-0","cuartos-right-1","semis-right-0");
                        break;
                case 'cuartos-right-1':
                        console.log("se cambio valores en cuartos-right-1");
                        validarinputs(id);
                        if (!hayEquipo("cuartos-right-0"))return;
                        validarinputs("cuartos-right-0");
                        if( (!$('#cuartos-right-0').val()=="") && ($('#cuartos-right-0').val().length<=2) && (!$('#cuartos-right-0').val()<=10)) computar_ganador("cuartos-right-0","cuartos-right-1","semis-right-0");
                        break;
                case 'cuartos-right-2':
                        console.log("se cambio valores en cuartos-right-2");
                        validarinputs(id);
                        if (!hayEquipo("cuartos-right-3"))return;
                        validarinputs("cuartos-right-3");
                        if( (!$('#cuartos-right-3').val()=="") && ($('#cuartos-right-3').val().length<=2) && (!$('#cuartos-right-3').val()<=10)) computar_ganador("cuartos-right-2","cuartos-right-3","semis-right-1");
                        break;
                case 'cuartos-right-3':
                        console.log("se cambio valores en cuartos-right-3");
                        validarinputs(id);
                        if (!hayEquipo("cuartos-right-2"))return;
                        validarinputs("cuartos-right-2");
                        if( (!$('#cuartos-right-2').val()=="") && ($('#cuartos-right-2').val().length<=2) && (!$('#cuartos-right-2').val()<=10)) computar_ganador("cuartos-right-2","cuartos-right-3","semis-right-1");
                        break;
                case 'semis-left-0':
                        console.log("se cambio valores en semis-left-0");
                        validarinputs(id);
                        if (!hayEquipo("semis-left-1"))return;
                        validarinputs("semis-left-1");
                        if( (!$('#semis-left-1').val()=="") && ($('#semis-left-1').val().length<=2) && (!$('#semis-left-1').val()<=10)) computar_ganador2("semis-left-0","semis-left-1","final-0","3puesto-0");
                        break;
                case 'semis-left-1':
                        console.log("se cambio valores en semis-left-1");
                        validarinputs(id);
                        if (!hayEquipo("semis-left-0"))return;
                        validarinputs("semis-left-0");
                        if( (!$('#semis-left-0').val()=="") && ($('#semis-left-0').val().length<=2) && (!$('#semis-left-0').val()<=10)) computar_ganador2("semis-left-0","semis-left-1","final-0","3puesto-0");
                        break;
                case 'semis-right-0':
                        console.log("se cambio valores en semis-right-0");
                        validarinputs(id);
                        if (!hayEquipo("semis-right-1"))return;
                        validarinputs("semis-right-1");
                        if( (!$('#semis-right-1').val()=="") && ($('#semis-right-1').val().length<=2) && (!$('#semis-right-1').val()<=10)) computar_ganador2("semis-right-0","semis-right-1","final-1","3puesto-1");
                        break;
                case 'semis-right-1':
                        console.log("se cambio valores en semis-right-1");
                        validarinputs(id);
                        if (!hayEquipo("semis-right-0"))return;
                        validarinputs("semis-right-0");
                        if( (!$('#semis-right-0').val()=="") && ($('#semis-right-0').val().length<=2) && (!$('#semis-right-0').val()<=10)) computar_ganador2("semis-right-0","semis-right-1","final-1","3puesto-1");
                        break;
                case 'final-0':
                        console.log("se cambio valores en final-0");
                        validarinputs(id);
                        if (!hayEquipo("final-1"))return;
                        validarinputs("final-1");
                        if( (!$('#final-1').val()=="") && ($('#final-1').val().length<=2) && (!$('#final-1').val()<=10)) final("final-0","final-1");
                        break;
                case 'final-1':
                        console.log("se cambio valores en final-1");
                        validarinputs(id);
                        if (!hayEquipo("final-0"))return;
                        validarinputs("final-0");
                        if( (!$('#final-0').val()=="") && ($('#final-0').val().length<=2) && (!$('#final-0').val()<=10)) final("final-0","final-1");
                        break;
                case '3puesto-0':
                        console.log("se cambio valores en 3puesto-0");
                        validarinputs(id);
                        if (!hayEquipo("3puesto-1"))return;
                        validarinputs("3puesto-1");
                        if( (!$('#3puesto-1').val()=="") && ($('#3puesto-1').val().length<=2) && (!$('#3puesto-1').val()<=10)) tercer_puesto("3puesto-0","3puesto-1");
                        break;
                case '3puesto-1':
                        console.log("se cambio valores en 3puesto-1");
                        validarinputs(id);
                        if (!hayEquipo("3puesto-0"))return;
                        validarinputs("3puesto-0");
                        if( (!$('#3puesto-0').val()=="") && ($('#3puesto-0').val().length<=2) && (!$('#3puesto-0').val()<=10)) tercer_puesto("3puesto-0","3puesto-1");
                        break;
                
            }
        }
        

        /**
         * Verifica si un input no tiene nada, tiene un number de más de 2 dígitos y number es mayor a 10 goles. 
         * En tal caso, pone el input en 0.
        */
        function validarinputs(id){
            if ( ($('#'+id+'').val()=="") || ($('#'+id+'').val().length>2) || ($('#'+id+'').val()>10) ) $('#'+id+'').val(0);
        }



         /**
         * id_equipo1: id perteneciente a algún input type number (representa goles de un equipo). 
         * id_equipo2: id perteneciente a algún input type number (representa goles de un equipo). 
         * Comprueba qué equipo ganó el 1er puesto y cual el 2do puesto.
        */
        function final(id_equipo1,id_equipo2){
            
            var id_span;
            var id_img;
            
            if ( ($('#'+id_equipo1+'').val()) > ($('#'+id_equipo2+'').val()) ){ //ganó equipo1
                var id_span = "equipo-"+id_equipo1;
                var id_img = "bandera-"+id_equipo1;
                document.getElementById("equipo-ganador").innerHTML = document.getElementById(id_span).innerHTML;
                document.getElementById("bandera-ganador").src = document.getElementById(id_img).src;
                //muestro imágenes ocultas.
                document.getElementById("numero1-final-0").style.display = "inline";
                document.getElementById("numero2-final-0").style.display = "none";
                document.getElementById("numero1-final-1").style.display = "none";
                document.getElementById("numero2-final-1").style.display = "inline";
                
            }
            else if ( ($('#'+id_equipo1+'').val()) < ($('#'+id_equipo2+'').val()) ){ //ganó equipo2
                var id_span = "equipo-"+id_equipo2;
                var id_img = "bandera-"+id_equipo2;
                document.getElementById("equipo-ganador").innerHTML = document.getElementById(id_span).innerHTML;
                document.getElementById("bandera-ganador").src = document.getElementById(id_img).src;
                //muestro imágenes ocultas.
                document.getElementById("numero1-final-1").style.display = "inline";
                document.getElementById("numero2-final-1").style.display = "none";
                document.getElementById("numero1-final-0").style.display = "none";
                document.getElementById("numero2-final-0").style.display = "inline";
            }
            else{//empataron --> tengo que borrar campeón.
                document.getElementById("equipo-ganador").innerHTML = "Equipo Ganador";
                document.getElementById("bandera-ganador").src = "http://localhost/fixture-rusia-2018/static/img/sinbandera.jpg";
                //oculto imágenes
                document.getElementById("numero1-final-0").style.display = "none";
                document.getElementById("numero2-final-0").style.display = "none";
                document.getElementById("numero1-final-1").style.display = "none";
                document.getElementById("numero2-final-1").style.display = "none";
            }
        }


        /**
            * id_equipo1: id del input del equipo1.
            * id_equipo2: id del input del equipo2.
            * Comprueba quién ganó el 3er Puesto.
        */
       function tercer_puesto(id_equipo1,id_equipo2){
        if ( ($('#'+id_equipo1+'').val()) > ($('#'+id_equipo2+'').val()) ){ //ganó equipo1
                document.getElementById("numero-3puesto-0").style.display = "inline";
                document.getElementById("numero-3puesto-1").style.display = "none";
            }
            else if ( ($('#'+id_equipo1+'').val()) < ($('#'+id_equipo2+'').val()) ){ //ganó equipo2
                document.getElementById("numero-3puesto-0").style.display = "none";
                document.getElementById("numero-3puesto-1").style.display = "inline";
            }
            else{ //empate
                document.getElementById("numero-3puesto-0").style.display = "none";
                document.getElementById("numero-3puesto-1").style.display = "none";
            }
        }


        /**
         * id_equipo1: id del input del equipo1.
         * id_equipo2: id del input del equipo2.
         * id_posicion: id de un input en el fixture.
         * Verifica quien gano, y pasa su span e img a la posición del fixture dada por id_posicion.
         */
        function computar_ganador(id_equipo1,id_equipo2,id_posicion){
           if ( ($('#'+id_equipo1+'').val()) > ($('#'+id_equipo2+'').val()) ){ //ganó equipo1.
                console.log("gano equipo 1: " + $('#'+id_equipo1+'').val() + " goles / adversario: " + $('#'+id_equipo2+'').val() + " goles");
                pasarganador(id_equipo1,id_posicion);
           }
           else if  ( ($('#'+id_equipo1+'').val()) < ($('#'+id_equipo2+'').val()) ){ //ganó equipo2.
                console.log("gano equipo 2: " + $('#'+id_equipo1+'').val() + " goles / adversario: " + $('#'+id_equipo1+'').val() + " goles");
                pasarganador(id_equipo2,id_posicion);
           }
           else{ //empataron.
                console.log("Empate");
                pasarganador("",id_posicion);
           }
        }

        /**
         * id_equipo1: id del input del equipo 1 en el fixture.
         * id_equipo2: id del input del equipo 2 en el fixture.
         * id_posicion1: id que apunta a tabla finales.
         * id_posicion2: id que apunta a la tabla 3er puesto.
         * Comprueba qué equipo ganó el partido. El ganador pasa a tabla "final", el perdedor a la tabla "3er puesto".
         * **/
        function computar_ganador2(id_equipo1,id_equipo2,id_posicion1,id_posicion2){
           if ( ($('#'+id_equipo1+'').val()) > ($('#'+id_equipo2+'').val()) ){
                console.log("gano equipo 1");
                pasarganador(id_equipo1,id_posicion1);
                pasarganador(id_equipo2,id_posicion2);
           }
           else if  ( ($('#'+id_equipo1+'').val()) < ($('#'+id_equipo2+'').val()) ){
                console.log("gano equipo 2");
                pasarganador(id_equipo2,id_posicion1);
                pasarganador(id_equipo1,id_posicion2);
           }
           else{
                console.log("Empate");
                pasarganador("",id_posicion1);
                pasarganador("",id_posicion2);
           }
        }


        /**
         * id_input: id de un input que representa a un equipo en el fixture.
         * id_posicion: id de un input en el fixture al cuál irá el equipo ganador.
         * Se encarga de pasar el equipo a la posición del fixture adecuada.
         *
         * **/
        function pasarganador(id_input,id_posicion){
                var id_span2 = "equipo-"+id_posicion;
                var id_img2 = "bandera-"+id_posicion;

                if(id_input!=""){
                        var id_span1 = "equipo-"+id_input;
                        var id_img1 = "bandera-"+id_input;

                        //por que no anda?
                        //$('#'+id_span2+'').text($('#'+id_span2+'').text());
                        //$('#'+id_img2+'').attr("src",$('#'+id_img2+'').attr('src'));
                        
                        document.getElementById(id_span2).innerHTML = document.getElementById(id_span1).innerHTML;
                        document.getElementById(id_img2).src = document.getElementById(id_img1).src;
                }else{
                        if (id_posicion.charAt(id_posicion.length-1)%2==0){
                                console.log("Posicion: " + id_posicion);
                                document.getElementById(id_span2).innerHTML = "Equipo 1";
                                document.getElementById(id_img2).src = "http://localhost/fixture/static/img/sinbandera.jpg";
                        }
                        else{
                                console.log("Posicion: " + id_posicion);
                                document.getElementById(id_span2).innerHTML = "Equipo 2";
                                document.getElementById(id_img2).src = "http://localhost/fixture/static/img/sinbandera.jpg";
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
            if((imagen_source=="http://localhost/fixture/static/img/sinbandera.jpg") || (texto =="Equipo 1") || (texto == "Equipo 2")) return false;
            else return true;
        }