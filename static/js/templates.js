(function(scope = {}) {
    
    var grupoTemplate = function(grupo) {
        return `<div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>
                        <button type="button" class="btn btn-info btn-sm" onclick="partidos()">+</button>
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
                            <img src="static/img/banderas/${e.nombre}.png" height="24" width="24">${e.nombre}
                        </td>
                        <td style="text-align:center">0</td>
                        <td style="text-align:center">0</td>
                    </tr>        
                `).join("")}
            </tbody>
        </table>
        </div>`;
    }

    return Object.assign(scope, {grupoTemplate});

})(app.templates || (app.templates = {}));