var app = (function(scope = {}) {
    let fixture = {};

    var personaFactory = (datos) => {
        let edad = 1;
        return Object.assign({}, datos, {
            cumplirAnio: function() {
                return edad++;
            },
            anios: function() {
                return edad;
            }
        });
    }

    var equipoFactory = (equipo) => {
        return Object.assign({},{nombre: equipo.nombre})
    }
 
    var partidoFactory = (partido) => {
        return Object.assign({},partido)
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
            poscion1:grupo.posicion1,
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
        for(var i = 0; i < datos.grupos.length; i++){
            gruposACargar[i] = grupoFactory(datos.grupos[i])
        }
        return Object.assign({},{grupos: gruposACargar,getCampeon: () => {return "El Campeon es Argentina"} })
    }

    var run = (datos) => {
        fixture = fixtureFactory(datos);
    }

    var getFixture = () => {return fixture} 

    return Object.assign(scope, {getFixture,run,grupoFactory,fixtureFactory});

})();