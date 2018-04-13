var app = (function(scope = {}) {
    let fixture = {};
	let modal_activo = "";

    var equipoFactory = (equipo) => {
        return Object.assign({},{nombre: equipo.nombre,
            foto: equipo.foto,
            puntos:0,
            goles_a_favor:0,
            goles_en_contra:0})
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
        {goles_local:0, goles_visitante:0,
        setGolesLocal: function(goles) {
            this.goles_local = parseInt(goles);
            this.equipoLocal.goles_a_favor += parseInt(goles);
            this.equipoVisitante.goles_en_contra += parseInt(goles);
        },
        setGolesVisitante: function(goles) {
            this.goles_visitante = parseInt(goles);
            this.equipoVisitante.goles_a_favor += parseInt(goles);
            this.equipoLocal.goles_en_contra += parseInt(goles);
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
                return 1;
            } else if (a.puntos < b.puntos){
                return -1;
            } else {
                if (a.goles_a_favor - a.goles_en_contra > b.goles_a_favor - b.goles_en_contra){
                    return 1;
                } else if (a.goles_a_favor - a.goles_en_contra < b.goles_a_favor - b.goles_en_contra){
                    return -1;
                } else {
                    if (a.goles_a_favor > b.goles_a_favor){
                        return 1;
                    } else if (a.goles_a_favor < b.goles_a_favor){
                        return -1;
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
            setGanador: function(x) {this.ganador = x},
            getGanador: () => {return this.ganador},
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

            $(selector_imagen_local).attr("src",imagen_local);
            $(selector_nombre_local).html(partido.equipoLocal.nombre);
            $(selector_imagen_visitante).attr("src",imagen_visitante);
            $(selector_nombre_visitante).html(partido.equipoVisitante.nombre);
            $(selector_estadio_horario).html(estadio_horario);
        }
    }
	
	
	var aceptarModal = () => {
        //console.log("El modal activo es: " + modal_activo);
        var grupo = fixture.getGrupo(modal_activo);
        var equipos;
        //console.log(grupo.partidos[0]);
        var inputs = $(".input_modal");
        var contador = 0;

        //recorro inputs y seteo partidos
        for (var i=0;i<grupo.partidos.length;i++){
            grupo.partidos[i].setGolesLocal( inputs[contador].value );
            contador++;
            grupo.partidos[i].setGolesVisitante ( inputs[contador].value );
            contador++;
        }
        //calculo ganador
        var equipo_ganador;
        for (var i=0;i<grupo.partidos.length;i++){
            if (grupo.partidos[i].getGanador() == null){
                grupo.partidos[i].equipoLocal.puntos += 1;
                grupo.partidos[i].equipoVisitante.puntos += 1;
            } else {
                equipo_ganador =  grupo.partidos[i].getGanador();
                equipo_ganador.puntos = equipo_ganador.puntos + 3 
            }
        }
        for (var i=0;i<grupo.equipos.length;i++){
            console.log(grupo.equipos[i])
        }
        //armo tabla con puntos y goles (Reordenando los td de la tabla del grupo correspondiente)
        grupo.ordenarEquipos();
        var selector = "#grupo" + grupo.letra;
        $(selector).html(app.templates.grupoTemplate(grupo));
		
        //paso datos a llaves-phone y llaves-desktop
    }

    return Object.assign(scope, {getFixture,run,grupoFactory,fixtureFactory,cargarModal,aceptarModal});

})();