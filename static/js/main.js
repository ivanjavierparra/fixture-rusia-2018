$(() => {
    $.get("http://127.0.0.1/fixture-rusia-2018/cargar-datos.php", function (datos) {
        app.run(datos);
        var fix = app.getFixture();
        fix.grupos.map(g => {
            var selector = "#grupo" + g.letra;
            $(selector).html(app.templates.grupoTemplate(g));    
        })
    });
})