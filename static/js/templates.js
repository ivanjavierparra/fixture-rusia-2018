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

    return Object.assign(scope, {grupoTemplate});

})(app.templates || (app.templates = {}));