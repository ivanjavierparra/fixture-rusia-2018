var app = (function(scope = {}) {
    let fixture = {};
    let modal_activo = "";
    let historico_equipos_ganadores = [];
    

    var equipoFactory = (equipo) => {
        return Object.assign({},{nombre: equipo.nombre,
            foto: equipo.foto,
            puntos: equipo.puntos || 0,
            goles_a_favor: equipo.goles_a_favor || 0,
            goles_en_contra: equipo.goles_en_contra || 0})
    }
 
    var partidoFactory = (partido,equipolocal,equipovisitante) => {
        return Object.assign({},{
            estadio: partido.estadio,
            dia: partido.dia,
            mes: partido.mes,
            hora: partido.hora,
            equipoLocal: equipolocal,
            equipoVisitante: equipovisitante
        },
        {goles_local: partido.goles_local, 
        goles_visitante: partido.goles_visitante,
        setGolesLocal: function(goles) {
            if(goles)
                this.goles_local = parseInt(goles);
            else
                this.goles_local = null;
        },
        setGolesVisitante: function(goles) {
            if(goles)
                this.goles_visitante = parseInt(goles);
            else
                this.goles_visitante = null;
        },
        setGolesEquipos: function(){
            this.equipoLocal.goles_a_favor += this.goles_local;
            this.equipoLocal.goles_en_contra += this.goles_visitante;
            this.equipoVisitante.goles_a_favor += this.goles_visitante;
            this.equipoVisitante.goles_en_contra += this.goles_local;
        },
        getGanador: function() {
            if (this.goles_local > this.goles_visitante){
                return this.equipoLocal;
            } else if (this.goles_local < this.goles_visitante) {
                return this.equipoVisitante;
            } else {
                return null;
            }
        }
        })
    }

    var grupoFactory = (grupo) => {
        var equiposACargar = [];
        for(var i = 0; i < grupo.equipos.length; i++){
            equiposACargar[i] = equipoFactory(grupo.equipos[i]);
        }

        var partidosACargar = [];
        var equipolocal;
        var equipovisitante;
        for(var i = 0; i < grupo.partidos.length; i++){

            for (var j= 0; j< equiposACargar.length;j++){
                if (equiposACargar[j].nombre == grupo.partidos[i].equipoLocal.nombre){
                   equipolocal = equiposACargar[j];
                }
                if (equiposACargar[j].nombre == grupo.partidos[i].equipoVisitante.nombre){
                   equipovisitante = equiposACargar[j];
                }
            }
            partidosACargar[i] = partidoFactory(grupo.partidos[i],equipolocal,equipovisitante);
        }

        function comparacionEquipos(a,b){
            if(a.puntos > b.puntos){
                return -1;
            } else if (a.puntos < b.puntos){
                return 1;
            } else {
                if (a.goles_a_favor - a.goles_en_contra > b.goles_a_favor - b.goles_en_contra){
                    return -1;
                } else if (a.goles_a_favor - a.goles_en_contra < b.goles_a_favor - b.goles_en_contra){
                    return 1;
                } else {
                    if (a.goles_a_favor > b.goles_a_favor){
                        return -1;
                    } else if (a.goles_a_favor < b.goles_a_favor){
                        return 1;
                    }
                }
            }
            return 0;
        };
    
        return Object.assign({},{
            letra:grupo.letra,
            posicion1:grupo.posicion1,
            posicion2:grupo.posicion2,
            equipos: equiposACargar,
            partidos: partidosACargar,
            ordenarEquipos: function(){
                this.equipos.sort(comparacionEquipos);
            }
        })
    }

    var fixtureFactory = (datos) => {
        var gruposACargar = [];
        for(var i = 0; i < datos.grupos.length; i++){ // probar con datos.length
            gruposACargar[i] = grupoFactory(datos.grupos[i]) // probar con datos[i]
        }
        return Object.assign({},{grupos: gruposACargar,
        getGrupo: function(letra){
            for(var i = 0; i< this.grupos.length; i++){
                if (this.grupos[i].letra == letra){
                    return this.grupos[i];
                }
            }

        } })
    }

    var run = (datos) => {
        fixture = fixtureFactory(datos);
    }

    var getFixture = () => {return fixture} 

    var cargarModal = (letra) => {
		modal_activo = letra;
        var grupo = fixture.getGrupo(letra);
        for (var i=0; i<grupo.equipos.length;i++){
            grupo.equipos[i].puntos = 0;
            grupo.equipos[i].goles_a_favor = 0;
            grupo.equipos[i].goles_en_contra = 0;
        }
        //Cargo los inputs del equipo correspondinte inputs para cargar los de otro grupo;
        for (var i=0;i<grupo.partidos.length;i++){
            var partido = grupo.partidos[i];
            var numero_partido = i+1;
            var selector_imagen_local = "#imagen_local_"+ numero_partido;
            var selector_nombre_local = "#nombre_local_"+ numero_partido;
            var selector_imagen_visitante = "#imagen_visitante_"+ numero_partido;
            var selector_nombre_visitante = "#nombre_visitante_"+ numero_partido;
            var imagen_local = "static/img/banderas/"+partido.equipoLocal.foto+".png";
            var imagen_visitante = "static/img/banderas/"+partido.equipoVisitante.foto+".png";
            var selector_estadio_horario = "#partido" + numero_partido + "-info";
            var estadio_horario = "Estudio:" + partido.estadio.nombre + " Fecha: " +
            partido.dia + "/" + partido.mes + " " + partido.hora + ":00";
            var selector_input_local = "#id_input_local_" + numero_partido;
            var selector_input_visitante = "#id_input_visitante_" + numero_partido;

            $(selector_imagen_local).attr("src",imagen_local);
            $(selector_nombre_local).html(partido.equipoLocal.nombre);
            $(selector_input_local).val(partido.goles_local);
            $(selector_input_visitante).val(partido.goles_visitante);
            $(selector_imagen_visitante).attr("src",imagen_visitante);
            $(selector_nombre_visitante).html(partido.equipoVisitante.nombre);
            $(selector_estadio_horario).html(estadio_horario);
        }
    }
	
	
	var aceptarModal = () => {
        var grupo = fixture.getGrupo(modal_activo);
        var equipos;
        var inputs = $(".input_modal");
        var contador = 0;
        //recorro inputs y seteo partidos
        for (var i=0;i<grupo.partidos.length;i++){
            if (inputs[contador].value != "" && inputs[contador+1].value != ""){
                grupo.partidos[i].setGolesLocal( inputs[contador].value );
                contador++;
                grupo.partidos[i].setGolesVisitante ( inputs[contador].value );
                contador++;
            } else {
                grupo.partidos[i].setGolesLocal(null);
                grupo.partidos[i].setGolesVisitante(null);
                contador += 2;
            }
        }
        //calculo ganador
        var equipo_ganador;
        for (var i=0;i<grupo.partidos.length;i++){
            if (grupo.partidos[i].goles_local != null && grupo.partidos[i].goles_visitante != null){
                grupo.partidos[i].setGolesEquipos();
                if (grupo.partidos[i].getGanador() == null){
                    grupo.partidos[i].equipoLocal.puntos += 1;
                    grupo.partidos[i].equipoVisitante.puntos += 1;
                } else {
                    equipo_ganador =  grupo.partidos[i].getGanador();
                    equipo_ganador.puntos = equipo_ganador.puntos + 3 
                }
            }
        }
        //armo tabla con puntos y goles (Reordenando los td de la tabla del grupo correspondiente)
        grupo.ordenarEquipos();
        var selector = "#grupo" + grupo.letra;
        $(selector).html(app.templates.grupoTemplate(grupo));
		
        
        var pos1 = "" +  grupo.posicion1.fase + "-" + grupo.posicion1.tipo + "-" + grupo.posicion1.lugar + "";
        var selector_input_1 = pos1.toLowerCase();
        var pos2 = "" +  grupo.posicion2.fase + "-" + grupo.posicion2.tipo + "-" + grupo.posicion2.lugar + "";
        var selector_input_2 = pos2.toLowerCase();

        /* desktop */
        var sd = "#" + selector_input_1;
        $(sd).val(0);
        sd = "#" + selector_input_2;
        $(sd).val(0);
        /* fin desktop */
        
        /* phone */
        var sp = "#phone-" + selector_input_1;
        $(sp).val(0);
        sp = "#phone-" + selector_input_2;
        $(sp).val(0);
        /* fin phone */

        
        //---->paso datos a llaves-phone y llaves-desktop<---------
        //validacion: si usuario me borra todo el modal, actualizo la tabla.
        if((grupo.equipos[0].puntos == 0) && ( (grupo.equipos[0].goles_a_favor - grupo.equipos[0].goles_en_contra )==0 )){
            var span1 = "#equipo-" + selector_input_1;
            var img1 = "#bandera-" + selector_input_1;

            var span2 = "#equipo-" + selector_input_2;
            var img2 = "#bandera-" + selector_input_2;

            $(span1).html("Equipo 1"); //equipos[0] es el ganador del grupo
            $(img1).attr("src","static/img/sinbandera.jpg");
            
            $(span2).html("Equipo 2"); //equipos[1] es el segundo del grupo
            $(img2).attr("src","static/img/sinbandera.jpg");
            /* fin desktop */

            /* phone */
            var span1_phone = "#equipo-phone-" + selector_input_1;
            var img1_phone = "#bandera-phone-" + selector_input_1;
            
            
            var span2_phone = "#equipo-phone-" + selector_input_2;
            var img2_phone = "#bandera-phone-" + selector_input_2;
            

            $(span1_phone).html("Equipo 1"); //equipos[0] es el ganador del grupo
            $(img1_phone).attr("src","static/img/sinbandera.jpg");
            
            $(span2_phone).html("Equipo 2"); //equipos[1] es el segundo del grupo
            $(img2_phone).attr("src","static/img/sinbandera.jpg");
            /* fin phone */
            arreglar_fixture_empate(selector_input_1);
            arreglar_fixture_empate(selector_input_2);
            ocultarImagenPosiciones();
        }
        else{
            //aca hacer una case segun modal....function cambiaron_ganadores(equipo1,equipo2)
            cambiaron_ganadores(grupo.equipos[0],grupo.equipos[1]);

            /* desktop */
            var span1 = "#equipo-" + selector_input_1;
            var img1 = "#bandera-" + selector_input_1;

            var span2 = "#equipo-" + selector_input_2;
            var img2 = "#bandera-" + selector_input_2;

            $(span1).html(grupo.equipos[0].nombre); //equipos[0] es el ganador del grupo
            $(img1).attr("src","static/img/banderas/" + grupo.equipos[0].foto + ".png");
            
            $(span2).html(grupo.equipos[1].nombre); //equipos[1] es el segundo del grupo
            $(img2).attr("src","static/img/banderas/" + grupo.equipos[1].foto + ".png");
            /* fin desktop */

            /* phone */
            var span1_phone = "#equipo-phone-" + selector_input_1;
            var img1_phone = "#bandera-phone-" + selector_input_1;
            
            var span2_phone = "#equipo-phone-" + selector_input_2;
            var img2_phone = "#bandera-phone-" + selector_input_2;

            $(span1_phone).html(grupo.equipos[0].nombre); //equipos[0] es el ganador del grupo
            $(img1_phone).attr("src","static/img/banderas/" + grupo.equipos[0].foto + ".png");
            
            $(span2_phone).html(grupo.equipos[1].nombre); //equipos[1] es el segundo del grupo
            $(img2_phone).attr("src","static/img/banderas/" + grupo.equipos[1].foto + ".png");
            /* fin phone */
        }
        $('#modal-partidos').modal('toggle');
    }

    function cambiaron_ganadores(equipo1,equipo2){
        var grupo = fixture.getGrupo(modal_activo);
        var pos1 = "" +  grupo.posicion1.fase + "-" + grupo.posicion1.tipo + "-" + grupo.posicion1.lugar + "";
        var selector1 = pos1.toLowerCase();
        var pos2 = "" +  grupo.posicion2.fase + "-" + grupo.posicion2.tipo + "-" + grupo.posicion2.lugar + "";
        var selector2 = pos2.toLowerCase();
        switch(modal_activo){
            case 'A':
                if(!historico_equipos_ganadores[0]){
                    historico_equipos_ganadores[0] = equipo1;
                }
                else{
                    if(historico_equipos_ganadores[0] != equipo1){
                        arreglar_fixture_empate(selector1);//poner id
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[0] = equipo1;
                    }
                }
                if(!historico_equipos_ganadores[1]){
                    historico_equipos_ganadores[1] = equipo2;
                }
                else{
                    if(historico_equipos_ganadores[1] != equipo2){
                        arreglar_fixture_empate(selector2);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[2] = equipo2;
                    }
                }
                break;
            case 'B':
                if(!historico_equipos_ganadores[2]){
                    historico_equipos_ganadores[2] = equipo1;
                }
                else{
                    if(historico_equipos_ganadores[2] != equipo1){
                        arreglar_fixture_empate(selector1);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[2] = equipo1;
                    }
                }
                if(!historico_equipos_ganadores[3]){
                    historico_equipos_ganadores[3] = equipo2;
                }
                else{
                    if(historico_equipos_ganadores[3] != equipo2){
                        arreglar_fixture_empate(selector2);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[3] = equipo2;
                    }
                }
                break;
            case 'C':
                if(!historico_equipos_ganadores[4]){
                    historico_equipos_ganadores[4] = equipo1;
                }
                else{
                    if(historico_equipos_ganadores[4] != equipo1){
                        arreglar_fixture_empate(selector1);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[4] = equipo1;
                    }
                }
                if(!historico_equipos_ganadores[5]){
                    historico_equipos_ganadores[5] = equipo2;
                }
                else{
                    if(historico_equipos_ganadores[5] != equipo2){
                        arreglar_fixture_empate(selector2);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[5] = equipo2;
                    }
                }
                break;
            case 'D':
                if(!historico_equipos_ganadores[6]){
                    historico_equipos_ganadores[6] = equipo1;
                }
                else{
                    if(historico_equipos_ganadores[6] != equipo1){
                        arreglar_fixture_empate(selector1);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[6] = equipo1;
                    }
                }
                if(!historico_equipos_ganadores[7]){
                    historico_equipos_ganadores[7] = equipo2;
                }
                else{
                    if(historico_equipos_ganadores[7] != equipo2){
                        arreglar_fixture_empate(selector2);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[7] = equipo2;
                    }
                }
                break;
            case 'E':
                if(!historico_equipos_ganadores[8]){
                    historico_equipos_ganadores[8] = equipo1;
                }
                else{
                    if(historico_equipos_ganadores[8] != equipo1){
                        arreglar_fixture_empate(selector1);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[8] = equipo1;
                    }
                }
                if(!historico_equipos_ganadores[9]){
                    historico_equipos_ganadores[9] = equipo2;
                }
                else{
                    if(historico_equipos_ganadores[9] != equipo2){
                        arreglar_fixture_empate(selector2);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[9] = equipo2;
                    }
                }
                break;
            case 'F':
                if(!historico_equipos_ganadores[10]){
                    historico_equipos_ganadores[10] = equipo1;
                }
                else{
                    if(historico_equipos_ganadores[10] != equipo1){
                        arreglar_fixture_empate(selector1);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[10] = equipo1;
                    }
                }
                if(!historico_equipos_ganadores[11]){
                    historico_equipos_ganadores[11] = equipo2;
                }
                else{
                    if(historico_equipos_ganadores[11] != equipo2){
                        arreglar_fixture_empate(selector2);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[11] = equipo2;
                    }
                }
                break;
            case 'G':
                if(!historico_equipos_ganadores[12]){
                    historico_equipos_ganadores[12] = equipo1;
                }
                else{
                    if(historico_equipos_ganadores[12] != equipo1){
                        arreglar_fixture_empate(selector1);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[12] = equipo1;
                    }
                }
                if(!historico_equipos_ganadores[13]){
                    historico_equipos_ganadores[13] = equipo2;
                }
                else{
                    if(historico_equipos_ganadores[13] != equipo2){
                        arreglar_fixture_empate(selector2);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[13] = equipo2;
                    }
                }
                break;
            case 'H':
                if(!historico_equipos_ganadores[14]){
                    historico_equipos_ganadores[14] = equipo1;
                }
                else{
                    if(historico_equipos_ganadores[14] != equipo1){
                        arreglar_fixture_empate(selector1);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[14] = equipo1;
                    }
                }
                if(!historico_equipos_ganadores[15]){
                    historico_equipos_ganadores[15] = equipo2;
                }
                else{
                    if(historico_equipos_ganadores[15] != equipo2){
                        arreglar_fixture_empate(selector2);
                        ocultarImagenPosiciones();
                        historico_equipos_ganadores[15] = equipo2;
                    }
                }
                break;    
        }
    }

    function validar_inputs_modal(input){
        if((input.value.length>2) || (input.value>10)){
            input.value = 0;
        }
    }

    return Object.assign(scope, {getFixture,run,grupoFactory,fixtureFactory,cargarModal,aceptarModal,cambiaron_ganadores,validar_inputs_modal});

})();