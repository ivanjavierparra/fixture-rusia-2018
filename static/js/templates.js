(function(scope = {}) {
    
    var grupoTemplate = function(grupo) {
        return `<div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>
                        <button type="button" class="btn btn-info btn-sm" onclick="partidos('${grupo.letra}')">+</button>
                        Grupo ${grupo.letra}
                    </th>
                    <th>Pts.</th>
                    <th>+/-</th>
                </tr>
            </thead>
            <tbody>
                ${grupo.equipos.map(e => 
                    `<tr>
                        <td>
                            <img src="static/img/banderas/${e.foto}.png" height="24" width="24">${e.nombre}
                        </td>
                        <td style="text-align:center">${e.puntos}</td>
                        <td style="text-align:center">${e.goles_a_favor - e.goles_en_contra}</td>
                    </tr>        
                `).join("")}
            </tbody>
        </table>
        </div>`;
    }

    

    var partidoDesktopTemplate = function(partido){
        return `<div class="col-12 text-center">
        <div class="table-responsive" style="border-radius: 10px;background-color: #e4c275;">
            <table id="tabla-desktop-partido-${partido.numero}" class="table table-sm table-llaves">
                <thead>
                    <tr>
                        <th>
                            <button type="button" class="btn btn-info btn-sm" data-toggle="collapse" data-target="#datos-desktop-partido-${partido.numero}">+</button>
                            Partido ${partido.numero}
                        </th>                                
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="5">
                            <div id="datos-desktop-partido-${partido.numero}" class="collapse">
                            Fecha: ${partido.dia}/${partido.mes}<br>Horario: ${partido.hora} hs<br>Estadio: ${partido.estadio.nombre}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="border-top:#e4c275;">
                            <img id="bandera-local-desktop-partido-${partido.numero}" src="static/img/banderas/${partido.equipoLocal ? partido.equipoLocal.foto + ".png" : "sinbandera.jpg"}" height="24" width="24">
                            <span id="equipo-local-desktop-partido-${partido.numero}">${partido.equipoLocal ? partido.equipoLocal.nombre : "Equipo1"}</span>
                            <input id="goles-local-desktop-partido-${partido.numero}"  onchange="verinputs(this.id)" type="number"  size="1" min="0" max="10"style="font-size: 11px;text-align: center;width: 40px">
                        </td>
                    </tr>
                    <tr>
                        <td style="border-top:#e4c275;">
                            <img id="bandera-visitante-desktop-partido-${partido.numero}"  src="static/img/banderas/${partido.equipoVisitante ? partido.equipoVisitante.foto + ".png" : "sinbandera.jpg"}" height="24" width="24">
                            <span id="equipo-visitante-desktop-partido-${partido.numero}">${partido.equipoVisitante ? partido.equipoVisitante.nombre : "Equipo2"}</span>
                            <input id="goles-visitante-desktop-partido-${partido.numero}"  onchange="verinputs(this.id)" type="number" size="1" min="0" max="10" style="font-size: 11px;text-align: center;width: 40px">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        `;
    }

    var partidoPhoneTemplate = function(partido){
        return `<div id="phone-partido-${partido.numero}">
            <div style="margin-top: 10px;margin-bottom: 10px;">
                <center>
                <button type="button" class="btn btn-info btn-sm" data-toggle="collapse" data-target="#datos-phone-partido-${partido.numero}">+</button>
                Partido ${partido.numero}    
                <div id="phone-datos-partido-${partido.numero}" class="collapse">
                    Fecha: ${partido.dia}/${partido.mes}<br>Horario: ${partido.hora} hs<br>Estadio: ${partido.estadio.nombre}
                </div>
                </center>
            </div>
            <div class="row">
                <div class="col-4 text-center">
                    <img id="bandera-local-phone-partido-${partido.numero}" src="static/img/banderas/${partido.equipoLocal ? partido.equipoLocal.foto + ".png" : "sinbandera.jpg"}" height="24" width="24">
                    <span id="equipo-local-phone-partido-${partido.numero}">${partido.equipoLocal ? partido.equipoLocal.nombre : "Equipo1"}</span>
                </div>
                <div class="col-2 text-center">
                    <input id="goles-local-phone-partido-${partido.numero}"  onchange="verinputsphone(this.id)" type="number"  size="1" min="0" max="10"style="font-size: 11px;text-align: center;width: 40px">
                </div>
                <div class="col-2 text-center">
                    <input id="goles-visitante-phone-partido-${partido.numero}" onchange="verinputsphone(this.id)" type="number"  size="1" min="0" max="10"style="font-size: 11px;text-align: center;width: 40px">
                </div>
                <div class="col-4 text-center">
                    <img id="bandera-visitante-phone-partido-${partido.numero}"  src="static/img/banderas/${partido.equipoVisitante ? partido.equipoVisitante.foto + ".png" : "sinbandera.jpg"}" height="24" width="24">
                    <span id="equipo-visitante-phone-partido-${partido.numero}">${partido.equipoVisitante ? partido.equipoVisitante.nombre : "Equipo2"}</span>
                </div>
            </div>
        </div>
        `;
    }

    var fasePhoneTemplate = function(fase){
        return `<div id="tabla-${fase.nombre}" style="display: none; color: gold"> 
        <center><h5> ${fase.nombre} </h5></center>
        ${fase.partidos.map(p => partidoPhoneTemplate(p)).join("")}
        </div>
        `
    }

    return Object.assign(scope, {grupoTemplate,partidoDesktopTemplate,partidoPhoneTemplate,fasePhoneTemplate});

})(app.templates || (app.templates = {}));