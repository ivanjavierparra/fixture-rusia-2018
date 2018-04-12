var app = (function(scope = {}) {
    let fixture = {};
	let modal_activo = "";

    var equipoFactory = (equipo) => {
        return Object.assign({},{nombre: equipo.nombre})
    }
 
    var partidoFactory = (partido) => {
        return Object.assign({},partido,{goles_local:0, goles_visitante:0,
        setGolesLocal: function(goles) {this.goles_local = goles},
        setGolesVisitante: function(x) {this.goles_visitante = x}
        })
    }

    var grupoFactory = (grupo) => {
        var equiposACargar = [];
        for(var i = 0; i < grupo.equipos.length; i++){
            equiposACargar[i] = equipoFactory(grupo.equipos[i]);
        }
        var partidosACargar = [];
        for(var i = 0; i < grupo.partidos.length; i++){
            partidosACargar[i] = partidoFactory(grupo.partidos[i]);
        }

        return Object.assign({},{
            letra:grupo.letra,
            posicion1:grupo.posicion1,
            posicion2:grupo.posicion2,
            equipos: equiposACargar,
            partidos: partidosACargar,
            getEquipo: function(nombre) {return this.equipos},
            setGanador: function(x) {this.ganador = x},
            getGanador: () => {return this.ganador}
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
            var imagen_local = "static/img/banderas/"+partido.equipoLocal.nombre+".png";
            var imagen_visitante = "static/img/banderas/"+partido.equipoVisitante.nombre+".png";

            $(selector_imagen_local).attr("src",imagen_local);
            $(selector_nombre_local).html(partido.equipoLocal.nombre);
            $(selector_imagen_visitante).attr("src",imagen_visitante);
            $(selector_nombre_visitante).html(partido.equipoVisitante.nombre);

        }
        
        console.log(grupo);

    }
	
	
	var aceptarModal = () => {
        console.log("El modal activo es: " + modal_activo);
        var grupo = fixture.getGrupo(modal_activo);
        console.log(grupo.partidos[0]);
        var inputs = $(".input_modal");
        var contador = 0;

        //recorro inputs y seteo partidos
        for (var i=0;i<grupo.partidos.length;i++){
            grupo.partidos[i].setGolesLocal ( inputs[contador].value );
            contador++;
            grupo.partidos[i].setGolesVisitante ( inputs[contador].value );
        }

        
        //calculo ganador



        //armo tabla con puntos y goles



        //paso datos a llaves-phone y llaves-desktop
    }

    return Object.assign(scope, {getFixture,run,grupoFactory,fixtureFactory,cargarModal,aceptarModal});

})();